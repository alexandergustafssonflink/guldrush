import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";
import sortPrices from "../functions/sortPrices";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./index.module.css";
import Layout from "../components/Layout/Layout.js";
import Footer from "../components/Footer/Footer.js";

export default function Home({ prices }) {
  return (
    <>
      <div className={styles.main}>
        <Layout />
        <div className={styles.metalChoice}>
          <div className={styles.headerCompare}>
            <h1> Jämför priser på: </h1>
          </div>

          <div className={styles.smallButtons}>
            <div className={styles.upper}>
              <Link href="/guld/guldtackor">
                <button className={styles.metalButton}> Guldtackor </button>
              </Link>

              <Link href="/guld/guldmynt">
                <button className={styles.metalButton}> Guldmynt </button>
              </Link>
            </div>
            <div className={styles.lower}>
              <Link href="/silver/silvertackor">
                <button className={styles.metalButton}> Silvertackor</button>
              </Link>

              <Link href="/silver/silvermynt">
                <button className={styles.metalButton}> Silvermynt </button>
              </Link>
            </div>
          </div>
          <div className={styles.bigButtons}>
            <Link href="/guld">
              <button className={styles.bigButton}>
                {" "}
                <img
                  className={styles.yellowBanner}
                  src="./images/yellowbanner.png"
                  alt="Yellow banner"
                />
                <h3>Alla guldprodukter</h3>
              </button>
            </Link>

            <Link href="/silver">
              <button className={styles.bigButton}>
                <img
                  className={styles.beigeBanner}
                  src="./images/beigebanner.png"
                  alt="Beige banner"
                />
                <h3>Alla silverprodukter </h3>
              </button>
            </Link>
          </div>

          <div className={styles.investSection}>
            <div className={styles.investHeader}>
              <h1>Investera i ädelmetaller</h1>
            </div>
            <div className={styles.investImgDiv}>
              <img
                className={styles.investImage}
                src="./images/goldbars.jpg"
                alt="Goldbars"
              />
            </div>

            <p className={styles.investText}>
              Ädelmetaller i form av guld och silver har i tusentals år använts
              som betalmedel. Fram till 1971 fungerade den amerikanska dollarn
              som ett kvitto på fysiskt guld. <br />
              <br />
              Varje dollarsedel kom med ett löfte att den när som helst kunde
              bytas in mot sitt bestämda värde i guld. Även idag äger stater
              stora mängder guld, som i sin tur används som uppbackning för
              deras valutor.
            </p>
            <a className={styles.investLink} href="/investera">
              <button className={styles.readMore}>
                {" "}
                <p> Mer om ädelmetaller</p>
                <img
                  className={styles.rightArrow}
                  src="./images/right-arrow.svg"
                  alt="Right arrow"
                />{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const prices = await db
    .collection("prices")
    .find({})
    .sort({ Date: -1 })
    .limit(200)
    .toArray();

  return {
    props: {
      prices: JSON.parse(JSON.stringify(prices)),
    },
  };
}
