import { Project1, Project2, Project3, Project4, Project5 } from '../assets'


export const navLinks = [
    {
        title: "HOME",
        link: "#home",
    },
    {
        title: "ABOUT",
        link: "#about",
    },
    {
        title: "PROJECTS",
        link: "#projects",
    },
    {
        title: "CONTACT",
        link: "#contact",
    },
];

export const services = [
    {
        title: "UI/UX Design",
        text: "Passionate about crafting exceptional user interfaces and seamless experiences that captivate users, blending aesthetics with usability for optimal engagement and satisfaction.",
    },
    {
        title: "Frontend Development",
        text: "Skilled in HTML, CSS, JavaScript and React for designing captivating and functional websites tailored to your specific needs, delivering engaging user experiences and visually appealing interfaces.",
    },
    {
        title: "Logo Design",
        text: "Creating unique and memorable logos that effectively represent your brand's identity and leave a lasting impression.",
    },
    {
        title: "SEO and Digital Marketing Design",
        text: "Optimizing web designs and graphics for search engines and incorporating marketing elements into the design.",
    },
];


export const projects = [
    {
        title: "Monterey",
        link: "#monterey",
        cover: Project1,
        status: "Incomplete",
        description: "My personal portfolio inspired by macOs Monterey UI.",
        gitstars: "5",
        icon: ["Html", "Css", "Js"],
    },

    {
        title: "World Remedies",
        link: "#worldremedies",
        cover: Project2,
        status: "Running",
        description: "Collaborated on a website for a bee sting apitherapy company based in Malindi, Kenya.",
        gitstars: "4",
        icon: ["Html", "Css", "Js"],
    },

    {
        title: "Naifits",
        link: "#naifits",
        cover: Project3,
        status: "Incomplete",
        description: "A concept e-commerce website for an online clothing line selling second hand apparel.",
        gitstars: "4",
        icon: ["React", "Tailwind"],
    },

    {
        title: "T.Art",
        link: "#t.artoo",
        cover: Project4,
        status: "Incomplete",
        description: "A concept website for a tattoo company. It has a rich user friendly interface.",
        gitstars: "3",
        icon: ["Html", "Css"],
    },

    {
        title: "Dennis-EDI Portfolio",
        link: "#resume",
        cover: Project5,
        status: "Running",
        description: "Made a portfolio for Dennis.O Otieno, an EDI and lecturer in the United Kingdom",
        gitstars: "3",
        icon: ["Html", "Css", "Tailwind"],
    },
]