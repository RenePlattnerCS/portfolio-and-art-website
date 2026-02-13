export interface HardSkill {
  name: string;
  level: number;
  percentage: number;
  details: string;
}

export interface SoftSkill {
  title: string;
  rating: number;
  description: string;
}

export const hardSkills: HardSkill[] = [
  {
    name: "Python & Frameworks",
    level: 5,
    percentage: 95,
    details:
      "Django, Flask, Selenium, PyAutoGUI, Tkinter - Automation & Web Development",
  },
  {
    name: "Networking & Linux",
    level: 4,
    percentage: 85,
    details:
      "TCP/IP, HTTP/HTTPS, SSL, DNS, DHCP, SSH, Linux Server Configuration",
  },
  {
    name: "CI/CD & Testing",
    level: 4,
    percentage: 80,
    details: "Git, CI/CD Pipelines, Unit Testing, Mocking, Code Quality Tools",
  },
  {
    name: "Clean Code & Architecture",
    level: 4,
    percentage: 85,
    details:
      "SOLID Principles, Design Patterns (Factory, Singleton), Event-Driven Architecture",
  },
  {
    name: "C/C++ & Systems Programming",
    level: 4,
    percentage: 80,
    details: "Embedded Systems, Bare-metal Programming, Memory Management",
  },
  {
    name: "Datenbanken (SQL)",
    level: 3,
    percentage: 65,
    details: "Relational Databases, SQL, Database Design, Query Optimization",
  },
  {
    name: "Frontend Development",
    level: 3,
    percentage: 60,
    details:
      "JavaScript (ES6+), React, Next.js, HTML5, CSS3, Responsive Design",
  },
  {
    name: "C# & Unity",
    level: 4,
    percentage: 75,
    details: "Game Development, OOP, Event Systems, State Machines",
  },
  {
    name: "Security Basics",
    level: 2,
    percentage: 40,
    details:
      "Basic Penetration Testing, Security Awareness, Auth/Authorization",
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: "Schnelles Selbstlernen",
    rating: 5,
    description:
      "Eigenständige Aneignung komplexer Technologien (Unity, Embedded Systems, QPC Framework). Bewiesene Fähigkeit, schnell neue Domänen zu meistern.",
  },
  {
    title: "Kreatives Problemlösen",
    rating: 5,
    description:
      "Multidisziplinärer Hintergrund (Programmierung, Kunst, Musik, Philosophie) ermöglicht unkonventionelle Lösungsansätze.",
  },
  {
    title: "Projektvollendung",
    rating: 5,
    description:
      "Konsequente Fertigstellung von Projekten - vom kompletten Spiel bis zu produktiven Automatisierungstools. Nicht nur Prototypen, sondern funktionsfähige Lösungen.",
  },
  {
    title: "Kommunikation & Zusammenarbeit",
    rating: 4,
    description:
      "Arbeit mit nicht-technischem Personal (Pflegekräfte), Lehrerfahrung. Kann komplexe Konzepte verständlich erklären.",
  },
  {
    title: "Nutzerzentriertes Denken",
    rating: 4,
    description:
      "Entwicklung von Automatisierungstools speziell für die Bedürfnisse der Nutzer. Fokus auf Usability für nicht-technische Anwender.",
  },
  {
    title: "Flexibilität & Anpassungsfähigkeit",
    rating: 4,
    description:
      "Komfortabel beim Wechsel zwischen verschiedenen Domänen (Embedded, Web, Game Dev). Bereit, neue Technologien zu erlernen.",
  },
  {
    title: "Strukturiertes Vorgehen",
    rating: 4,
    description:
      "Anwendung von Clean Code Prinzipien, Design Patterns und Testing. Philosophie-Hintergrund stärkt logisches Denken.",
  },
  {
    title: "Geduld & Durchhaltevermögen",
    rating: 4,
    description:
      "Komplexes Debugging in Embedded-Systemen, kontinuierliches Lernen trotz Herausforderungen.",
  },
];
