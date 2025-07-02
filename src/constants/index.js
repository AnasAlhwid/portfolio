const logo = {
    url: "/images/logo.png",
    alt: "logo",
};

const navLinks = [
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Education",
        link: "#education",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const homeImg = {
    url: "/images/home/bg-ddt.png",
    alt: "Damascus Deco tech style",
};

const homeText = {
        name: "Flan Alaan",
        title: "Full-Stack Engineer",
};

const homeSlider = [
    { text: "Logic Bender", imgPath: "/images/home/logic-bender.png" },
    { text: "Code Alchemist", imgPath: "/images/home/code-alchemist.png" },
    { text: "Bug Slayer", imgPath: "/images/home/bug-slayer.png" },
    { text: "Pixel Smith", imgPath: "/images/home/pixel-smith.png" },
    { text: "AI Tamer", imgPath: "/images/home/ai-tamer.png" },
];

const personalImg = '/images/home/personal_pic.png';

const projects = [
    {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et enim vitae lorem porttitor pellentesque. Aenean iaculis blandit convallis. Vestibulum tellus ex, rutrum in purus vitae, laoreet venenatis justo.",
        imgPath: [
            { size: "0.22", imgVersion: "/images/projects/project1-v1.png" },
            { size: "0.32", imgVersion: "/images/projects/project1-v2.png" },
        ],
        alt: "Lorem ipsum",
        tags: [
            "tag 1", "tag 2", "tag 3"
        ],
        repos: "https://www.lipsum.com/feed/html"
    },
    {
        title: "Quisque dapibus",
        description: "Quisque dapibus tempus commodo. In vel ullamcorper lacus. In hac habitasse platea dictumst. Vivamus pellentesque, mi pretium ultricies rhoncus, orci leo blandit enim, eget dapibus leo ante dignissim dolor. Mauris massa mi, varius id justo in, gravida pulvinar tortor.",
        imgPath: [
            { size: "0.22", imgVersion: "/images/projects/project2-v1.png" },
            { size: "0.32", imgVersion: "/images/projects/project2-v2.png" },
        ],
        alt: "Quisque dapibus",
        tags: [
            "tag 1", "tag 2", "tag 3"
        ],
        repos: "https://www.lipsum.com/feed/html"
    },
    {
        title: "Vestibulum egestas",
        description: "Vestibulum egestas luctus leo, vel ullamcorper tellus semper eget. Morbi suscipit rhoncus arcu a dictum. Vestibulum porttitor eget justo vel fringilla.",
        imgPath: [
            { size: "0.22", imgVersion: "/images/projects/project3-v1.png" },
            { size: "0.32", imgVersion: "/images/projects/project3-v2.png" },
        ],
        alt: "Vestibulum egestas",
        tags: [
            "tag 1", "tag 2", "tag 3"
        ],
        repos: "https://www.lipsum.com/feed/html"
    },
];

const education = [
    {
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et enim vitae lorem porttitor pellentesque. Aenean iaculis blandit convallis. Vestibulum tellus ex, rutrum in purus vitae, laoreet venenatis justo.",
        imgPath: "/images/education/edu1.png",
        imgMinWidth: "12",
        imgMaxWidth: "20",
        logoPath: "/images/education/logo1.png",
        title: "Lorem ipsum",
        date: "September 2020 - January 2024",
        learnings: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Vivamus et enim vitae lorem porttitor pellentesque.",
            "Aenean iaculis blandit convallis.",
            "Vestibulum tellus ex, rutrum in purus vitae, laoreet venenatis justo.",
        ],
    },
    {
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et enim vitae lorem porttitor pellentesque. Aenean iaculis blandit convallis. Vestibulum tellus ex, rutrum in purus vitae, laoreet venenatis justo.",
        imgPath: "/images/education/edu2.png",
        imgMinWidth: "12",
        imgMaxWidth: "20",
        logoPath: "/images/education/logo2.png",
        title: "Dolor sit",
        date: "March 2021 - November 2021",
        learnings: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Vivamus et enim vitae lorem porttitor pellentesque.",
            "Aenean iaculis blandit convallis.",
            "Vestibulum tellus ex, rutrum in purus vitae, laoreet venenatis justo.",
        ],
    },
    {
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et enim vitae lorem porttitor pellentesque. Aenean iaculis blandit convallis. Vestibulum tellus ex, rutrum in purus vitae, laoreet venenatis justo.",
        imgPath: "/images/education/edu3.png",
        imgMinWidth: "12",
        imgMaxWidth: "20",
        logoPath: "/images/education/logo3.png",
        title: "Amet",
        date: "June 2025 - July 2025",
        learnings: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Vivamus et enim vitae lorem porttitor pellentesque.",
            "Aenean iaculis blandit convallis.",
            "Vestibulum tellus ex, rutrum in purus vitae, laoreet venenatis justo.",
        ],
    },
    {
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et enim vitae lorem porttitor pellentesque. Aenean iaculis blandit convallis. Vestibulum tellus ex, rutrum in purus vitae, laoreet venenatis justo.",
        imgPath: "/images/education/edu4.png",
        imgMinWidth: "12",
        imgMaxWidth: "20",
        logoPath: "/images/education/logo4.png",
        title: "Consectetur adipiscing",
        date: "May 2023 - April 2024",
        learnings: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Vivamus et enim vitae lorem porttitor pellentesque.",
            "Aenean iaculis blandit convallis.",
            "Vestibulum tellus ex, rutrum in purus vitae, laoreet venenatis justo.",
        ],
    },
];

