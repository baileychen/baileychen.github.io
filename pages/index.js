import Contact from '../components/Contact';
import CaseStudy from '../components/CaseStudy';
import Navbar from '../components/Navbar';
import blurbs from '../textblurb/blurbs';
import sfProfPic from '../public/images/sf_profile_pic.jpeg';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Index.module.css';

const h2Link = (path, text, description) => (
    <section>
        <Link href={path}>
            <h2>
                <a href={path}>{text}</a>
            </h2>
        </Link>
        <p>{description}</p>
    </section>
);
const fullName = 'Bailey Chen';
const centered = (component) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '10rem',
        }}
    >
        {component}
    </div>
);

export default function Home() {
    const { introBlurbs, veevaOverview, workExperience } = blurbs;
    const { veeva } = workExperience;
    return (
        <div className="container">
            <Head>
                <title>{fullName}</title>
                <meta name="description" content="Bailey's Website" />
            </Head>
            <main className={styles.main}>
                <header className={styles.header}>
                    <p className={styles.title}>{fullName}</p>
                    <Navbar />
                </header>
                <p className={styles.description}>{introBlurbs}</p>
                {centered(<Image src={sfProfPic} />)}
                {veeva.map(({ title, intro, linkPath }, i) => (
                    <CaseStudy
                        title={title}
                        descriptions={[intro]}
                        linkPath={linkPath}
                        isRight={i % 2 === 0}
                    />
                ))}
                {<Contact />}
            </main>
        </div>
    );
}
