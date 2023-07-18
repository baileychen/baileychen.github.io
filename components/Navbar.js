import Link from 'next/link';
import styles from './styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navigation}>
            <Link href="/">Work</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}
