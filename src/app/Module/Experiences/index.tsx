'use client'

import { ReactElement } from "react";
import styles from './Experiences.module.css'
import { motion } from 'framer-motion';
import Experience from "./Experience";

export type Experience = {
	title: string;
	description: string;
}

type ExperienceData = {
	experiences: Experience[];
}

export default function Experiences(moduleData: ExperienceData): ReactElement {
	const experiences = moduleData.experiences.map((experience: Experience, i: number): ReactElement => {
		return <Experience {...experience} />
	})
	const buttons = moduleData.experiences.map((experience: Experience, i: number) => {
		return <button>{experience.title}</button>
	})
	return <motion.div className={styles.ExperiencesWrapper} layout>
		<section className={styles.ButtonContainer}>
			{buttons}
		</section>
		<section className={styles.ExperienceContainer}>
			{experiences}
		</section>
	</motion.div>
}