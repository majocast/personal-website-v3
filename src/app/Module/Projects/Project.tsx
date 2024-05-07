'use client';

import { motion } from 'framer-motion';
import styles from "./Project.module.css";
import { ReactElement, useState, useContext, useEffect } from "react";
import type { IconType } from "react-icons";
import type { Project } from ".";
import {
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
} from 'react-icons/bi';
import { StateContext } from './StateProvider';

const backgroundsVariants = {
	openButton: {
		width: "100%",
		opacity: "1"
	},
	closedButton: {
		width: "15%",
		opacity: "0.6"
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
	const { active, updateProject } = useContext(StateContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	//TODO: integrate method to grab strings and import on demand for IconTypes
	const technologies = [BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript]
	const processedTechnologies: ReactElement[] = technologies.map((tech: IconType, i: number): ReactElement => {
		const Icon = tech;
		return <Icon key={i} className={styles.techIcons} color="#222831" style={{margin: "0 auto"}}/>
	})

	useEffect(() => {
		if(active === projectData.index) setIsOpen(true);
		else setIsOpen(false)
	}, [active])

	const toggleContent = (): void => {
		console.log("Project Index: " + projectData.index)
		updateProject(projectData.index);
	}

	return (
		<motion.div
			animate={isOpen ? "openButton" : "closedButton"}
			variants={backgroundsVariants}
			className={styles.ProjectContainer}
			onHoverStart={toggleContent}
			onClick={toggleContent}
		>
			<img
				className={styles.imageContainer}
				src={projectData.image.src}
				alt={projectData.image.alt}
			/>
		</motion.div>
	)
	
}
/*
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
								{isOpen ? <MdKeyboardArrowDown className={styles.Arrow}/> : <MdKeyboardArrowUp className={styles.Arrow}/>}
							<strong>
								<span><strong>{projectData.name}</strong></span><br />
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
*/
