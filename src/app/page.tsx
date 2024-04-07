import styles from "./page.module.css";
import Projects from './Module/Projects'
import LozanoPower from '../assets/lozanopowerelectric - Copy.jpg'
import EventFinder from '../assets/eventfinder - Copy.jpg';
import PersonalWebsite from '../assets/myportfolio - Copy.jpg';
import OnTheGrind from '../assets/onthegrind - Copy.jpg';
//const Project = lazy(() => import('./Module/Project/index'))

const MockProjectData = {
  "projects": [
    {
      name: "Lozano Power Electric",
      image: {
        src: LozanoPower,
        alt: "Lozano Power Electric"
      },
      link: "https://www.lozanopowerelectric.com/",
      description: "Modern and unique responsive company website created to showcase the work, commitment, and services of Lozano Power Electric. Process included Figma drafting, quality assurance and verification between myself and the founder of the company, and customer centric design.",
      technologies: ["BiLogoHtml5", "BiLogoCss3", "BiLogoReact", "BiLogoJavascript"]
    },
    {
      name: "Event Finder",
      image: {
        src: EventFinder,
        alt: "EDM Event Finder"
      },
      link: "https://www.lozanopowerelectric.com/",
      description: "A fully responsive, event scraper application that allows users view the next EDM events in California. Furthermore, users can create an account and save the upcoming events that they wish to attend, providing a more personalized experience when finding and tracking your anticipated events.",
      technologies: ["BiLogoHtml5", "BiLogoCss3", "BiLogoReact", "BiLogoJavascript"]
    },
    {
      name: "Personal Website",
      image: {
        src: PersonalWebsite,
        alt: "Personal Website"
      },
      link: "https://www.lozanopowerelectric.com/",
      description: "A solo-developed, fully responsive personal portfolio to showcase my identity, accomplishments, and selected projects. Process included sketches, rough drafting, quality assurance and user central design review via having colleagues, recruiters and advisors navigate the website.",
      technologies: ["BiLogoHtml5", "BiLogoCss3", "BiLogoReact", "BiLogoJavascript"]
    },
    {
      name: "On The Grind",
      image: {
        src: OnTheGrind,
        alt: "On The Grind"
      },
      link: "https://www.lozanopowerelectric.com/",
      description: "An e-commerce website that allows users to view the products that the company known as 'On The Grind' have to offer! Users can navigate the page, sign in or create an account, add items to their cart, place an order, and so much more.",
      technologies: ["BiLogoHtml5", "BiLogoCss3", "BiLogoReact", "BiLogoJavascript"]
    },
  ]
}

export default async function Home() {
  return (
    <main className={styles.main}>
      <section className="">
        <Projects {...MockProjectData}/>
      </section>
    </main>
  );
}
