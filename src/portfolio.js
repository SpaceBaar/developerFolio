
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import { assertType } from "graphql";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "SpaceBaar",
    title: "Hi all I'm Ashitosh",
    subTitle:
        emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angular / Nodejs / Laravel and some other cool libraries and frameworks"),
    resumeLink: "https://cv.spacebaar.com"
};

// Your Social Media Link

const socialMediaLinks = {

    github: "https://github.com/SpaceBaar",
    linkedin: "https://www.linkedin.com/in/yadavashitosh24/",
    gmail: "ashitosh.yadav@spacebaar.com",
    gitlab: "https://gitlab.com/spacebaar",
    facebook: "https://www.facebook.com/yadavashitosh24",
    instagram: "https://www.instagram.com/yadavashitosh24",
    twitter: "https://www.twitter.com/ashitoshyadav"
    // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "What i do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
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
            skillName: "angular",
            fontAwesomeClassname: "fab fa-angular"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
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
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend/Design",  //Insert stack or technology you have experience in
            progressPercentage: "60%"  //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "90%"
        },
        {
            Stack: "Programming",
            progressPercentage: "80%"
        }
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Product Engineer",
            company: "Moofwd Inc.",
            companylogo: require("./assets/images/logo.png"),
            date: "March 2018 – Present",
            desc: "Worked on the company's primary product (portals for education domain). Created a CMS portal for mobile applications. Currently working on an e-commerce stimulation for a big client",
        },
        {
            role: "Software Developer",
            company: "Sheela Infotech Solutions",
            companylogo: require("./assets/images/logo2.png"),
            date: "March 2017 – March 2018",
            desc: "Developed Payroll, Inventory, Last Mile Delivery solutions to fulfill company's inhouse requirements. Introduced new coding mechanisms and patterns and helped in maintaining proper coding standards.",
            // descBullets: [
            //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            // ]
        },
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: "MjA3YTljNGRhYWM3ZmE1MDNiNjc1MjZkYjVhNWNlYjcxNzVkZjM3Yw==",
    githubUserName: "spacebaar", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
    projects: [
        {
            // image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
            // link: "https://nsslogistics.in"
        },
    ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

    achivementsCards: [
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action SpaceBaar Javascript Trivia that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            footerLink: [
                { name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/0000005d3fd80d51?hl=en" }
            ]
        },
    ]
};

// Blogs Section

const blogSection = {

    title: "Blogs",
    subtitle: "With Love for Developing cool stuff. i love to write and teach others what i have learned",

    blogs: [
        {
            url: "https://blog.spacebaar.com/2013/11/star-paradise-brighter-would-be-light.html",
            image: "space.jpg",
            title: "STAR PARADISE",
            description: "Brighter would be the Light, For the fire Burns in End, Has shown all its Might, Even the roughest bonds mend"
        },
        {
            url: "https://wordifact.com/",
            image: "https://i2.wp.com/wordifact.com/wp-content/uploads/2019/10/Share-your-thoughts-1.jpg?w=960&ssl=1",
            title: "WORDIFACT",
            description: "Wordifact is a platform dedicated to providing the highest quality, unbiased content, resources, and news centered on the Technology, Health and Fitness Tips, Motivational Stories and related discipline. We will help you understand the technologies shaping our lives and we will keep you up-to-date on the latest news and trends."
        },
    ]
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/",
            image:
                "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
        }
    ]
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi my inbox is open for all",
    number: "+91-8108731556",
    email_address: "ashitosh.yadav@spacebaar.com"
};

//Twitter Section

const twitterDetails = {

    userName: "ashitoshyadav"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
