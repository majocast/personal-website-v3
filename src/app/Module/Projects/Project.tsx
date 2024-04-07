'use client';

import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import styles from "./Project.module.css";
import { ReactElement, useRef, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { IconType } from "react-icons";
import LozanoPower from '../../../assets/lozanopowerelectric - Copy.jpg'
import type { Project } from ".";
import {
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
} from 'react-icons/bi';

const slideVariants = {
	open: {
		width: "100%",
	},
	closed: {
		width: 0
	},
	openText: {
		opacity: 1,
	},
	closedText: {
		opacity: 0
	}
}

export default function Project(projectData: Project): ReactElement {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	/*const technologies: ReactElement[] = projectData.technologies.map((tech: string, i: number): ReactElement => {
		const Icon = tech;
		return <span style={{color: "white"}}>{tech}</span>
		//return <Icon key={i} size={35} color="white"/>
	})*/

	//TODO: integrate method to grab strings and import on demand for IconTypes
	const technologies = [BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript]
	const processedTechnologies: ReactElement[] = technologies.map((tech: IconType, i: number): ReactElement => {
		const Icon = tech;
		//return <span style={{color: "white"}}>{tech}</span>
		return <Icon key={i} size={35} color="white"/>
	})

	const toggleContent = (): void => {
		setIsOpen(!isOpen);
	}

	return (
		<div className={styles.ProjectContainer}>
			<button onClick={toggleContent} />
			<AnimatePresence>
				{
					isOpen && <motion.section
						initial="closed"
						animate="open"
						exit="closed"
						variants={slideVariants}
						className={styles.ProjectDescription}
					>
						<div className={styles.ProjectTechnologies}>
							{processedTechnologies}
						</div>
						<motion.div
							initial={{opacity: 0}}
							animate={{
								opacity: 1,
								padding: "1rem",
								transition: {delay: 0.5, duration: 0.3}
							}}
							exit={{
								opacity: 0,
								transition: {duration: 0}
							}}
							variants={slideVariants}
						>
							{projectData.description}
						</motion.div>
					</motion.section>
				}
			</AnimatePresence>
		</div>
	)
	
}
