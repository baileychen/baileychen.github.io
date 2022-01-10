import React from 'react';
import Link from 'next/link'
import styles from "./styles/About.module.css";

const introBlurbHi = "Hi there! I am a software engineer with a passion for programming as well as biology and life sciences."
const ledFullstack = "I have led and contributed to full-stack projects that expedite and streamline clinical trial processes.";
const About = () => (
    <>
        <section className={styles.introSection}>
            <p className={styles.introBlurb}>{introBlurbHi}</p>
            <p className={styles.introBlurb}>{ledFullstack}</p>
        </section>
        <Link href="/">Take me back home! &#x1F3E0;</Link>
    </>
);

export default About;