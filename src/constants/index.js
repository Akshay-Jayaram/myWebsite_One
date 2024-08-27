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
  aws,
  docker,
  dsce,
  ucr,
  accenture,
  summaizer,
  spitico,
  portfolio,
  threejs,
  UCRmarket,
  az900,
  sc900,
  awsgenai,
  awscpract,
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
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Leadership Inters",
    company_name: "ACM at UCR",
    icon: ucr,
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
    icon: accenture,
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
    icon: accenture,
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
    icon: ucr,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
    ],
  },
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    company_name: "Dayananda Sagar College of Engineering",
    icon: dsce,
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
      "Next.js marketplace application for UCR students to buy and sell campus-related items. Created for the UCR startup incubation contest, it enables posting, approving, and trading of furniture, electronics, and other student essentials. Fully deployed and managed on AWS, leveraging cloud infrastructure for scalability and reliability.",
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
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: UCRmarket,
    source_code_link: "https://github.com/Akshay-Jayaram/ucr-marketplace",
    link: "https://ucrmarketplace.com/"
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
    image: summaizer,
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
    image: portfolio,
    source_code_link: "https://github.com/Akshay-Jayaram/myWebsite_One",
    link: "https://akshay-jayaram.github.io/myWebsite_One/"
  },
];

const credlybadges = [
  {
    link: "73849694-12b1-4f52-91c2-2cf6fa46fd25",
    image: awscpract,
  },
  {
    link: "a15814b2-cd21-4945-8e12-b8fb8d690a04",
    image: az900,
  },
  {
    link: "4beb28fa-3c9e-4ba7-be0a-eb9a373938a8",
    image: sc900,
  },
  {
    link: "82e3d8ea-c4d1-4f9a-a975-c69022a08b6c",
    image: awsgenai,
  },
];

export { services, technologies, experiences, education, projects, credlybadges };
