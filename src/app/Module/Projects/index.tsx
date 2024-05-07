'use client';

import Image from "next/image";
import React, { ReactElement } from "react";
import { motion } from 'framer-motion';
import styles from "./Project.module.css";
import Project from "./Project";
import StateProvider from "./StateProvider";
import Projects from "./Projects";

type Image = {
	src: string;
	alt: string;
}

type DemoData = {
	text: string;
	link: string;
}

export type Project = {
	index: number;
	name: string;
	demoData: DemoData;
	image: Image;
	description: string;
	technologies: string[];
}

type ProjectsData = {
	projects: Project[];
}

export default function ProjectsWrapper(projectsData: ProjectsData): ReactElement {
	console.log(projectsData);

	return (
		<StateProvider>
			<motion.div className={styles.ProjectsWrapper}>
				<Projects {...projectsData}/>
			</motion.div>
		</StateProvider>
	)
	
}
