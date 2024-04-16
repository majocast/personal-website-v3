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

const buttonVariants = {
	openButton: {
		filter: "blur(20px)",
	},
	closedButton: {
		filter: "blur(0)",
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
			className={styles.ProjectContainer}
			onHoverStart={toggleContent}
			onHoverEnd={toggleContent}
		>
			<motion.button 
				animate={isOpen ? "openButton" : "closedButton"}
				variants={buttonVariants}
			>
				<motion.div
					animate={!isOpen ? {opacity: 1} : {opacity: 0}}
				>
					<Image
						style={{objectFit: 'cover', maxWidth: "550px", aspectRatio: "16/9", width: "100%", height:"auto", borderRadius: "22px 22px 0 0"}}
						src={projectData.image.src} alt={projectData.image.alt}
					/>
				</motion.div>
				{
					<motion.div
						animate={!isOpen ? {opacity: 1} : {opacity: 0}}
					>
						<span>{projectData.name}</span>
					</motion.div>
				}
			</motion.button>
			<AnimatePresence>
				{
					isOpen && <motion.section
						initial="closedText"
						animate="openText"
						exit="closedText"
						variants={contentVariants}
						className={styles.ProjectDescription}
					>
						<div className={styles.ProjectTechnologies}>
							{processedTechnologies}
						</div>
						<motion.div
							initial={{ opacity: 0}}
							animate="openText"
							exit={{
								opacity: 0,
								transition: {duration: 0.3}
							}}
							variants={contentVariants}
						>
							{projectData.description}
						</motion.div>
					</motion.section>
				}
			</AnimatePresence>
		</motion.div>
	)
	
}