const techStack = [
    {
        name: "Frontend Development",
        imgPath: "/images/techStack/frontend-development.png",
        tags: [
            "JavaScript", "HTML", "CSS", "Vite", "React", "Tailwind CSS", "GSAP", "Three.js"
        ],
    },
    {
        name: "Backend Development",
        imgPath: "/images/techStack/backend-development.png",
        tags: [
            "Node.JS", "Express.JS", "Python", "Java", "MySQL", "PostgreSQL", "MongoDB"
        ],
    },
    {
        name: "Tools & Technologies",
        imgPath: "/images/techStack/tools-technologies.png",
        tags: [
            "Git", "GitHub", "Postman", "Wireshark", "Adobe Photoshop", "PowerShell", "PowerShell Gallery",
        ],
    },
    {
        name: "Workspaces",
        imgPath: "/images/techStack/workspaces.png",
        tags: [
            "Notion", "Trello", "Anytype", "Microsoft 365", "Google Suite", "Lucidchart", "Overleaf (LaTeX)"
        ],
    },
    {
        name: "AI",
        imgPath: "/images/techStack/ai.png",
        tags: [
            "ChatGPT", "DeepSeek", "Leonardo AI"
        ],
    },
];

const softSkills = [
    {
        imgPath: "/images/softSkills/engineering-excellence.png",
        title: "Engineering Excellence",
        desc: "Taking full responsibility for delivering high-quality solutions with precision, speed, and strategic focus.",
    },
    {
        imgPath: "/images/softSkills/team-synergy.png",
        title: "Team Synergy",
        desc: "Communicating clearly, collaborating across teams, and embracing feedback to drive collective success.",
    },
    {
        imgPath: "/images/softSkills/adaptive-thinking.png",
        title: "Adaptive Thinking",
        desc: "Solving problems with empathy, adapting swiftly to change, and keeping the user at the core of every decision.",
    },
];

const social = [
    {
        name: "x",
        url: "https://x.com/",
        imgPath: "/images/footer/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/footer/linkedin.png",
    },
    {
        name: "github",
        url: "https://github.com/",
        imgPath: "/images/footer/github.png",
    },
    {
        name: "powershell_gallery",
        url: "https://www.powershellgallery.com/",
        imgPath: "/images/footer/powershell.png",
    },
];

const credit = "Flan Alaan";

export {
    logo,
    navLinks,
    homeImg,
    homeText,
    homeSlider,
    personalImg,
    projects,
    education,
    techStack,
    softSkills,
    social,
    credit,
};
