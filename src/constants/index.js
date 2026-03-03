import {
  frame,
  first,
  second,
  third,
  fourth,
} from '../utils';




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
    name: "Features",
    link: "#features",
  },
];



const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
 
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];




const expCards = [
  {
    review:
      "The VTOE project demonstrates a seamless blend of 3D rendering and user interaction. It delivers a smooth virtual try-on experience with real-time adjustments and optimized performance.",
    imgPath: "/images/logo2.png",
    logoPath: "/images/logo2.png",
    title: "VTOE – Virtual Try-On Experience",
    date: "2025",
    responsibilities: [
      "Built an interactive 3D virtual try-on system using React Three Fiber and Drei.",
      "Implemented dynamic body adjustments such as height and waist scaling in real time.",
      "Integrated GLTF models with skeleton binding for accurate cloth fitting.",
      "Optimized loading performance using Suspense, asset preloading, and caching.",
    ],
  },
  {
    review:
      "The AI Resume Analyzer project focuses on intelligent resume parsing and analysis, helping users gain actionable insights and improve their job application outcomes.",
    imgPath: "/images/logo2.png",
    logoPath: "/images/logo2.png",
    title: "AI Resume Analyzer",
    date: "2025",
    responsibilities: [
      "Developed an AI-powered resume analysis tool using React and Node.js.",
      "Integrated NLP models to extract skills, experience, and education from resumes.",
      "Implemented resume scoring and improvement suggestions based on job roles.",
      "Handled PDF and DOCX parsing with secure file uploads and structured outputs.",
    ],
  },
  {
    review:
      "Map-to-Poster transforms geographic data into visually appealing posters. The project emphasizes creativity, precision, and customization for unique map-based designs.",
    imgPath: "/images/logo2.png",
    logoPath: "/images/logo2.png",
    title: "Map-to-Poster Generator",
    date: "2025",
    responsibilities: [
      "Created a map-based poster generator using interactive map APIs.",
      "Allowed users to customize map styles, labels, colors, and layouts.",
      "Converted map views into high-resolution printable posters.",
      "Optimized rendering for export-ready formats while maintaining visual accuracy.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/saeed_anas/"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/anas.shanassaeed/"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: ""
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
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
  expLogos,
  socialImgs,
  navLinks,
  highlightsSlides,
};


