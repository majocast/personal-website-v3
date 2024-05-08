import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css'
import type { Image } from '../../page';

type CardData = {
  image: Image,
	title: string,
	link: string,
	description: string
}

export default function Card(moduleData: CardData): ReactElement {
	return <div style={{color: "#FFFFFF"}}>
		hello
	</div>
}