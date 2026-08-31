export const siteConfig = {
  name: "Corentin Collery",
  initials: "Portfolio",
  title: "Développeur Full-Stack",
  tagline:
    "Je conçois et développe des applications web rapides, robustes et soignées, du design à la mise en production.",
  location: "Lille, France",
  coordinates: { lat: 50.6292, lng: 3.0573 },
  email: "corentincollery@yahoo.fr",
  resumeUrl: "/cv.pdf",
  socials: {
    github: "https://github.com/ColleryCorentin",
    linkedin: "https://linkedin.com/in/collerycorentin"
  },
};

export const nav = [
  { label: "À propos", href: "#about" },
  { label: "Parcours", href: "#parcours" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Loisirs", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "Je suis développeur passionné par la création d'interfaces claires et de systèmes fiables. J'aime autant plonger dans un problème d'architecture backend que peaufiner le dernier pixel d'une interface.",
    "Actuellement à la recherche de nouveaux projets, j'apprécie particulièrement les équipes qui accordent autant d'importance à la qualité du code qu'à l'expérience utilisateur.",
  ],
  highlights: [
    { label: "Années d'expérience", value: "5+" },
    { label: "Projets livrés", value: "12+" },
    { label: "Stack principale", value: "TS / React" },
  ],
};

export const education = [
  {
    period: "Oct. 2023 — Août 2026",
    degree: "MSC",
    school: "Epitech, Lille",
    description: [
      "Master spécialisé en développement logiciels, architecture et gestion de projets informatiques.",
      "Spécialité IA et Big Data.",
    ],
  },
  {
    period: "Oct. 2021 — Août 2023",
    degree: "Web@cadémie",
    school: "Epitech, Lille",
    description: [
      "Formation intensive en développement web et réalisation de projets full-stack.",
    ],
  },
  {
    period: "Sept. 2020 — Juin 2021",
    degree: "Initiation coding",
    school: "Btech-Euratechnologie, Lille",
    description: ["Initiation aux langages HTML5 et CSS3."],
  },
  {
    period: "Sept. 2017 — Juin 2019",
    degree: "BTS Tourisme",
    school: "Lycée Gaston Berger, Lille",
    description: [],
  },
  {
    period: "Sept. 2016 — Juin 2017",
    degree: "BAC STMG",
    school: "Lycée Albert Chatelet, Saint-Pol-sur-Ternoise",
    description: [],
  },
];

export const experience = [
  {
    period: "Mars 2025 — Août 2026",
    title: "Développeur Web",
    company: "Groupe Convergence, Roubaix",
    description: [
      "Développement d'une plateforme web dédiée aux sapeurs-pompiers volontaires de France permettant le calcul automatisé de leurs droits à la retraite, avec une solution adaptée aux règles en vigueur.",
    ],
  },
  {
    period: "Jan. 2024 — Mars 2025",
    title: "Développeur Web",
    company: "Kréatic, Roubaix",
    description: [
      "Création de sites web personnalisés avec un CMS propriétaire développé en interne.",
      "Développement d'outils internes via des scripts et programmes sur mesure pour optimiser les processus de l'entreprise.",
    ],
  },
  {
    period: "Sept. 2022 — Sept. 2023",
    title: "Développeur Web et mobile",
    company: "Automonad Mobility, Famars",
    description: [
      "Création et développement d'une plateforme de commandes en ligne fonctionnant sous React et Firebase.",
    ],
  },
  {
    period: "Juin 2019 — Sept. 2021",
    title: "Conseiller en séjours touristiques",
    company: "Office de Tourisme, Boulogne-sur-Mer",
    description: [],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "REST", "GraphQL"],
  },
  {
    category: "Outils",
    items: ["Git", "Docker", "Vercel", "Figma", "CI/CD"],
  },
];

export const hobbies = {
  music: {
    title: "Musique",
    description:
      "Je joue de la batterie dans un groupe depuis plusieurs années. C'est mon exutoire créatif en dehors du code.",
  },
  sport: {
    title: "Sport",
    description:
      "Course à pied et vélo au quotidien, je suis mes sorties sur Strava.",
    stravaProfileUrl: "https://www.strava.com/athletes/184875954",
  },
};

export const projects = [
  {
    title: "Nom du projet 1",
    description:
      "Courte description du projet : le problème résolu, la stack utilisée et le résultat obtenu.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Nom du projet 2",
    description:
      "Courte description du projet : le problème résolu, la stack utilisée et le résultat obtenu.",
    tags: ["React", "Tailwind", "API REST"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Nom du projet 3",
    description:
      "Courte description du projet : le problème résolu, la stack utilisée et le résultat obtenu.",
    tags: ["Node.js", "Docker", "CI/CD"],
    liveUrl: "#",
    repoUrl: "#",
  },
];