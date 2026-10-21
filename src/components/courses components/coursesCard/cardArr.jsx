import dsa from "../../../assets/courses/card images/dsa.png";
import html from "../../../assets/courses/card images/html.png";
import java from "../../../assets/courses/card images/java.png";
import javascript from "../../../assets/courses/card images/javascript.jpg";
import node from "../../../assets/courses/card images/nodejs.png";
import react from "../../../assets/courses/card images/reactjs.png";

let CardArr = [
  {
    id: 0,
    image: html,
    badge: { level: "Beginner (6-8 weeks)", color: "text-success" },
    courseTitle: "HTML & CSS",
    description: {
      short: "Build beautiful, responsive websites and web apps.",
      long: "Build a strong foundation in web development by learning how to structure, style, and create responsive websites from scratch using HTML, CSS, and Bootstrap.",
    },
    path: "/programs/programPages/htmlAndCssPage",
  },
  {
    id: 1,
    image: javascript,
    badge: { level: "Beginner (6-8 weeks)", color: "text-success" },
    courseTitle: "Javascript (ES6)",
    description: {
      short: "Power web applications behind the scenes.",
      long: "Learn modern JavaScript and bring your websites to life with interactive, dynamic, and functional web experiences.",
    },
    path: "/programs/programPages/javascriptPage",
  },
  {
    id: 2,
    image: react,
    badge: { level: "Intermediate (6-8 weeks)", color: "text-dark" },
    courseTitle: "React JS",
    description: {
      short: "Build a strong coding foundation.",
      long: "Learn how to build modern, interactive, and scalable web applications using one of the most popular JavaScript libraries.",
    },
    path: "/programs/programPages/reactJsPage",
  },
  {
    id: 3,
    image: node,
    badge: { level: "Intermediate (6-8 weeks)", color: "text-dark" },
    courseTitle: "Node JS",
    description: {
      short: "Build powerful and scalable backend applications.",
      long: "Learn to build powerful backend applications, APIs, and server-side services using Javascript and Node.js.",
    },
    path: "/programs/programPages/nodePage",
  },
  {
    id: 4,
    image: dsa,
    badge: { level: "Pro (6-8 weeks)", color: "text-danger" },
    courseTitle: "Data Strctures & Algorithms",
    description: {
      short: "Write efficient, optimized code.",
      long: "Strengthen your problem-solving skills and learn to design efficient solutions using essential data structures and algorithms.",
    },
    path: "/programs/programPages/dsaPage",
  },
  {
    id: 5,
    image: java,
    badge: { level: "Pro (6-8 weeks)", color: "text-danger" },
    courseTitle: "Java",
    description: {
      short: "Master Object-Oriented Programming with Java",
      long: "Learn Java programming and object-oriented development while building reliable and well structured applications.",
    },
    path: "/programs/programPages/javaPage",
  },
];

export default CardArr;
