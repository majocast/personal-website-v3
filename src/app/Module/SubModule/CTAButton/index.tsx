import Link from "next/link";
import styles from "./CTAButton.module.css";

type ButtonData = {
    buttonData: {
        text: string;
        link: string;
    }
}

export default function CTAButton(buttonData: ButtonData) {
    const data: any = buttonData.buttonData;
    return <>
        <Link
            className={styles.LinkStyle}
            href={data.link}
            target="_blank"
            style={{zIndex: 10}}
        >
            {data.text}
        </Link>
    </>
}