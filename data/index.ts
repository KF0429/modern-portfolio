export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Eager to join a team where I can grow as a developer and contribute meaningfully.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Driven to build real-world projects and become a professional developer.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Shopee clone with Next.js",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/KF0429/DDAC-Assignment",
  },
  {
    id: 2,
    title: "Data Structure with C++",
    des: "Using the Data Structure concept like hash map, binary tree, bubble sort, and merge sort to filting data",
    img: "/dstr.png",
    iconLists: ["/c.svg"],
    link: "https://github.com/TheOnlineCat/DSTR-Assignment",
  },
  {
    id: 3,
    title: "Fullstack e-commerce FYP with Next.js",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/fyp.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stripe-2.svg"],
    link: "https://github.com/KF0429/FYP-Degree",
  },
  {
    id: 4,
    title: "backend API with ASP.NET",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/swagger.png",
    iconLists: ["/c--4.svg", "/dot-net-core-7.svg"],
    link: "https://github.com/KF0429/DDAC-API",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "IT Support Intern - 2022",
    desc: "Utilized remote access tools to troubleshoot and resolve software errors, ensuring minimal downtime for clients.",
    company: "flexi Team Computer Service Sdn.Bhd",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern - 2024",
    desc: "Developed and maintained web test scripts using Selenium with JavaScript and automated execution via Jenkins.",
    desc2:
      "Conducted API testing for web applications, ensuring robustness and efficiency.",
    Company: "Gney Software Sdn.Bhd",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
