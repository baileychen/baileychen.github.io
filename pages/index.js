import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../components/Contact';
import CaseStudy from '../components/CaseStudy';
import Navbar from '../components/Navbar';
import blurbs from '../textblurb/blurbs';
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

export default function Home() {
    const { introBlurbs, veevaOverview, workExperience } = blurbs;
    const { veeva } = workExperience;
    const { internship2018, tripReport } = veeva;
    return (
        <div className="container">
            <Head>
                <title>{fullName}</title>
                <meta name="description" content="Bailey's Website" />
            </Head>

            <main className="main">
                <header className={styles.header}>
                    <p className={styles.title}>{fullName}</p>
                    <Navbar />
                </header>

                <p className={styles.description}>
                    {introBlurbs.map((b) => (
                        <div>{b}</div>
                    ))}
                </p>

                {/* <section>
                    <h2 className={styles.veevaOverview}>{veevaOverview.title}</h2>
                    <p>{veevaOverview.introVeeva}</p>
                    <p>{veevaOverview.introMe}</p>
                </section> */}
                <CaseStudy
                    title={tripReport.title}
                    descriptions={[tripReport.intro]}
                    linkPath={'/cases/oversight'}
                />
                <CaseStudy
                    title={internship2018.title}
                    descriptions={[internship2018.intro]}
                    linkPath={'/cases/workflow'}
                />
                {<Contact />}
            </main>
        </div>
    );
}
