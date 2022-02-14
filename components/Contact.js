import styles from './styles/Contact.module.css';

const email = 'baileychen@berkeley.edu';

const Contact = () => {
    return (
        <nav className={styles.nav}>
            <a href="mailto:baileychen@berkeley.edu">{email}</a>&#x1F4E7;
            <a href="https://www.linkedin.com/in/bailey-chen-bc">LinkedIn</a>
        </nav>
    );
};

export default Contact;
