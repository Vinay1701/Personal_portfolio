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
  argoid_logo,
  virtusa_logo,
  girlscript_logo,
  dsa_logo,
  c_logo,
  cpp_logo,
  java_logo,
  python_logo,
  sql_logo,
  bootstrap_logo,
  django_logo,
  angular_logo,
  framer_motion_logo,
  aws_logo,
  P_Portfolio_DP,
  budget_tracker_dp,
  newspeek_dp,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Structures",
    icon: creator,
  },
  {
    title: "Algorithms",
    icon: mobile,
  },
  // {
  //   title: "Problem Solver",
  //   icon: creator,
  // },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angualar",
    icon: angular_logo,
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "DSA",
  //   icon: dsa_logo
  // },
  {
    name: "C",
    icon: c_logo,
  },
  {
    name: "C++",
    icon: cpp_logo,
  },
  {
    name: "Java",
    icon: java_logo,
  },
  {
    name: "Python",
    icon: python_logo,
  },
  {
    name: "Django",
    icon: django_logo,
  },
  {
    name: "MySQL",
    icon: sql_logo,
  },
  {
    name: "BootStrap",
    icon: bootstrap_logo,
  },
  {
    name: "Framer Motion",
    icon: framer_motion_logo,
  },
  {
    name: "AWS",
    icon: aws_logo,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Virtusa",
    icon: virtusa_logo,
    iconBg: "#E6DEDD",
    // iconBg: "#383E56",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Developed Full Stack Applications with team collaboration.",
      "Improved myself 70% by actively participating in Real-Time projects and learning new emerging technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Mastered Java, Spring, React and other emerging technologies and built successful Full Stack projects.",
    ],
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "Personal portfolio with interactive 3D objects and effects. Implemented by using a generic editable details file which can be changed according to the users background.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: P_Portfolio_DP,
    source_code_link: "https://github.com/PranavYo/Personal_portfolio.git",
  },
  {
    name: "Budget Tracker and Bill splitter",
    description:
      "Full-stack web application that enables users to track their budgets, view their transactions, and split the bills among friends.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: budget_tracker_dp,
    source_code_link:
      "https://github.com/PranavYo/BudgetTracking-BillSpliting.git",
  },
];

export { services, technologies, experiences, projects };
