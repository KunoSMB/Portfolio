import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube, SupportAgent, EmojiObjects } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "SOFIANE MEKKI",
    post: "A WEB DEVELOPER",
    design: "UI / UX DESIGNER thats a lie",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
]
export const about = [
  {
    desc: "From a young age, I’ve been captivated by the world of technology and software development. Growing up in Algeria, I spent countless hours exploring how things work behind the scenes in the digital world. Despite choosing a path in nursing, a field where I could directly help others, my fascination with coding and software never diminished. As a 24-year-old nurse, I’ve decided to take the leap and fully commit to blending my professional skills with my lifelong passion for technology. Now, I’m learning and evolving every day, working hard to make my dreams of becoming a software engineer a reality.",
    desc1: "By leveraging the critical thinking and problem-solving skills I’ve honed in the medical field, I’m able to approach software engineering with a unique perspective. My nursing background has taught me the importance of precision, empathy, and attention to detail, which I now bring into my coding projects. I’m determined to build a future where I can combine my creativity with the technical expertise I continue to develop, pushing myself to create meaningful, impactful solutions through software. This journey is challenging, but it’s one I embrace wholeheartedly.",
    cover: "./images/man.png",
  },
];

export const services = [
  {
    id: 1,
    icon: <EmojiObjects />,
    title: "Creative Design",
    desc: "I craft visually compelling designs that capture your brand's essence. Whether it's web design or branding, my creativity ensures every project stands out.",
  },
  {
    id: 2,
    icon: <Code /> ,
    title: "Clean Code",
    desc: "I write efficient, maintainable, and scalable code, ensuring your projects run smoothly across all platforms. Quality and clarity are my top priorities.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Every design I create is fully responsive, ensuring an optimal user experience on any device, from desktop to mobile. Your site will look great everywhere.",
  },
  {
    id: 4,
    icon: <Settings />,
    title: "Material UI	",
    desc: "I specialize in Material UI, delivering user-friendly interfaces that align with Google's design guidelines. Expect clean and intuitive layouts tailored to your needs.",
  },
  {
    id: 5,
    icon: <CropRotate />,
    title: "Material UI Icons",
    desc: "Enhance your application's UI with a wide range of Material UI icons. I seamlessly integrate icons to improve navigation and user experience.",
  },
  {
    id: 6,
    icon: <SupportAgent />,
    title: "Awesome Support",
    desc: "I provide reliable, ongoing support for your projects. Whether it's troubleshooting or updates, I'm here to ensure your digital presence remains strong.",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LINES OF CODE",
  },
  
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Project",
    category: "marketing",
    title: "Brex Logo",
    url:"/#"
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Project",
    category: "Game",
    title: "Brex Logo",
    url:"/#"
  },
  {
    id: 3,
    cover: "../images/port/Groceries.jpg",
    name: "An app to save your groceries on firebase",
    category: "development",
    title: "Cart List",
    url:"https://my-cart-list.netlify.app"
  },
  {
    id: 4,
    cover: "../images/port/Tenzies.jpg",
    name: "Project",
    category: "Game",
    title: "Tenzies",
    url:"https://smb-tenzies-game.netlify.app"
  },
  {
    id: 5,
    cover: "../images/port/Quizzical.jpg",
    name: "A Quizz Game",
    category: "Game",
    title: "Quizzical",
    url:"https://quizzical-hut.netlify.app"
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Project",
    category: "development",
    title: "Brex Logo",
    url:"/#"
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Belhia M.Sofiane",
    post: "Front End Developer",
    url:'https://www.linkedin.com/in/sofiane-belhia-1696b5285/',
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/Mohamed.jpg",
    name: "Hachemi M.Amine",
    post: "Back End Developer",
    url:'https://www.linkedin.com/in/mohamed-hachemi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "Place Holder",
    post: "Professional Yapper",
    url:'/#',
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "250 Villa, K N01",
    text2: "Saida, 08 Mai 1945 city",
  },
  {
    icon: <PhoneIphone />,
    text1: "+213 0541935019",
    text2: "+213 0553507619",
  },
  {
    icon: <EmailOutlined />,
    text1: "sofiane14008@gmail.com",
    text2: "sofiane15603@gmail.com",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]