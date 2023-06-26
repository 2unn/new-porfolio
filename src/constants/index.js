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
  beau,
  mmd,
  xo_booking,
  hoobank,
  carhub,
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
    title: "Sales",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Sales",
    company_name: "MMD Holdings",
    icon: mmd,
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
    title: "Frontend Developer",
    company_name: "Beau Agency",
    icon: beau,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Working with shopify to create theme for user on that platform",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "There are no mistakes in life, only lessons.",
    name: "Robin Sharma",
    designation: "Author",
    company: "Acme Co",
  },
  {
    testimonial:
      "It gets easier. Every day it gets a little easier. But you gotta do it every day —that’s the hard part. But it does get easier",
    name: "BoJack Horseman",
    designation: "Fictional Character",
  },
  {
    testimonial: "If you quit ONCE it becomes a habit.Never quit!!!",
    name: "Michael Jordan",
    designation: "Basketball player",
  },
];

const projects = [
  {
    name: "Xotiny Booking",
    description:
      "Web-page help customer booking service from our company to make website or use side application on shopify",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: xo_booking,
    link: "https://xotiny.com",
    source_code_link:
      "https://gitlab.com/beau-headless/xopify/website/-/tree/main/src/components/apps/booking",
  },
  {
    name: "HooBank Landing Page",
    description:
      "Static website to identify the HooBank. Using Reactjs and Tailwindcss to create, it also have responsive for mobile.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    link: "https://hoo-bank-rouge.vercel.app/",
    source_code_link: "https://github.com/2unn/HooBank",
  },
  {
    name: "CarHub",
    description:
      "A react-ts website call API to show the details of cars. The website have many function such as filter, searching, rendering the details.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "headlessUI",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    link: "https://cars-api-lake.vercel.app",
    source_code_link: "https://github.com/2unn/CarsAPI",
  },
];

export { services, technologies, experiences, testimonials, projects };
