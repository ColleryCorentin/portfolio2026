import { unstable_cache } from "next/cache";

const STRAVA_API_BASE = "https://www.strava.com/api/v3";
const STRAVA_TOKEN_URL = "https://www.strava.com/oauth/token";

type StravaTokenResponse = { access_token: string };
type StravaAthlete = { id: number };
type StravaTotals = { count: number; distance: number };
type StravaStats = {
  ytd_run_totals: StravaTotals;
  ytd_ride_totals: StravaTotals;
};
type StravaActivity = {
  name: string;
  type: string;
  distance: number;
  start_date_local: string;
};

export type StravaSummary = {
  ytdRunKm: number;
  ytdRideKm: number;
  ytdActivityCount: number;
  recentActivity: {
    name: string;
    type: string;
    distanceKm: number;
    date: string;
  } | null;
};

function metersToKm(meters: number): number {
  return Math.round(meters / 100) / 10;
}

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  try {
    const res = await fetch(STRAVA_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as StravaTokenResponse;
    return data.access_token ?? null;
  } catch {
    return null;
  }
}

async function fetchStravaSummaryUncached(): Promise<StravaSummary | null> {
  const accessToken = await getAccessToken();
  if (!accessToken) return null;

  const headers = { Authorization: `Bearer ${accessToken}` };

  try {
    const athleteRes = await fetch(`${STRAVA_API_BASE}/athlete`, {
      headers,
      cache: "no-store",
    });
    if (!athleteRes.ok) return null;
    const athlete = (await athleteRes.json()) as StravaAthlete;

    const [statsRes, activitiesRes] = await Promise.all([
      fetch(`${STRAVA_API_BASE}/athletes/${athlete.id}/stats`, {
        headers,
        cache: "no-store",
      }),
      fetch(`${STRAVA_API_BASE}/athlete/activities?per_page=1`, {
        headers,
        cache: "no-store",
      }),
    ]);

    if (!statsRes.ok) return null;
    const stats = (await statsRes.json()) as StravaStats;

    let recentActivity: StravaSummary["recentActivity"] = null;
    if (activitiesRes.ok) {
      const activities = (await activitiesRes.json()) as StravaActivity[];
      const latest = activities[0];
      if (latest) {
        recentActivity = {
          name: latest.name,
          type: latest.type,
          distanceKm: metersToKm(latest.distance),
          date: latest.start_date_local,
        };
      }
    }

    return {
      ytdRunKm: metersToKm(stats.ytd_run_totals.distance),
      ytdRideKm: metersToKm(stats.ytd_ride_totals.distance),
      ytdActivityCount: stats.ytd_run_totals.count + stats.ytd_ride_totals.count,
      recentActivity,
    };
  } catch {
    return null;
  }
}

// Caches the whole result (incl. the token-refresh POST, which Next's
// per-fetch `next.revalidate` doesn't reliably cover) for an hour, well
// under Strava's 100 req/15min and 1000 req/day limits. A `null` result
// (missing env vars or a failed call) is cached too, so stats can take up
// to an hour to appear after fixing the Strava setup.
export const getStravaSummary = unstable_cache(
  fetchStravaSummaryUncached,
  ["strava-summary"],
  { revalidate: 3600, tags: ["strava"] },
);
