/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arjun's Portfolio",
  description:
    "A passionate front-end developer seeking a challenging environment to explore my skills in the most efficient way for the advancement of the organization and my career.",
  og: {
    title: "Arjun Portfolio",
    type: "website",
    url: "https://arjunportfolio-app.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: `Arjun`,
  logo_name: "Arjun",
  nickname: "Frontend Developer",
  subTitle: `An experienced Front-end developer driven by passion, seeking dynamic opportunities to leverage my skills in crafting exceptional digital experiences. Committed to pushing boundaries, I aim to contribute to organizational growth while advancing my career journey`,
  resumeLink:
    "https://drive.google.com/file/d/1QO7TFfKQfIZaAcIIm3NsATzWxb__QV0Z/view?usp=drive_link",
  portfolio_repository: "https://github.com/ARJUN0495/portfolio-website-arjun",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ARJUN0495",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/arjun-p-a-39a26a116/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },

  {
    name: "Gmail",
    link: "mailto: arjunpa95.official@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title:
        "A Passionate FRONTEND DEVELOPER who wants to explore every Tech stack",
      fileName: "Skills",
      skills: [
        "⚡ Extensive experience in building scalable and reusable React components, with advanced state management using Context API and Redux",
        "⚡ Proficient in utilizing SonarQube and Sonar Cloud for continuous code quality inspection, performing automatic reviews to identify and resolve bugs, code smells, severity issues, enforce coding standards, and monitor code coverage and complexity",
        "⚡ Skilled in applying a variety of styles using CSS, Sass, Bootstrap, and Material UI to create responsive, user-friendly, and visually appealing websites",
        "⚡ Strong understanding of modern JavaScript (ES6+), HTML5, and the latest web development best practices",
        "⚡ Experience with RESTful APIs and asynchronous programming for seamless data integration",
        "⚡ Knowledgeable in using Git for version control and collaboration in a team environment",
        "⚡ Adept at troubleshooting and debugging to ensure optimal performance and user experience",
        "⚡ Enthusiastic about React and passionate about continuously learning and improving my skills in web development 🕺",
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "SJM Institute of technology",
      subtitle: "BE in Electronics and Communication",
      alt_name: "SJMIT",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have a strong foundation in electronics and communication, with subjects like Logic Design (LD), Microprocessors (MP), and Microcontrollers (MC) etc...",
        "⚡ Additionally, I have completed courses in ReactJS, Advanced JavaScript, Web Development, and Web Design",
        "⚡ Achieved recognition for securing second place in my seventh semester ",
      ],
      website_link: "https://sjmit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Javascript ES6",
      subtitle: "- Jonas Schmedtmann",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-b13fa3b8-6777-4407-988f-3b8329893b60.pdf",
      alt_name: "javascript",
      color_code: "#00000099",
    },
    {
      title: "React JS Web Designing & Development",
      subtitle: "- Siyaram",
      logo_path: "infocampus.png",
      certificate_link: "/reactjs-certification.png",
      alt_name: "LearCodeOnline",
      color_code: "#d35400",
    },
    {
      title: "HTML, CSS & Bootstrap",
      subtitle: "- W3Schools",
      logo_path: "w3school.png",
      certificate_link: "",
      alt_name: "W3Schools",
      color_code: "#FFA17F",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description: `I look forward to connecting with you. If you have any questions, please don’t hesitate to reach out, and I will respond as soon as possible`,
  },
  blogSection: {
    title: "Hobbies",
    subtitle:
      "In my free time, I love building fun projects and creative applications using JavaScript, ReactJS, and Redux 🚀.  Away from the computer, I enjoy practicing badminton, playing carrom, listening to music, and going on short trips",
  },
  addressSection: {
    title: "Address",
    subtitle: "No: 32, Govindrajanagar, Vijayanagar, Bangalore - 560040",
  },
  phoneSection: {
    title: "Contact Number",
    subtitle: "+91 7019954690",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  contactPageData,
};
