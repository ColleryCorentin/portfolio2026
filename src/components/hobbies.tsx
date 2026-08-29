import { Activity, Drum } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hobbies } from "@/lib/data";
import { getStravaSummary } from "@/lib/strava";

export async function Hobbies() {
  const strava = await getStravaSummary();

  return (
    <section id="hobbies" className="scroll-mt-16 py-20">
      <p className="font-mono text-sm text-muted-foreground">05. Loisirs</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        En dehors du code
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Drum className="size-4 text-muted-foreground" />
              {hobbies.music.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {hobbies.music.description}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="size-4 text-muted-foreground" />
              {hobbies.sport.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {hobbies.sport.description}
            </p>

            {strava && (
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Course (cette année)</dt>
                  <dd className="mt-1 font-semibold">{strava.ytdRunKm} km</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Vélo (cette année)</dt>
                  <dd className="mt-1 font-semibold">{strava.ytdRideKm} km</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Activités</dt>
                  <dd className="mt-1 font-semibold">{strava.ytdActivityCount}</dd>
                </div>
                {strava.recentActivity && (
                  <div>
                    <dt className="text-muted-foreground">Dernière sortie</dt>
                    <dd className="mt-1 font-semibold">
                      {strava.recentActivity.name} · {strava.recentActivity.distanceKm} km
                    </dd>
                  </div>
                )}
              </dl>
            )}

            <Button
              variant="outline"
              size="sm"
              render={
                <a
                  href={hobbies.sport.stravaProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                />
              }
              nativeButton={false}
            >
              Voir mon profil Strava
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
