const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://payandev.ir",
  title: "Payandev.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  firstName: "Omid",
  name: "Omid Payandeh",
  role: "Senior Front End Engineer",
  picture:
    "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",

  description:
    "With 10+ years of experience in JavaScript, TypeScript, and React, passionate about building scalable and user-friendly web applications.",
  resume: "https://payandeh.storage.c2.liara.space/resume-new-web.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/omid-payandeh",
    github: "https://github.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Enterprise Workflow System",
    description:
      "Paperless solution for managing approvals, tasks, and organizational workflows, streamlining processes and reducing manual overhead.",
    stack: ["CI/CD", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    image: "https://payandeh.storage.c2.liara.space/paperless.webp",
  },
  {
    name: "Multi-Sided Marketplace Platform",
    description:
      "Multi-sided system with a customer app, marketer portal, and admin dashboard, enabling scalable e-commerce and real-time interactions.",
    stack: ["PWA", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    image: "https://payandeh.storage.c2.liara.space/marketplace.webp",
  },
  {
    name: "AI-Powered Page Builder",
    description:
      "System with admin panels, component library, and landing engine enhanced by AI-driven multilingual layout and content suggestions.",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    image: "https://payandeh.storage.c2.liara.space/landing.webp",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "Material UI",
  "Git",
  "CI/CD",
  "Cypress",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "o.payandeh@mail.com",
};

export { header, about, projects, skills, contact };
