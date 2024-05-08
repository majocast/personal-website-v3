'use client';

import React, { ReactElement, useContext, useEffect} from "react";
import styles from "./Project.module.css";
import Project from "./Project";
import { StateContext } from "./StateProvider";
import CTAButton from '../SubModule/CTAButton';
import type { IconType } from "react-icons";
import type { Image } from '../../page';
import {
  BiLogoReact,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
} from 'react-icons/bi';

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

export default function Projects(projectsData: ProjectsData): ReactElement {
    console.log(projectsData);
	const { active } = useContext(StateContext);
	let projectsArray = projectsData.projects;

    const technologies = [BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript]
	const processedTechnologies: ReactElement[] = technologies.map((tech: IconType, i: number): ReactElement => {
		const Icon = tech;
		return <Icon key={i} className={styles.techIcons} color="#FFFFFF" style={{margin: "0 auto"}}/>
	})

    useEffect(() => {
        console.log("Changed in Projects: " + active )
    }, [active])

    useEffect(() => {
        console.log("Re-render");
    })

	return (
		<div className={styles.ProjectsWrapper}>
            <div className={styles.Projects}>
                {projectsArray.map((project: Project, i: number): ReactElement => {
                    return <Project key={i} {...project}/>
                })}
            </div>
            <div className={styles.Description}>
                <div
						className={styles.ProjectDescription}
					>
						<div className={styles.titleContainer}>
				<strong>
					<span><strong>{projectsArray[active].name}</strong></span><br />
				</strong>
			</div>
						<div 
							className={styles.ProjectTechnologies}
						>
							{processedTechnologies}
						</div>
						<p className={styles.projectText}>
							<strong>
								<span>{projectsArray[active].description}</span>
							</strong>
						</p>
						<div style={{display: "flex", justifyContent: "center", color: "#76ABAE", padding: "5px 0 0"}}>
							<CTAButton buttonData={projectsArray[active].demoData} />
						</div>
					</div>
            </div>
		</div>
	)
	
}
