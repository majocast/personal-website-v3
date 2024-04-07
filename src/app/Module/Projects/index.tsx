'use client';

import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import styles from "./Project.module.css";
import { ReactElement, useRef, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { IconType } from "react-icons";
import {
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
} from 'react-icons/bi';
import Project from "./Project";

type Image = {
	src: string | StaticImport;
	alt: string;
}

export type Project = {
	name: string;
	link: string;
	image: Image;
	description: string;
	technologies: string[];
}

type ProjectsData = {
	projects: Project[];
}

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

export default function Projects(projectsData: ProjectsData): ReactElement {
	let projectsArray = projectsData.projects;
	const Projects: ReactElement[] = projectsArray.map((project: Project, i: number): ReactElement => {
		console.log(project)
		return (
			<Project key={i} {...project}/>
		)
	})

	return (
		<motion.div 
			className={styles.ProjectsWrapper}
			layout
			transition={{ duration: 0.5 }}
		>
			<AnimatePresence>
				{Projects}
			</AnimatePresence>
		</motion.div>
	)
	
}
