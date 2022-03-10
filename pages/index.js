import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import mks from "../public/assets/mks.png";
import Link from 'next/link';
import { projects } from "../constants/constants";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";

export default function Home() {
  const about = {
    technologies: ["React", "NextJS", "MongoDB", "NodeJS"],
    languages: ["Java", "JavaScript", "Python"],
    sLanguages: ["Hindi", "English", "Japanese"],
  }

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
        <motion.div whileInView={{ x: [-30, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }} className={styles.text__container}>
          <h2 className={styles.heading}>Hi<span className={styles.wave}>👋</span>, I&apos;m</h2>
          <h1 className={styles.gradient__text}>Mohit Kumar Singh</h1>
          <br />
          <h2 className={styles.default}>
            <TypeIt
              options={{
                speed: 200,
                loop: true,
                waitUntilVisible: true,
              }}
              getBeforeInit={(instance) => {
                instance.pause(500).type("Full Stack Developer")
                  .pause(1000).move(-10).delete(10).pause(500).type("React")
                  .pause(1000).delete(5).type("App")
                  .pause(1000).move(10).delete(13)
                  .pause(1000).type("Freelancer")
                  .pause(1000).delete(10).type("Java Developer");
                return instance;
              }} />
          </h2>
          <p>Intermediate at - React. Love to play with DOMS.
            <br />Trying to Build something new
          </p>
          <br />
          <Link href="/" ><a className={styles.btn}><span>Resume</span></a></Link>
          <div className={styles.sectionDivider} />
        </motion.div>
        <motion.div whileInView={{ x: [30, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }} className={styles.image__container}>
          <Image src={mks} alt="MKS" width="380px" height="380px" />
        </motion.div>
      </div>

      {/* About */}
      <div className={styles.container__about} id="about">
        <motion.div className={styles.box} whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }}>
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
            <p><em><strong>
              <TypeIt
                options={{
                  speed: 200,
                  loop: true,
                  waitUntilVisible: true,
                }}
                getBeforeInit={(instance) => {
                  instance.options({ speed: 150 }).pause(500).type("~Thank you for your time").pause(500);
                  return instance;
                }} />
            </strong></em></p>
          </div>
        </motion.div>

        <div className={styles.languages}>
          <div className={styles.language__heading}>Technologies</div>
          <motion.div whileInView={{ x: [-30, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }} className={styles.circle__container}>
            {about.technologies.map((item, index) => (
              <span key={index} className={styles.circle}>{item}</span>
            ))}
          </motion.div>
        </div>
        <div className={styles.languages}>
          <div className={styles.language__heading}>Languages</div>
          <motion.div whileInView={{ x: [30, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }} className={styles.circle__container}>
            {about.languages.map((item, index) => (
              <span key={index} className={styles.circle}>{item}</span>
            ))}
          </motion.div>
        </div>
        <div className={styles.languages}>
          <div className={styles.language__heading}>Speaking Languages</div>
          <motion.div whileInView={{ x: [-30, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }} className={styles.circle__container}>
            {about.sLanguages.map((item, index) => (
              <span key={index} className={styles.circle}>{item}</span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className={styles.customDivider} />

      {/* projects */}
      <div className={styles.container__projects} id="projects">
        <div className={styles.projects__heading}>Projects</div>
        <div className={styles.projects}>

          {projects && projects.map((item) => (
            <motion.div whileInView={{ y: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }} className={styles.project__card} key={item.title}>
              <Image src={item.image} alt="Projects" />
              <div className={styles.titleContent}>
                <div className={styles.box__heading}><h2>{item.title}</h2></div>
                <div className={styles.hr} />
              </div>
              <div className={styles.cardInfo}>{item.description}</div>
              <div>
                <div className={`${styles.titleContent} ${styles.stack}`}>Stack</div>
                <ul className={styles.tagList}>
                  {item.tags.map((tag, i) => (
                    <li className={styles.tag} key={i}>{tag}</li>
                  ))}
                </ul>
              </div>
              <ul className={styles.utilityList}>
                <a href={item.live} target="_blank" rel="noreferrer" className={styles.btn}><span>Live</span></a>
                <a href={item.code} target="_blank" rel="noreferrer" className={styles.btn}><span>Code</span></a>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.customDivider} />

      {/* Contact */}
      <div className={styles.contact__container} id="contact">
        <motion.div className={styles.box} whileInView={{ x: [-30, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }}>
          <div className={styles.dot__container}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.box__heading}><h3>Contact Me</h3></div>
          <div className={styles.contact__box__content}>
            <div className={styles.contact__box}>
              <div className={styles.links}>
                <h4 className={styles.linkTitle}>Call</h4>
                <a className={styles.linkItem} href="tel:9105577623">9105577623</a>
              </div>
              <div className={styles.links}>
                <h4 className={styles.linkTitle}>Email </h4>
                <a className={styles.linkItem} href="mailto:mohitkumarsingh12344@gmail.com">mohitkumarsingh12344@gmail.com</a>
              </div>
            </div>
            <div className={styles.contact__media__links}>
              <a href="https://instagram.com/sniper.mks_55" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/mohit-kumar-singh-128ab4217/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/mohit-kumar-singh55" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  )
}