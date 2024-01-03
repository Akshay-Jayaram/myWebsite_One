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
      name: "To-Do List",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Akshay-Jayaram/to-do-list_React",
      link: "https://akshay-jayaram.github.io/to-do-list_React/"
    },
    {
      name: "Spitico Foods",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
      source_code_link: "https://github.com/",
      link: ""
    },
  ];
  
  export { services, technologies, experiences, education, projects };