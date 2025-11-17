/* Kush Gandhi — Portfolio Configuration File */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";


// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration Section
const illustration = {
  animated: true
};

// Greeting Section
const greeting = {
  username: "Kush Gandhi",
  title: "Hello 👋, I'm Kush Gandhi",
  subTitle: emoji(
    "A passionate Software Engineer with expertise in Full-Stack Development, Flutter, and Cloud Computing. I love designing scalable systems and solving real-world problems through clean architecture and innovation."
  ),
  resumeLink: "https://drive.google.com/file/d/1fUaOSlfHBmC2WV9HzI_D6e4jPf8kJ0kC/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Kushgandhi18",
  linkedin: "https://linkedin.com/in/kush-gandhi18",
  gmail: "kushgandhi018@gmail.com",
  instagram: "",
  twitter: "",
  display: true
};


// Skills Section
// Skills Section
const skillsSection = {
  title: "Technical Skills",
  subTitle: "Comprehensive technical expertise across full-stack development",
  display: true, // Set to true to display this section

  // An array of all your skill categories
  skillCategories: [
    {
      title: "Programming Languages",
      // You can use emoji or a react-icon component name (e.g., "FaCode")
      // For this example, I'll use emoji for simplicity
      icon: "💻", 
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "C++",
        "SQL",
        "Dart"
      ]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: [
        "ReactJS",
        "Node.js",
        "Spring Boot",
        "HTML5",
        "CSS3 / SCSS",
        "REST APIs"
      ]
    },
    {
      title: "Databases",
      icon: "📊",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        "AWS",
        "GCP",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Terraform"
      ]
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        "Flutter",
        "React Native",
        "Android (Java)"
      ]
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "MLOps",
        "Pandas",
        "NumPy"
      ]
    }
  ]
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Binghamton University, SUNY",
      logo: require("./assets/images/binghamton_university.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Expected Dec 2026",
      descBullets: [
        "Coursework: Design & Analysis of Algorithms, Programming Languages, Database Systems, Cloud Computing, Design Patterns, Machine Learning."
      ]
    },
    {
      schoolName: "Gujarat Technological University",
      logo: require("./assets/images/gtu.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "Graduated May 2024",
      descBullets: [
        "Graduated with strong foundations in data structures, algorithms, and software engineering."
      ]
    }
  ]
};

// Tech Stack / Proficiency Bars
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend / Mobile Development", progressPercentage: "90%" },
    { Stack: "Backend & APIs", progressPercentage: "85%" },
    { Stack: "Machine Learning", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// Work Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer Intern",
      company: "Friendly IT Solution",
      companylogo: require("./assets/images/friendly_it_solution.png"),
      date: "Oct 2023 - May 2024",
      desc: "Optimized UI rendering and lazy loading, reducing initial load times by 64%. Integrated an AI/ML recommendation engine, boosting click-through by 49%. Also decreased average API response time by 250ms."
    },
    {
      role: "Java Developer Intern",
      company: "Friendly IT Solution",
      companylogo: require("./assets/images/friendly_it_solution.png"),
      date: "Jul 2023 - Aug 2023",
      desc: "Developed REST APIs with Java & Spring Boot, achieving a 46% reduction in API latency. Revamped SQL queries, enhancing query performance by 36%."
    }
  ]
};

// Open Source Section (GitHub)
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "Some of my selected projects showcasing technical expertise.",
  projects: [
    {
      image: require("./assets/images/Algorithmic_Trading.png"),
      projectName: "PulseText AI",
      projectDesc: "Built a cross-platform speech recognition app using Flutter and ONNX models with 92%+ accuracy, enabling real-time and offline transcription.",
      footerLink: [{ name: "View Project", url: "https://github.com/Kushgandhi18/PulseText-AI" }]
    },
    {
      image: require("./assets/images/shoebuddy.png"),
      projectName: "ShoeBuddy - Ecommerce",
      projectDesc: "Engineered a Flutter e-commerce app with secure authentication and an ML recommendation model that achieved a 72% increase in click-through rate.",
      footerLink: [{ name: "View Project", url: "https://github.com/Kushgandhi18/ShoeBuddy" }]
    },
    {
      image: require("./assets/images/Algorithmic_Trading.png"),
      projectName: "Chatbot (Hackathon Project)",
      projectDesc: "Developed a RESTful API backend using Flask and NodeJS, facilitating real-time data exchange and improving chatbot response times by 45%.",
      footerLink: [{ name: "View Project", url: "https://github.com/Kushgandhi18/Chatbot" }]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Here are some of my certifications and achievements showcasing continuous learning and technical growth.",
  achievementsCards: [
    {
      title: "Python Essentials for MLOps",
      subtitle: "Completed an in-depth course focusing on ML pipelines and model deployment.",
      image: require("./assets/images/Python_Essentials_For_MLOps_Coursera.png"),
      imageAlt: "Python Certificate",
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/verify/6O5Q3KRQ4082" }
      ]
    },
    {
      title: "Mathematics & Statistics of Machine Learning & Data Science",
      subtitle: "Covered mathematical foundations of ML.",
      image: require("./assets/images/Mathematics_and_Statistics_of_ML_and_DataScience.png"),
      imageAlt: "ML Certificate",
      footerLink: [
        { name: "Certificate", url: "https://www.udemy.com/certificate/UC-48175787-f0c0-4b8e-816f-5bafef48d8c7/" }
      ]
    },
    {
      title: "Algorithmic Trading with Python",
      subtitle: "Learned ML-based trading strategies using Python.",
      image: require("./assets/images/Algorithmic_Trading.png"),
      imageAlt: "Trading Certificate",
      footerLink: [
        { name: "Certificate", url: "https://www.udemy.com/certificate/UC-5bcbe192-f5f1-4bc9-913a-8d1f3ca209e7/" }
      ]
    },
    {
      title: "DevOps, DataOps, MLOps",
      subtitle: "Gained practical knowledge of DevOps and MLOps practices.",
      image: require("./assets/images/DevOps, DataOps, MLOps.png"),
      imageAlt: "DevOps Certificate",
      footerLink: [
        { name: "Certificate", url: "https://coursera.org/share/af94f656e8fc1693fc465c38304aa871" }
      ]
    },
    {
      title: "ML Ops Platform: Amazon SageMaker and Azure ML",
      subtitle: "Learned to deploy and manage ML models using cloud platforms.",
      image: require("./assets/images/MLOps_Platform_Amazon_SageMaker_and_Azure copy.png"),
      imageAlt: "ML Ops Certificate",
      footerLink: [
        { name: "Certificate", url: "https://coursera.org/share/d79bbd64c9cc0724ce76772c2d87b976" }
      ]
    },
    {
      title: "MLOps Tools: MLflow and Hugging Face",
      subtitle: "Gained practical knowledge of MLflow and Hugging Face for model management and deployment.",
      image: require("./assets/images/MLOps_Machine_Learning_Operation.png"),
      imageAlt: "ML Ops Certificate",
      footerLink: [
        { name: "Certificate", url: "https://coursera.org/share/98028f26567b95c962ad8d40c12f3fb2" }
      ]
    },
   
  ],
  display: true
};

// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "I love writing about technology, software design, and developer growth.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talk Section
const talkSection = {
  title: "Talks",
  subtitle: "Occasional speaker and tech enthusiast.",
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Sharing insights on tech, startups, and life.",
  podcast: [],
  display: false
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in hiring me? Let’s connect!",
  number: "(607) 821-5695",
  email_address: "kushgandhi018@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume below.",
  display: true
};

// Hireability
const isHireable = true;

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
  isHireable,
  resumeSection
};
