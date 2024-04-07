'use client';

import { AnimatePresence, motion } from 'framer-motion';
import styles from "./Project.module.css";
import { ReactElement, useRef, useState } from "react";
import type { IconType } from "react-icons";
import type { Project } from ".";
import {
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
} from 'react-icons/bi';
import Image from 'next/image';

const slideVariants = {
	open: {
		width: "100%",
		order: 2,
	},
	closed: {
		width: 0,
		order: 1,
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

	//TODO: integrate method to grab strings and import on demand for IconTypes
	const technologies = [BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript]
	const processedTechnologies: ReactElement[] = technologies.map((tech: IconType, i: number): ReactElement => {
		const Icon = tech;
		return <Icon key={i} size={35} color="white"/>
	})

	const toggleContent = (): void => {
		setIsOpen(!isOpen);
	}

	return (
		<motion.div
			layout
			transition={{ duration: 1 }}
			className={styles.ProjectContainer}
			style={{ order: isOpen ? 1 : 2}}
		>
			<button onClick={toggleContent}>
				<Image style={{width: "100%", maxWidth:"400px", height:"auto"}} src={projectData.image.src} alt={projectData.image.alt}/>
			</button>
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
							initial={{ opacity: 0, padding: 0 }}
							animate={{
								opacity: 1,
								padding: "1rem",
								transition: {delay: 0.5, duration: 0.3}
							}}
							exit={{
								opacity: 0,
								padding: 0,
								transition: {duration: 0}
							}}
							variants={slideVariants}
						>
							{projectData.description}
						</motion.div>
					</motion.section>
				}
			</AnimatePresence>
		</motion.div>
	)
	
}
