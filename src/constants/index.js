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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Practitioner",
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
        "Led the offshore project delivery within the client’s CorpIT team by supporting DevOps applications like GitHub, JFrog, and SonarCloud.",
        "Collaborated with the Saba team and implemented multiple data migration pipelines on AWS, harnessing technologies such as S3, Lambda, Glue, and Redshift, streamlining the data transfer process.",
        "Created ETL processes to transform data during migration using AWS Glue and SQL queries.",
      ],
    },
    {
      title: "Application Development Associate",
      company_name: "Accenture",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Dec 2021",
      points: [
        "Worked on Power BI development support requests and performed PBI gateway upgradation for 12 months, ensuring the effective operation and enhancement of Power BI solutions.",
        "Collaborated with Miro and Jira support teams to deliver seamless support services, effectively managing and resolving over 500 incidents and service requests, contributing to the teams’ overall success.",
        "Designed and developed a PBI licensing bot and Miro bot using UiPath, resulting in a 30% reduction in manual efforts",
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
      name: "Spitico Foods",
      description:
        "A responsive website developed using HTML and CSS. It serves as a basic template that can used as a starting point for web development projects.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Akshay-Jayaram/SpiticoFoods",
      link: "https://akshay-jayaram.github.io/SpiticoFoods/"
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
