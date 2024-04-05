'use client';

import Image from "next/image";
import styles from "./Project.module.css";
import { ReactElement, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { IconType } from "react-icons";
import LozanoPower from '../../../assets/lozanopowerelectric - Copy.jpg'
import {
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
} from 'react-icons/bi';

type Image = {
	src: string | StaticImport;
	alt: string;
}

type ProjectData = {
	name: string;
	link: string;
	image: Image;
	description: string;
	technologies: string[];
}

const ImageStyle = {
  height: '100%',
  width: '100%'
}

export default function Project(projectData: ProjectData): ReactElement {
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

	let projectImg = projectData.image.src !== "" ? projectData.image.src : LozanoPower;
	
	return (
		<div className={styles.ProjectContainer}>
			<div className={styles.ProjectContent}>
				<button>
						<Image loading="lazy" style={ImageStyle} src={projectImg} alt={projectData.image.alt}/>
				</button>
				<section className={styles.ProjectText}>
						<div className={styles.ProjectTechnologies}>
							{processedTechnologies}
						</div>
						<div>
							{projectData.description}
						</div>
				</section>
			</div>
		</div>
	)
	
}
