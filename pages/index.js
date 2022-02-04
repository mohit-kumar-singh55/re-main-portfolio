import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import mks from "../public/assets/mks.png";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MKS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
      </Head>

      {/* Home */}
      <div className={styles.container} id="home">
        <div className={styles.text__container}>
          <h2 className={styles.heading}>Hi<span className={styles.wave}>👋</span>, I&apos;m</h2>
          <h1 className={styles.gradient__text}>Mohit Kumar Singh</h1>
          <br />
          <h2 className={styles.default}>Web Developer</h2>
          <p>Intermediate at - React. Love to play with DOMS.
            <br />Trying to Build something new
          </p>
          <br />
          <Link href="/" ><a className={styles.btn}><span>Resume</span></a></Link>
          <div className={styles.sectionDivider} />
        </div>
        <div className={styles.image__container}>
          <Image src={mks} alt="MKS" width="380px" height="380px" />
        </div>
      </div>

      {/* About */}
      <div className={styles.container__about} id="about">
        <div className={styles.box}>
          <div className={styles.dot__container}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.box__heading}><h3>About Me</h3></div>
          <div className={styles.box__content}>
            <p>Welcome to my Arena</p>
            <p>My name is <strong>Mohit Kumar Singh</strong></p>
            <p>I am currently in 2nd year of Bsc Computer Science</p>
            <br />
            <p>I love to play with DOM</p>
            <br />
            <p>I&apos;m quite confident, curious and <em>consistently working to improve and expand my skills</em></p>
            <br />
            <p>Looking forward to gain some experience</p>
            <br />
            <p><em><strong>~Thank you for your time</strong></em></p>
          </div>
        </div>
        <div className={styles.grid__box}>
          This is the gird box
        </div>
      </div>

    </div>
  )
}
