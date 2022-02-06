import Link from 'next/link';
import React, { useState } from 'react';
import styles from "./Navbar.module.css";

function Navbar() {
    const [active, setActive] = useState({
        home: true,
        about: false,
        projects: false,
        contact: false
    });

    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <Link passHref href="#home"><i onClick={() => setActive({ ...false, home: true })} style={{ color: `${active.home ? "red" : "cyan"}` }} className="fas fa-house-damage" /></Link>
            </div>
            <div className={styles.button}>
                <Link passHref href="#about"><i onClick={() => setActive({ ...false, about: true })} style={{ color: `${active.about ? "red" : "cyan"}` }} className="fas fa-user-tie" /></Link>
            </div>
            <div className={styles.button}>
                <Link passHref href="#projects"><i onClick={() => setActive({ ...false, projects: true })} style={{ color: `${active.projects ? "red" : "cyan"}` }} className="fas fa-laptop-code" /></Link>
            </div>
            <div className={styles.button}>
                <Link passHref href="#contact"><i onClick={() => setActive({ ...false, contact: true })} style={{ color: `${active.contact ? "red" : "cyan"}` }} className="far fa-address-card" /></Link>
            </div>
        </div>
    );
}

export default Navbar;
