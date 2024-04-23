'use client';

import { AnimatePresence, motion } from 'framer-motion';
import styles from "./Project.module.css";
import { ReactElement, useRef, useState } from "react";
import type { IconType } from "react-icons";
import type { Project } from ".";
import CTAButton from '../SubModule/CTAButton';

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
		return <Icon key={i} size={45} color="white" style={{margin: "0 10px"}}/>
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
			<motion.div
				className={styles.BlurredBackground}
				style={{
					backgroundImage: `url(${projectData.image.src})`
				}}
				animate={isOpen ? {
					opacity: "100%",
					transition: {delay: 0.5, duration: 0.3}
				} : {
					opacity: "0%",
					transition: {delay: 0.5, duration: 0.3}
				}}
			>&nbsp;
			</motion.div>
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
							maxHeight: "350px",
							translateX: "0%",
							translateY: "0%",
							border: "0",
							transition: {delay: 0.5, duration: 0.3}
						} : {
							borderRadius: "100px",
							maxWidth: "200px",
							maxHeight: "200px",
							translateX: "65%",
							translateY: "-25%",
							border: "5px solid #222831",
							transition: {delay: 0.5, duration: 0.3}
						}}
				>
					<img
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
						initial={{ opacity: 0 }}
						animate="openText"
						exit={{
							opacity: 0,
							transition: {duration: 0.3}
						}}
						variants={contentVariants}
						className={styles.ProjectDescription}
					>
						<motion.div 
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
						<div style={{height: "150px"}}>
							<strong>
								<span style={{fontSize: "28px", textTransform: "uppercase", fontWeight: "800", backgroundColor: "#EEEEEE", padding: "0 5px"}}><strong>{projectData.name}</strong></span><br />
								<span style={{color: "#EEEEEE"}}>{projectData.description}</span>
							</strong>
						</div>
						<div style={{display: "flex", justifyContent: "center", color: "#76ABAE", padding: "5px 0 0"}}>
							<CTAButton buttonData={projectData.demoData} />
						</div>
					</motion.div>
				}
			</AnimatePresence>
		</motion.div>
	)
	
}
