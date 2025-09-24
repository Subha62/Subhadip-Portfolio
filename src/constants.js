// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import celebalLogo from './assets/company_logo/Celebal png.png';
import bharatinternLogo from './assets/company_logo/bharat intern.png';


// Education Section Logo's
import jgecLogo from './assets/education_logo/jgec logo.jpeg';
import rcrdLogo from './assets/education_logo/RCRD School image.jpg';


// Project Section Logo's
import randommemeLogo from './assets/project_logo/random meme.png';
import sbmusicLogo from './assets/project_logo/sb music image.png';
import servicedeskLogo from './assets/project_logo/service-desk.png';
import shoppingcartLogo from './assets/project_logo/Shopping Cart.png';
import tourismLogo from './assets/project_logo/tourism plan.png';


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Next JS', logo: nextjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },


        ],
    },
    {
        title: 'Backend',
        skills: [

            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MongoDB', logo: mongodbLogo },


        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'TypeScript', logo: typescriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: mcLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },

        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: celebalLogo,
        role: "React JS Developer",
        company: "Celebal Technologies",
        date: "June 2025 - August 2025",
        desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "TypeScript",
            "Node JS",
            "Tailwind CSS",
            "MongoDb",
            "Redux",
            " Next Js",
        ],
    },
    {
        id: 1,
        img: bharatinternLogo,
        role: "Web Devloper",
        company: "Bharat Intern",
        date: "July 2024 - August 2024",
        desc: " Developed dynamic and scalable web applications using  frontend and using technologies such as HTML, CSS, JavaScript. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
        skills: [
            "JavaScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "Animation & Responsive",
        ],
    },

];

export const education = [
    {
        id: 0,
        img: jgecLogo,
        college: "Jalpaiguri Government Engineering College, West Bengal,Jalpaiguri",
        date: "Novmber 2022 - June 2026",
        grade: "7.48 DGPA(till 6th semester)",
        desc: "I’m a passionate and detail-oriented final year B.Tech student in Computer Science and Engineering (2022–2026) at Jalpaiguri Government Engineering College.Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. MY  College allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelors of Technology - B.Tech(Computer Science Engineering)",
    },
    {
        id: 1,
        img: rcrdLogo,
        school: "Rohini C.R.D. High School, West Bengal, Rohini",
        date: " 2020 - 2022",
        grade: "93%",
        desc: "I completed my Higher Secondary education in Science from Rohini C.R.D. High School. During this time, I built a strong foundation in subjects like Physics, Chemistry, Mathematics, and Biology. Alongside academics, I also participated in various school activities that contributed to my overall growth and preparation for higher studies.",
        degree: "Higher Secondary (H.S.)",

    },
    {
        id: 2,
        img: rcrdLogo,
        school: "Rohini C.R.D. High School, West Bengal, Rohini",
        date: " 2015 - 2020",
        grade: "73.85%",
        desc: "I completed my Secondary education from Rohini C.R.D. High School. This phase of my studies gave me a strong foundation in core subjects like Mathematics, Science, Social Studies, and Languages. It also helped me develop discipline, curiosity for learning, and the ability to balance academics with extracurricular activities, shaping the base for my Higher Secondary education",
        degree: " Secondary (S)",

    },

];

export const projects = [
    {
        id: 0,
        title: "Random Meme",
        description:
            "A fun and interactive web application built with React.js that fetches and displays random memes from various online sources. Users can browse, enjoy, and share memes instantly. The app combines humor with a simple and responsive interface, making it a delightful experience for anyone looking for quick entertainment.",
        image: randommemeLogo,
        tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
        github: "",
        webapp: "",

    },
    {
        id: 1,
        title: "Music Application",
        description:
            "SB Music is a Progressive Web App (PWA) built with React.js and YouTube API that allows users to discover and listen to new music from around the world. The app features high-quality streaming, trending and new releases, audio-only playback, search functionality, and playback controls directly from notifications. Its clean and modern interface ensures an enjoyable user experience for music enthusiasts.",
        image: sbmusicLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/Subha62/SB-Music-App",
        webapp: "",

    },
    {
        id: 2,
        title: "Service Desk Application",
        description:
            "A full-stack helpdesk platform built with React.js, Node.js, and MongoDB. Users can register, log in, create support tickets, and track their status, while admins can assign, update, and resolve tickets efficiently. The app features a responsive design and real-time updates, providing a seamless experience for both users and support teams.",
        image: servicedeskLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "JWT", "REST API"],
        github: "https://github.com/Subha62/Service-Desk-Application",
        webapp: "",

    },
    {
        id: 3,
        title: "E-commerce Store",
        description:
            "A modern and responsive online store application built with React.js. Users can browse products, search for items, add them to the cart, and complete the checkout process with a smooth order summary. The app focuses on providing an intuitive shopping experience with clean UI and seamless navigation.",
        image: shoppingcartLogo,
        tags: ["React JS", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Node.js"],
        github: "https://github.com/Subha62/E-commerce-Store",
        webapp: "",

    },
    {
        id: 4,
        title: "Tourism Plan",
        description:
            "A web application that helps users explore and plan tourism activities with ease. It provides details about destinations, travel itineraries, and essential information, built with React.js and modern web technologies for a smooth and engaging user experience.",
        image: tourismLogo,
        tags: ["JavaScript", "React JS", "HTML", "CSS"],
        github: "",
        webapp: "",

    },
    // {
    //     id: 5,
    //     title: "Webverse Digital",
    //     description:
    //         "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //     image: webverLogo,
    //     tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //     github: "https://github.com/codingmastr/Webverse-Digital",
    //     webapp: "https://webversedigital.com/",
    // },
    // {
    //     id: 6,
    //     title: "Coding Master",
    //     description:
    //         "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //     image: cmLogo,
    //     tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //     github: "https://codingmasterweb.in/",
    //     webapp: "https://codingmasterweb.in/",
    // },
    // {
    //     id: 7,
    //     title: "Image Search App",
    //     description:
    //         "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //     image: imagesearchLogo,
    //     tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //     github: "https://github.com/codingmastr/Image-Search-App",
    //     webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //     id: 8,
    //     title: "Image Background Remover",
    //     description:
    //         "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //     image: removebgLogo,
    //     tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //     github: "https://github.com/codingmastr/Image-Background-Remover",
    //     webapp: "https://removeyourbg.netlify.app/",
    // },
];  