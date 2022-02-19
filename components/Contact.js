import styles from './styles/Contact.module.css';

const email = 'baileychen@berkeley.edu';

const Contact = () => {
    return (
        <nav className={styles.nav}>
            <a className={styles.link} href="mailto:baileychen@berkeley.edu">
                {email}
            </a>
            <a className={styles.link} href="https://www.linkedin.com/in/bailey-chen-bc">
                LinkedIn
            </a>
        </nav>
    );
};

export default Contact;
