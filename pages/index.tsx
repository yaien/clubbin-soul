import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";
import landing from "../public/landing.jpg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CLUBBIN' SOUL</title>
        <meta name="description" content="House Dance for the Culture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.link}>
            <a href="#event">Event</a>
          </div>
          <div className={styles.link}>
            <a href="#location">Location</a>
          </div>
          <div className={styles.link}>
            <a href="#team">Team</a>
          </div>
        </nav>
      </header>
      <main>
        <div id="home" className={styles.home}>
          <div className={styles.landing}>
            <Image src={landing} layout="fill" />
          </div>
          <h1 className={styles.title}>CLUBBIN' SOUL</h1>
        </div>
        <div id="event"></div>
        <div id="location"></div>
        <div id="team"></div>
      </main>
    </div>
  );
};

export default Home;
