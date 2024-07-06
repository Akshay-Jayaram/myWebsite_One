import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  UCRmarket,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Cloud Practitioner",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "typescript",
    icon: typescript,
  },
];

const experiences = [
  {
    title: "Leadership Inters",
    company_name: "ACM at UCR",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Part of the ACM leadership group, responsible for drafting and presenting events, workshops, and socials that fit alongside ACM’s vision.",
      "Collaborate with the leadership team to design technical events for the year 2024, focusing on Web development and API call",
    ],
  },
  {
    title: "Custom Software Engineering Analyst",
    company_name: "Accenture",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Aug 2023",
    points: [
      "Led offshore project delivery for the client’s CorpIT team, providing support for DevOps applications including GitHub, JFrog, and SonarCloud, achieving an average CSAT score of 96%.",
      "Worked cross-functionally to establish Continuous Integration and Continuous Deployment (CI/CD) pipelines, automating software workflows and decreasing service downtime by an average of 40%.",
      "Worked directly with product owners to resolve issues and technical pain points during deployment and production.",
    ],
  },
  {
    title: "Application Development Associate",
    company_name: "Accenture",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Dec 2021",
    points: [
      "Worked on Power BI development support requests, handling over 150 L2 incidents, and performed PBI gateway upgradation for 12 months, ensuring the effective operation and enhancement of Power BI solutions.",
      "Collaborated with Miro and Jira support teams, managing and resolving over 500 ServiceNow incidents and requests.",
      "Designed and implemented UiPath-driven bots for PBI Pro licensing and Miro team management, automating usage tracking and cost prediction, and reducing manual efforts by 60%.",
    ],
  },
];

const education = [
  {
    title: "Master of Science in Computer Engineering",
    company_name: "University of California, Riverside",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
    ],
  },
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    company_name: "Dayananda Sagar College of Engineering",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2016 - May 2020",
    points: [
    ],
  },
];



const projects = [
  {
    name: "UCR Marketplace",
    description:
      "Next.js application developed to facilitate a marketplace for UCR students, enabling them to buy and sell items within the campus community. This project was created as part of the UCR startup incubation contest, providing a platform for students to post, approve, and trade items like furniture, electronics, and transportation tools.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tRPC",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: UCRmarket,
    source_code_link: "https://github.com/Akshay-Jayaram/ucrmarketplace",
    link: ""
  },
  {
    name: "AI Article Summarizer",
    description:
      "Web-based platform that Transforms lengthy articles into concise insights effortlessly, saving time and delivering the essence of content in seconds.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Akshay-Jayaram/ai-article-summarizer",
    link: "https://akshay-jayaram.github.io/ai-article-summarizer/"
  },
  {
    name: "Portfolio Site",
    description:
      "A dynamic portfolio designed to exhibit my work, education, and skills in an engaging and interactive manner, reflecting my expertise and passion for web development and design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Akshay-Jayaram/myWebsite_One",
    link: "https://akshay-jayaram.github.io/myWebsite_One/"
  },
];

export { services, technologies, experiences, education, projects };
