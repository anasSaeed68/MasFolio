                
import {
  frame, first, second, third, fourth,
   ideas, concepts,designs,code,
  seo, chat, time,
  logo2,
  fb, insta, linkedin, x,
  company_logo4, company_logo5, company_logo7, company_logo9,
  react,
  nextJs,
  node,
  mongoDb,
  js,
  ts,
  tailwind,
  three,
  python,
  mySql,
  java,
  css
} from '../utils';


const skillsSet = [
  {
    name: "React.js",
    imgPath: react,
    details:
      "Advanced React developer with strong expertise in component architecture, hooks, context API, reusable UI systems, and performance optimization."
  },
  {
    name: "Next.js",
    imgPath: nextJs,
    details:
      "Experienced in building full-stack applications using Next.js including App Router, SSR, API routes, authentication, and optimized rendering."
  },
  {
    name: "Node.js",
    imgPath: node,
    details:
      "Skilled in creating scalable backend services, REST APIs, authentication systems, and real-time applications using Node.js and Express."
  },
  {
    name: "MongoDB",
    imgPath: mongoDb,
    details:
      "Strong understanding of MongoDB database design, aggregation pipelines, schema modeling, and efficient data handling."
  },
  {
    name: "JavaScript",
    imgPath: js,
    details:
      "Proficient in modern JavaScript including ES6+, asynchronous programming, DOM manipulation, and advanced functional concepts."
  },
  {
    name: "TypeScript",
    imgPath: ts,
    details:
      "Experienced in writing scalable and maintainable applications using TypeScript with strong type safety and clean architecture."
  },
  {
    name: "Tailwind CSS",
    imgPath: tailwind,
    details:
      "Highly skilled in creating responsive, modern, and visually appealing user interfaces using Tailwind CSS."
  },
  {
    name: "Three.js",
    imgPath: three,
    details:
      "Capable of building interactive 3D experiences, animations, and immersive web interfaces using Three.js and React Three Fiber."
  },
  {
  name: "Python",
  imgPath: python,
  details:
    "Experienced in Python programming for backend development, automation, problem solving, data handling, and machine learning fundamentals."
},
{
  name: "MySQL",
  imgPath: mySql,
  details:
    "Skilled in designing relational databases, writing optimized SQL queries, managing schemas, and handling efficient data storage using MySQL."
},
{
  name: "Java",
  imgPath: java,
  details:
    "Strong understanding of object-oriented programming, data structures, algorithms, and application development using Java."
},
{
  name: "CSS3",
  imgPath: css,
  details:
    "Highly proficient in creating responsive, modern, and visually appealing layouts using CSS3, Flexbox, Grid, and animations."
}
  
];

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
    {
    name: "Contact",
    link: "#contact",
  },
];



const words = [
  { text: "Ideas", imgPath: ideas },
  { text: "Concepts", imgPath: concepts },
  { text: "Designs", imgPath: designs },
  { text: "Code", imgPath: code },
  { text: "Ideas", imgPath: ideas },
  { text: "Concepts", imgPath: concepts },
  { text: "Designs", imgPath: designs },
  { text: "Code", imgPath: code },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
 
  {
    imgPath: company_logo4,
  },
  {
    imgPath: company_logo5,
  },
  {
    imgPath: company_logo7,
  },
  {
    imgPath: company_logo9,
  },
 {
    imgPath: company_logo4,
  },
  {
    imgPath: company_logo5,
  },
  {
    imgPath: company_logo7,
  },
  {
    imgPath: company_logo9,
  },
];

const abilities = [
  {
    imgPath: seo,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: chat,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: time,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];




const expCards = [
  {
    review:
      "The VTOE project demonstrates a seamless blend of 3D rendering and user interaction. It delivers a smooth virtual try-on experience with real-time adjustments and optimized performance.",
    imgPath: logo2,
    logoPath: logo2,
    title: "VTOE – Virtual Try-On Experience",
    date: "2025",
    responsibilities: [
      "Built an interactive 3D virtual try-on system using React Three Fiber and Drei.",
      "Implemented dynamic body adjustments such as height and waist scaling in real time.",
      "Integrated GLTF models with skeleton binding for accurate cloth fitting.",
      "Optimized loading performance using Suspense, asset preloading, and caching.",
    ],
    link:"https://vtoe-ffrontend.vercel.app/",
  },
 {
  review:
    "Resumind is an AI-powered resume analysis platform designed to help users improve their resumes through intelligent feedback, resume scoring, and modern authentication workflows.",
    
  imgPath: logo2,
  logoPath: logo2,

  title: "Resumind",

  date: "2026",

  responsibilities: [
    "Built an AI-powered resume analyzer using React Router v7 and TypeScript.",
    
    "Integrated Puter.js for secure authentication and AI-based resume analysis.",
    
    "Implemented resume scoring, feedback generation, and resume improvement suggestions.",
    
    "Developed a responsive and modern user interface with smooth client-side navigation.",
    
    "Handled resume uploads and structured AI analysis workflows for enhanced user experience.",
  ],
  link:"https://resumind-ai-resume-analyzer-9-pqpd8.puter.site/"
},
  {
    review:
      "Map-to-Poster transforms geographic data into visually appealing posters. The project emphasizes creativity, precision, and customization for unique map-based designs.",
    imgPath: logo2,
    logoPath: logo2,
    title: "Map-to-Poster Generator",
    date: "2025",
    responsibilities: [
      "Created a map-based poster generator using interactive map APIs.",
      "Allowed users to customize map styles, labels, colors, and layouts.",
      "Converted map views into high-resolution printable posters.",
      "Optimized rendering for export-ready formats while maintaining visual accuracy.",
    ],
    link:""
  },
];




const socialImgs = [
  {
    name: "insta",
    imgPath: insta,
    link: "https://www.instagram.com/saeed_anas/"
  },
  {
    name: "fb",
    imgPath: fb,
    link: "https://www.facebook.com/anas.shanassaeed/"
  },
  {
    name: "x",
    imgPath: x,
    link: "https://x.com/Kirigaya335016"
  },
  {
    name: "linkedin",
    imgPath: linkedin,
    link: "https://www.linkedin.com/in/anas-saeed-2b329424a/"
  },
];

const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game-changing chip.",
      "Groundbreaking performance.",
    ],
    video: frame,
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: [
      "Titanium.",
      "So strong. So light. So Pro.",
    ],
    video:second,
    videoDuration: 2,
  },
  {
    id: 3,
    textLists: [
      "Iphone 15 Pro Max has the",
      "longest optical zoom in",
      "iphone ever. Far out.",
    ],
    video: third,
    videoDuration: 5,
  },
  {
    id: 4,
    textLists: [
      "All-new Action button.",
      "What will yours do?."
    ],
    video: fourth,
    videoDuration: 3.63,
  }

];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  socialImgs,
  navLinks,
  highlightsSlides,
  skillsSet,
};


