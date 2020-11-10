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
                />
                <h3>Alla guldprodukter</h3>
              </button>
            </Link>

            <Link href="/silver">
              <button className={styles.bigButton}>
                <img
                  className={styles.yellowBanner}
                  src="./images/beigebanner.png"
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
              <img className={styles.investImage} src="./images/goldbars.jpg" />
            </div>

            <p className={styles.investText}>
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."{" "}
            </p>
            <button className={styles.readMore}>
              {" "}
              <p> Läs mer</p>
              <img
                className={styles.rightArrow}
                src="./images/right-arrow.svg"
              />{" "}
            </button>
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
