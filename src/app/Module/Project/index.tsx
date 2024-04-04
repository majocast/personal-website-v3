import Image from "next/image";
import styles from "./Project.module.css";
import { ReactElement } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";

type Image = {
	src: string | StaticImport;
	alt: string;
}

type ProjectData = {
	name: string;
	link: string;
	image: Image;
	description: string;
	technologies: IconType[];
}

const ImageStyle = {
	height: 'auto',
	width: '100%',
}

export default function Project(projectData: ProjectData): ReactElement {
	const technologies: ReactElement[] = projectData.technologies.map((tech: IconType, i: number): ReactElement => {
		const Icon = tech;
		return <Icon key={i} size={35} color="white"/>
	})

	return <div className={styles.ProjectContainer}>
		<div className={styles.ProjectContent}>
			<section>
				<Image loading="lazy" style={ImageStyle} src={projectData.image.src} alt={projectData.image.alt}/>
			</section>
			<section className={styles.ProjectText}>
				<div className={styles.ProjectTechnologies}>
					{technologies}
				</div>
				<div>
					{projectData.description}
				</div>
			</section>
		</div>
	</div>
}