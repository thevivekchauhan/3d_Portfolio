import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  jobit1,
  jobit2,
  jobit3,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "javascript",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Video editor",
    icon: backend,
  },
  {
    title: "Cartoon Image maker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    // name: "Vivek Chauhan",
      // designation: "CFO",
      // company: "Acme Co",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Every family has a person who break the Chain of poverty maybe you are the person believe in yourself .",
    // name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    // designation: "CTO",  
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My Portfolio",
    description:
      "I created a portfolio to showcase my skills, experience, and projects to potential employers or clients.  Additionally, having a portfolio provides a centralized location for interested parties to review my accomplishments and assess whether I am a good fit for their needs.",
    tags: [
      {
        name: "react JS",
        color: "blue-text-gradient",
      },
      {
        name: "VivekChauhan",
        color: "green-text-gradient",
      },
      {
        name: "Portfolio",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    demoLink: "https://imvivekchauhan.netlify.app/"

  },
  {
    name: "My blog Website",
    description:
      "A blog website is an online platform where individuals or content creators share video blogs, typically featuring personal experiences, opinions, or activities. Actually, it's my dream to make blog website. I also have a Youtube channel.",
    tags: [
      {
        name: "MyBlog",
        color: "blue-text-gradient"
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "VivekChauhan",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    demoLink: "https://vivekchauhanvlog.netlify.app/"
  },
  {
    name: "Podcast",
    description:
      "I create podcasts for various reasons : first is that share valuable insights, second is that building a community or connecting with individuals, third is that it is increase my confidence, forth is that Sharing knowledge and expertise on specific topics..",
    tags: [
      {
        name: "Podcast",
        color: "blue-text-gradient",
      },
      {
        name: "Dothesuccesswithvivekchauhan",
        color: "green-text-gradient",
      },
      {
        name: "applepodacst",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    demoLink: "https://podcasts.apple.com/us/podcast/vivek-chauhan/id1526873795"
  },
  {
    name: "Find government job",
    description:
      "The purpose of this website is to serve as a centralized platform for individuals seeking employment opportunities within government agencies at various levels, including local, state, and federal.",
    tags: [
      {
        name: "GovHub",
        color: "blue-text-gradient"
      },
      {
        name: "GovernmentJob",
        color: "green-text-gradient",
      },
      {
        name: "Jobs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit3,
    source_code_link: "https://github.com/",
    demoLink: "https://thevivekchauhan.github.io/GovHub/"
  },
  {
    name: "Jewellery Website",
    description:
      "It is collection of jewellery, crafted to perfection for every occasion. Indulge in luxury with our stunning jewelry collection, where every piece tells a story of elegance and sophistication. Fashion, jewelry trends evolve over time.",
    tags: [
      {
        name: "Jewellery",
        color: "blue-text-gradient"
      },
      {
        name: "luxury",
        color: "green-text-gradient",
      },
      {
        name: "ForMySIS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit2,
    source_code_link: "https://github.com/",
    demoLink: "https://vivekchauhanvlog.netlify.app/"
  },
  {
    name: "Papad Queen",
    description:
      "A specialty website offering authentic kitchen delicacies like Papad, Chips, Pickles, and Fritters—crafted for rich flavor and traditional taste.🍽️",
    tags: [
      {
        name: "Papad Queen",
        color: "blue-text-gradient"
      },
      {
        name: "Papad",
        color: "green-text-gradient",
      },
      {
        name: "Chips",
        color: "pink-text-gradient",
      },
    ],
    image: jobit1,
    source_code_link: "https://github.com/",
    demoLink: "https://papadqueen.netlify.app/"
  }
];

export { services, technologies, experiences, testimonials, projects };
