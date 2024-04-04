import styles from "./page.module.css";
import { lazy } from "react";
import Project from './Module/Project'
import LozanoPower from '../assets/lozanopowerelectric - Copy.jpg'
import {
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
} from 'react-icons/bi';
//const Project = lazy(() => import('./Module/Project/index'))

const MockProjectData = {
  name: "Lozano Power Electric",
	image: {
    src: LozanoPower,
    alt: "Hello there test"
  },
  link: "https://www.lozanopowerelectric.com/",
	description: "Modern and unique responsive company website created to showcase the work, commitment, and services of Lozano Power Electric. Process included Figma drafting, quality assurance and verification between myself and the founder of the company, and customer centric design.",
	technologies: [BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript]
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Project {...MockProjectData}/>
    </main>
  );
}