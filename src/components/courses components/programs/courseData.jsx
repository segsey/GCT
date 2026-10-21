import cssImg from "../../../assets/courses/program images/css.jpg";
import dsaImg from "../../../assets/courses/program images/dsa.png";
import htmlImg from "../../../assets/courses/program images/html.png";
import javaImg from "../../../assets/courses/program images/java.jpeg";
import javascriptImg from "../../../assets/courses/program images/javascript.jpeg";
import nodejsImg from "../../../assets/courses/program images/nodejs.png";
import reactImg from "../../../assets/courses/program images/reactjs.png";

const CourseData = [
  {
    html: {
      courseTitle: "HTML",
      image: htmlImg,
      description:
        "Learn how to build the structure and content of modern websites using HTML. This course covers essential HTMl elements, forms, links, images, tables, semantic HTML, and best practices for creating well-structed web pages.",
    },
    css: {
      courseTitle: "CSS",
      image: cssImg,
      description:
        "Learn how to transform basic HTML pages into attractive, responsive websites using CSS. This course covers colors, topography, layouts, Flexbox, Grid, positioning animations, responsive design, and modern styling techniques.",
    },
    javaScript: {
      courseTitle: "Javascript (ES6)",
      image: javascriptImg,
      description:
        "Learn how to use JavaScript to create interactive, dynamic, and functional websites. This course takes you from the fundamentals of programming with JavaScript to modern ES6 features and practical web development.",
    },
    reactJs: {
      courseTitle: "React JS",
      image: reactImg,
      description:
        "Learn how to build modern, interactive, and reusable web applications with React. You'll develop practical skills through hands-on projects while learning how to structure and manage real-world React applications.",
    },
    nodeJs: {
      courseTitle: "Node JS",
      image: nodejsImg,
      description:
        "Learn how to use JavaScript beyond the browser and build powerful, scalable backend applications with Node.js. This course introduces you to server-side development, APIs, databases, and the tools needed to create real-world backend applications.",
    },
    dsa: {
      courseTitle: "Data Structures and Algorithms",
      image: dsaImg,
      description:
        "Develop strong problem-solving and computational thinking skills by learning how to organize data efficiently and design effective algorithms. This course introduces essential data structures, algorithmic techniques, and the strategies needed to approach programming problems with confidence.",
    },
    java: {
      courseTitle: "Java",
      image: javaImg,
      description:
        "Build a strong foundation in Java programming and learn how to develop reliable, structured, and object-oriented applications. This course takes you from the fundamentals of Java to core object-oriented programming concepts through practical exercises and projects.",
    },
  },
];

export default CourseData;
