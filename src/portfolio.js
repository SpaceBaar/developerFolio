/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: 'SpaceBaar',
  title: "Hi all I'm Ashitosh",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angular / Nodejs / Laravel and some other cool libraries and frameworks'
  ),
  resumeLink:
    'https://cv.spacebaar.com',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/SpaceBaar',
  linkedin: 'https://www.linkedin.com/in/yadavashitosh24/',
  gmail: 'ashitosh.yadav@spacebaar.com',
  gitlab: 'https://gitlab.com/spacebaar',
  facebook: 'https://www.facebook.com/yadavashitosh24',
  instagram: "https://www.instagram.com/yadavashitosh24",
  twitter: "https://www.twitter.com/ashitoshyadav",
  // medium: 'https://medium.com/@saadpasta',
  stackoverflow: 'https://stackoverflow.com/users/7769583/spacebaar',
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: 'angular',
      fontAwesomeClassname: 'fab fa-angular',
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'IGNOU',
      logo: require('./assets/images/ignouLogo.png'),
      subHeader: 'Master of Science in Computer Science',
      duration: 'August 2017 - Present',
      desc: '',
      descBullets: [ ],
    },
    {
      schoolName: 'S.K College Of Science and Commerce (Mumbai University)',
      logo: require('./assets/images/skLogo.png'),
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'August 2013 - March 2016',
      desc: '',
      descBullets: [ ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '60%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '90%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '80%',
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Product Engineer - Web Technology',
      company: 'Moofwd Inc.',
      companylogo: require('./assets/images/logo.png'),
      date: 'March 2018 – Present',
      desc:
        'Worked on the company\'s primary product (portals for education domain). Created a CMS portal for mobile applications. Currently working on an e-commerce stimulation for a big client',
      descBullets: [ ],
    },
    {
      role: 'Software Developer',
      company: 'Software Developer',
      companylogo: require('./assets/images/logo2.png'),
      date: 'March 2017 – March 2018',
      desc:
        'Developed Payroll, Inventory, Last Mile Delivery solutions to fulfill company\'s inhouse requirements. Introduced new coding mechanisms and patterns and helped in maintaining proper coding standards.',
      // descBullets: [
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'SpaceBaar', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action SpaceBaar Javascript Trivia that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            'https://assistant.google.com/services/a/uid/0000005d3fd80d51?hl=eng',
        },
      ],
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        'https://blog.spacebaar.com/2013/11/star-paradise-brighter-would-be-light.html',
      title: 'STAR PARADISE',
      description:
        'Brighter would be the Light, For the fire Burns in End, Has shown all its Might, Even the roughest bonds mend',
    },
    {
      url: 'https://wordifact.com/',
      title: 'WORDIFACT',
      description:
        'Wordifact is a platform dedicated to providing the highest quality, unbiased content, resources, and news centered on the Technology, Health and Fitness Tips, Motivational Stories and related discipline. We will help you understand the technologies shaping our lives and we will keep you up-to-date on the latest news and trends.',
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  // number: "+91-8108731556",
  emailAddress: 'ashitosh.yadav@spacebaar.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'ashitoshyadav', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
