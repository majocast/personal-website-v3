'use client';

import { AnimatePresence, motion } from 'framer-motion';
import styles from "./Project.module.css";
import { ReactElement, useRef, useState } from "react";
import type { IconType } from "react-icons";
import type { Project } from ".";
import CTAButton from '../SubModule/CTAButton';
import { MdKeyboardArrowUp, MdKeyboardArrowDown  } from "react-icons/md";

import {
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
} from 'react-icons/bi';
import Image from 'next/image';

const backgroundsVariants = {
	openButton: {
		filter: "blur(5px)",
		opacity: "0.6"
	},
	closedButton: {
		filter: "blur(0)",
		opacity: "1"
	}
}

const contentVariants = {
	openText: {
		opacity: 1,
		transition: {delay: 0.5, duration: 0.3}
	},
	closedText: {
		opacity: 0,
	}
}

export default function Project(projectData: Project): ReactElement {

	const projectImages: any = {
		"Lozano Power Electric": "https://i.ibb.co/b21hbM8/lozanopowerelectric.jpg",
		"Event Finder": "https://i.ibb.co/0mBCW6j/eventfinder.jpg",
		"Personal Website": "https://i.ibb.co/5j7NLgh/personalwebsite.jpg",
		"On The Grind": "https://i.ibb.co/khFwTt9/onthegrind.jpg"
	}
	/*
		<img src="https://i.ibb.co/b21hbM8/lozanopowerelectric.jpg" alt="lozanopowerelectric" border="0">
<img src="https://i.ibb.co/khFwTt9/onthegrind.jpg" alt="onthegrind" border="0">
<img src="https://i.ibb.co/5j7NLgh/personalwebsite.jpg" alt="personalwebsite" border="0">
<img src="https://i.ibb.co/KshtVDY/crisisconnect.jpg" alt="crisisconnect" border="0">
<img src="https://i.ibb.co/0mBCW6j/eventfinder.jpg" alt="eventfinder" border="0">
	*/
	

	const [isOpen, setIsOpen] = useState<boolean>(false);

	//TODO: integrate method to grab strings and import on demand for IconTypes
	const technologies = [BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript]
	const processedTechnologies: ReactElement[] = technologies.map((tech: IconType, i: number): ReactElement => {
		const Icon = tech;
		return <Icon key={i} className={styles.techIcons} color="#222831" style={{margin: "0 auto"}}/>
	})

	const toggleContent = (): void => {
		setIsOpen(!isOpen);
	}

	return (
		<motion.div
			className={styles.ProjectContainer}
			onClick={toggleContent}
		>
			<motion.div
				animate={isOpen ? "openButton" : "closedButton"}
				className={styles.backgroundContainer}
				variants={backgroundsVariants}
				style={{backgroundImage: `url(${projectData.image.src})`}}
			>a</motion.div>
			<AnimatePresence>
				{
					<motion.div
						animate={isOpen ? {
							top: "10%",
							transition: {duration: 0.3}
						} : {
							top: "80%",
							transition: {duration: 0.3}
						}}
						variants={contentVariants}
						className={styles.ProjectDescription}
					>
						<div className={styles.titleContainer}>
							<strong>
								<span><strong>{projectData.name}</strong></span><br />
							</strong>
							<strong>
								{isOpen ? <MdKeyboardArrowDown className={styles.Arrow}/> : <MdKeyboardArrowUp className={styles.Arrow}/>}
							</strong>
						</div>
						<div 
							className={styles.ProjectTechnologies}
						>
							{processedTechnologies}
						</div>
						<p className={styles.projectText}>
							<strong>
								<span>{projectData.description}</span>
							</strong>
						</p>
						<div style={{display: "flex", justifyContent: "center", color: "#76ABAE", padding: "5px 0 0"}}>
							<CTAButton buttonData={projectData.demoData} />
						</div>
					</motion.div>
				}
			</AnimatePresence>
		</motion.div>
	)
	
}
