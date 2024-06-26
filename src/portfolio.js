/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Algen Dela Cruz",
  title: "Hi all, I'm Algen",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with experience building Web and Software applications with JavaScript / Python / PHP / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1ewn8Rb6wocnZd6ISFaFkKN1VoIaztM9z?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrclaytorres",
  linkedin: "https://www.linkedin.com/in/algen-dela-cruz/",
  gmail: "anisya1@gmail.com",
  gitlab: "https://gitlab.com/algen",
  facebook: "",
  medium: "https://medium.com/@claytorres",
  stackoverflow: "https://stackoverflow.com/users/3319285/algen",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Develop APIs/API Endpoints for data integration and consumption"
    ),
    emoji(
      "⚡ Integration of third party services such as Google Cloud/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Design and develop serveless functions, Function as a Service (FaaS)"
    ),
    emoji(
      "⚡ Design and develop Automation processes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "google cloud api",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Xavier University - Ateneo de Cagayan",
      logo: require("./assets/images/xavier-ateneo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2003 - October 2008",
      desc: "Member of Xavier Computer Enthusiast League (XCEL)",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressYears: "6" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressYears: "6"
    },
    {
      Stack: "SEO",
      progressYears: "8"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Engineer",
      company: "UpDigital",
      companylogo: require("./assets/images/upd3.png"),
      date: "June 2020 – Present",
      desc: "Lead a team of Developers that handles the development operations of the company ranging from Website deployment, integration and maintenance.",
      descBullets: [
        "Tech Stack: JavaScript, NodeJS, Python, PHP, Vite, TailwindCSS, HTML5, CSS3, Twig, CraftCMS, Wordpress"
      ]
    },
    {
      role: "Web Developer",
      company: "Innovuze Solutions, Inc.",
      companylogo: require("./assets/images/innovuze2.png"),
      date: "Oct 2017 – Oct 2020",
      desc: "Part of a team of Developers that handle client projects.",
      descBullets: [
        "Tech Stack: JavaScript, VueJs, jQuery, Python, Django, Webpack, HTML5, CSS3, Domo BI Tools"
      ]
    },
    {
      role: "Lead SEO Specialist",
      company: "Innovuze Solutions, Inc.",
      companylogo: require("./assets/images/innovuze2.png"),
      date: "Oct 2013 – Oct 2017",
      desc: "Lead a team of SEO Specialists that handles the daily operations of Search Engine Optimization (On-page/Off-page) of various company clients.",
      descBullets: [
        "Tools: SEMRush, Ahref, Screaming Frog, Scrapebox, Market Samurai"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Portfolio",
  subtitle: "MOST RECENT WEBSITES/APPS THAT I HELPED CREATE",
  projects: [
    {
      image: require("./assets/images/financestrategists-screenshot.jpg"),
      projectName: "FinanceStrategist.com",
      projectDesc: "A website for financial literacy content.",
      useTechStack: "PHP, JavaScript, Twig, Vite, NodeJS, CraftCMS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.financestrategists.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/finlitcoalition-screenshot.jpg"),
      projectName: "FinlitCoalition.org",
      projectDesc: "A website for the Financial Literacy Coalition organization.",
      useTechStack: "PHP, JavaScript, Twig, Vite, NodeJS, CraftCMS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://finlitcoalition.org/"
        }
      ]
    },
    {
      image: require("./assets/images/singerspoint-screenshot.jpg"),
      projectName: "SingersPoint.com",
      projectDesc: "A website for a Professional Vocal coach with a 1.2 million Youtube subscriber.",
      useTechStack: "PHP, JavaScript, Twig, Vite, NodeJS, CraftCMS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://singerspoint.com/"
        }
      ]
    },
    {
      image: require("./assets/images/11financial-screenshot.jpg"),
      projectName: "11 Financial - WorkWith11.com",
      projectDesc: "A website for a Financial Advisor firm.",
      useTechStack: "PHP, JavaScript, Twig, Vite, NodeJS, CraftCMS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://workwith11.com/"
        }
      ]
    },
    {
      image: require("./assets/images/choose11-screenshot.jpg"),
      projectName: "11 Financial - Choose11.com",
      projectDesc: "A Wordpress website for a Financial Advisor firm.",
      useTechStack: "PHP, JavaScript, Elementor, Wordpress",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://choose11.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Understanding TypeScript - 2022 Edition",
      subtitle:
        "Completed Certifcation from TUnderstanding TypeScript - 2022 Edition",
      image: require("./assets/images/undestanding-typescript.jpg"),
      imageAlt: "Understanding TypeScript",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-11e40faf-5abb-41e8-a305-c17f99775b19/"
        }
      ]
    },
    {
      title: "The Complete Web Developer Course",
      subtitle: "Completed Certifcation from The Complete Web Developer Course Udemy course",
      image: require("./assets/images/The-Complete-Web-Developer-Course.jpg"),
      imageAlt: "The Complete Web Developer Course",
      footerLink: [
        {
          name: "Certification", 
          url: "https://www.udemy.com/certificate/UC-FURZB1H8/"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "anisya1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
