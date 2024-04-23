import styles from "./page.module.css";
import Projects from './Module/Projects';
import Experiences from "./Module/Experiences";
import LozanoPower from '../assets/lozanopowerelectric - Copy.jpg'
import EventFinder from '../assets/eventfinder - Copy.jpg';
import PersonalWebsite from '../assets/myportfolio - Copy.jpg';
import OnTheGrind from '../assets/onthegrind - Copy.jpg';
import Navigation from "./Module/Navigation";
//const Project = lazy(() => import('./Module/Project/index'))

//Hex Codes: #222831, #31363F, #76ABAE, #EEEEEE

const MockExperienceData = {
  "experiences": [
    {
      title: "The Walt Disney Company",
      description: "I worked at the walt disney company as a digital production intern it was a cool experience working in a team of roughly 10 people and being very involved in production"
    },
    {
      title: "The Walt Disney Company",
      description: "I worked at the walt disney company as a digital production intern it was a cool experience working in a team of roughly 10 people and being very involved in production"
    },
    {
      title: "The Walt Disney Company",
      description: "I worked at the walt disney company as a digital production intern it was a cool experience working in a team of roughly 10 people and being very involved in production"
    },
  ]
}

/*
		<img src="https://i.ibb.co/b21hbM8/lozanopowerelectric.jpg" alt="lozanopowerelectric" border="0">
<img src="https://i.ibb.co/khFwTt9/onthegrind.jpg" alt="onthegrind" border="0">
<img src="https://i.ibb.co/5j7NLgh/personalwebsite.jpg" alt="personalwebsite" border="0">
<img src="https://i.ibb.co/KshtVDY/crisisconnect.jpg" alt="crisisconnect" border="0">
<img src="https://i.ibb.co/0mBCW6j/eventfinder.jpg" alt="eventfinder" border="0">
	*/

const MockProjectData = {
  "projects": [
    {
      name: "Lozano Power Electric",
      image: {
        src:  "https://i.ibb.co/b21hbM8/lozanopowerelectric.jpg",
        alt: "Lozano Power Electric"
      },
      demoData: {
        text: "Live Demo",
        link: "https://www.lozanopowerelectric.com/",
      },
      description: "Modern and unique responsive company website created to showcase the work, commitment, and services of Lozano Power Electric. Process included Figma drafting, quality assurance and verification between myself and the founder of the company, and customer centric design.",
      technologies: ["BiLogoHtml5", "BiLogoCss3", "BiLogoReact", "BiLogoJavascript", "BiLogoHtml5", "BiLogoCss3", "BiLogoReact", "BiLogoJavascript"]
    },
    {
      name: "EDM Event Finder",
      image: {
        src: "https://i.ibb.co/0mBCW6j/eventfinder.jpg",
        alt: "EDM Event Finder"
      },
      demoData: {
        text: "Live Demo",
        link: "https://www.lozanopowerelectric.com/",
      },
      description: "A fully responsive, event scraper application that allows users view the next EDM events in California. Furthermore, users can create an account and save the upcoming events that they wish to attend, providing a more personalized experience when finding and tracking your anticipated events.",
      technologies: ["BiLogoHtml5", "BiLogoCss3", "BiLogoReact", "BiLogoJavascript"]
    },
    {
      name: "Personal Website",
      image: {
        src: "https://i.ibb.co/5j7NLgh/personalwebsite.jpg",
        alt: "Personal Website"
      },
      demoData: {
        text: "Live Demo",
        link: "https://www.lozanopowerelectric.com/",
      },
      description: "A solo-developed, fully responsive personal portfolio to showcase my identity, accomplishments, and selected projects. Process included sketches, rough drafting, quality assurance and user central design review via having colleagues, recruiters and advisors navigate the website.",
      technologies: ["BiLogoHtml5", "BiLogoCss3", "BiLogoReact", "BiLogoJavascript"]
    },
    {
      name: "On The Grind",
      image: {
        src: "https://i.ibb.co/khFwTt9/onthegrind.jpg",
        alt: "On The Grind"
      },
      demoData: {
        text: "Live Demo",
        link: "https://www.lozanopowerelectric.com/",
      },
      description: "An e-commerce website that allows users to view the products that the company known as 'On The Grind' have to offer! Users can navigate the page, sign in or create an account, add items to their cart, place an order, and so much more.",
      technologies: ["BiLogoHtml5", "BiLogoCss3", "BiLogoReact", "BiLogoJavascript"]
    },
  ]
}

const buttonData = {
  text: "Click Me",
  link: "https://www.color-meanings.com/dark-color-palettes/"
}

export default async function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <section className="">
        <Projects {...MockProjectData} />
      </section>
    </main>
  );
}
