export type Tool = {
  name: string;
  image?: string;
  use: "default" | "secondary";
};

export const frontTools: Tool[] = [
  {
    name: "HTML",
    image: "/tools/front/html.svg",
    use: "default",
  },
  {
    name: "CSS",
    image: "/tools/front/css.svg",
    use: "default",
  },
  {
    name: "JavaScript",
    image: "/tools/front/js.png",
    use: "default",
  },
  {
    name: "TypeScript",
    image: "/tools/front/ts.png",
    use: "default",
  },
  {
    name: "React.js",
    image: "/tools/front/react.png",
    use: "default",
  },
  {
    name: "Tailwind CSS",
    image: "/tools/front/tailwind.png",
    use: "default",
  },
  {
    name: "Shadcn/ui",
    image: "/tools/front/shadcn.png",
    use: "default",
  },
];

export const backTools: Tool[] = [
  {
    name: "PHP",
    image: "/tools/back/php.png",
    use: "default",
  },
  {
    name: "Next.js",
    image: "/tools/back/next.png",
    use: "default",
  },
  {
    name: "Node.js",
    image: "/tools/back/node.svg",
    use: "secondary",
  },
  {
    name: "Express.js",
    image: "/tools/back/express.svg",
    use: "secondary",
  },
  {
    name: "API REST",
    use: "secondary",
  },
  {
    name: "Symfony",
    image: "/tools/back/symfony.svg",
    use: "secondary",
  },
];

export const dataTools: Tool[] = [
  {
    name: "SQL - PL/SQL",
    image: "/tools/data/sql.svg",
    use: "default",
  },
  {
    name: "SGBDR (Oracle - MySQL)",
    image: "/tools/data/sgbd.svg",
    use: "default",
  },
  {
    name: "NoSQL (MongoDb)",
    image: "/tools/data/nosql.svg",
    use: "secondary",
  },
  {
    name: "PowerBI",
    image: "/tools/data/powerbi.png",
    use: "secondary",
  },
];

export const softwareTools: Tool[] = [
  {
    name: "Visual Studio Code",
    image: "/tools/software/vscode.png",
    use: "default",
  },
  {
    name: "PHPStorm",
    image: "/tools/software/phpstorm.png",
    use: "default",
  },
  {
    name: "Figma",
    image: "/tools/software/figma.svg",
    use: "default",
  },
  {
    name: "Adobe Illustrator",
    image: "/tools/software/illustrator.png",
    use: "secondary",
  },
  {
    name: "Adobe Photoshop",
    image: "/tools/software/photoshop.png",
    use: "secondary",
  },
  {
    name: "Office 365",
    image: "/tools/software/office.svg",
    use: "secondary",
  },
  {
    name: "WebStorm",
    image: "/tools/software/webstorm.png",
    use: "secondary",
  },
];

export const otherTools: Tool[] = [
  {
    name: "Python",
    image: "/tools/other/python.png",
    use: "default",
  },
  {
    name: "Git",
    image: "/tools/other/git.png",
    use: "default",
  },
  {
    name: "GitHub",
    image: "/tools/other/github.svg",
    use: "default",
  },
  {
    name: "GitLab",
    image: "/tools/other/gitlab.svg",
    use: "default",
  },
  {
    name: "Linux",
    image: "/tools/other/linux.png",
    use: "default",
  },
];
