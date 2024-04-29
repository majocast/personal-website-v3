'use client';

import Image from "next/image";
import React, { ReactElement, useContext, useState, createContext, Dispatch, useEffect} from "react";
import { AnimatePresence, motion } from 'framer-motion';
import styles from "./Project.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { IconType } from "react-icons";
import {
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
} from 'react-icons/bi';
import Project from "./Project";
import StateProvider, { StateContext } from "./StateProvider";
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
