export type Tool = {
  name: string;
  image?: string;
  use: "default" | "secondary";
};

export const languages: Tool[] = [
  { name: "TypeScript", image: "/tools/languages/ts.png", use: "default" },
  { name: "JavaScript", image: "/tools/languages/js.png", use: "default" },
  { name: "PHP", image: "/tools/languages/php.png", use: "default" },
  { name: "Python", image: "/tools/languages/python.png", use: "default" },
  { name: "Golang", image: "/tools/languages/go.png", use: "secondary" },
  { name: "C++", image: "/tools/languages/cpp.png", use: "secondary" },
  { name: "Java", image: "/tools/languages/java.png", use: "secondary" },
];

export const webArchitecture: Tool[] = [
  { name: "React.js", image: "/tools/web/react.png", use: "default" },
  {
    name: "Symfony / API Platform",
    image: "/tools/web/symfony.svg",
    use: "default",
  },
  { name: "Spring Boot", image: "/tools/web/spring.png", use: "default" },
  { name: "PHPUnit / JUnit", use: "default" },
  { name: "Node.js", image: "/tools/web/node.svg", use: "secondary" },
  { name: "Next.js", image: "/tools/web/next.png", use: "secondary" },
];

export const infraDevOps: Tool[] = [
  {
    name: "Git (GitHub/GitLab)",
    image: "/tools/infra/git.png",
    use: "default",
  },
  { name: "Docker", image: "/tools/infra/docker.png", use: "default" },
  { name: "Linux", image: "/tools/infra/linux.png", use: "default" },
  { name: "Kubernetes", image: "/tools/infra/k8s.png", use: "secondary" },
  { name: "Wireshark", image: "/tools/infra/wireshark.png", use: "secondary" },
  { name: "GitHub Actions", image: "/tools/infra/gha.png", use: "secondary" },
];

export const databaseTools: Tool[] = [
  { name: "PostgreSQL / MySQL", image: "/tools/data/sql.svg", use: "default" },
  { name: "Oracle (PL/SQL)", image: "/tools/data/oracle.svg", use: "default" },
  {
    name: "MongoDB (NoSQL)",
    image: "/tools/data/mongodb.svg",
    use: "secondary",
  },
  { name: "PowerBI", image: "/tools/data/powerbi.png", use: "secondary" },
];

export const projectManagement: Tool[] = [
  { name: "Agile (Scrum/Kanban)", use: "default" },
  { name: "UML / Merise", use: "default" },
  {
    name: "MS Planner",
    image: "/tools/project/ms.png",
    use: "default",
  },
  { name: "Figma", image: "/tools/project/figma.svg", use: "default" },
  {
    name: "Trello",
    image: "/tools/project/trello.png",
    use: "secondary",
  },
];
