import Link from 'next/link';
import React from 'react';
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

function Navbar() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <Link passHref href="#home"><i style={{ color: `${router.pathname === '/' ? "red" : "cyan"}` }} className="fas fa-house-damage" /></Link>
            </div>
            <div className={styles.button}>
                <Link passHref href="#about"><i style={{ color: `${router.pathname === '/about' ? "red" : "cyan"}` }} className="fas fa-user-tie" /></Link>
            </div>
            <div className={styles.button}>
                <Link passHref href="#projects"><i style={{ color: `${router.pathname === '/projects' ? "red" : "cyan"}` }} className="fas fa-laptop-code" /></Link>
            </div>
            <div className={styles.button}>
                <Link passHref href="#contact"><i style={{ color: `${router.pathname === '/contact' ? "red" : "cyan"}` }} className="far fa-address-card" /></Link>
            </div>
        </div>
    );
}

export default Navbar;
