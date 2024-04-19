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
		filter: "blur(0)"
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
	const technologies = [BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript]
	const processedTechnologies: ReactElement[] = technologies.map((tech: IconType, i: number): ReactElement => {
		const Icon = tech;
		return <Icon key={i} size={50} color="white" style={{margin: "0 10px"}}/>
	})

	const toggleContent = (): void => {
		setIsOpen(!isOpen);
	}

	return (
		<motion.div
			layout
			className={styles.ProjectContainer}
			onClick={toggleContent}
		>
			<motion.section 
				animate={isOpen ? "openButton" : "closedButton"}
				variants={buttonVariants}
			>
				<motion.div
					style={{overflow: "hidden"}}
					animate={!isOpen ? 
						{
							borderRadius: "0",
							maxWidth: "500px",
							maxHeight: "300px",
							translateX: "0%",
							translateY: "0%",
							transition: {delay: 0.5, duration: 0.3}
						} : {
							borderRadius: "100px",
							maxWidth: "200px",
							maxHeight: "200px",
							translateX: "65%",
							translateY: "-15%",
							transition: {delay: 0.5, duration: 0.3}
						}}
				>
					<Image
						style={{objectFit: 'contain', width: "auto", height: "100%"}}
						src={projectData.image.src} alt={projectData.image.alt}
					/>
				</motion.div>
				{
					<motion.div
						animate={!isOpen ? {
							opacity: 1,
							translateY: "0%",
							transition: {delay: 0.9, duration: 0.3}
						} : {
							opacity: 0,
							translateY: "100%",
						}}
					>
						<span>{projectData.name}</span>
					</motion.div>
				}
			</motion.section>
			<AnimatePresence>
				{
					isOpen && <motion.div 
						className={styles.ProjectTechnologies}
						initial={{ opacity: 0 }}
						animate="openText"
						exit={{
							opacity: 0,
							transition: {duration: 0.3}
						}}
						variants={contentVariants}
					>
						{processedTechnologies}
					</motion.div>
				}
				{
					isOpen && <motion.div
						initial={{ opacity: 0 }}
						animate="openText"
						exit={{
							opacity: 0,
							transition: {duration: 0.3}
						}}
						variants={contentVariants}
						className={styles.ProjectDescription}
					>
						
						<strong>
							<span style={{fontSize: "28px", textTransform: "uppercase"}}>{projectData.name}</span><br />
								{projectData.description}
						</strong>
					</motion.div>
				}
			</AnimatePresence>
		</motion.div>
	)
	
}
