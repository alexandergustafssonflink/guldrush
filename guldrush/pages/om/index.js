import { useRouter } from "next/router";
import styles from "./index.module.css";
import Link from "next/link";
import Layout from "../../components/Layout/Layout.js";
import Footer from "../../components/Footer/Footer.js";

export default function InvestPage() {
  return (
    <>
      <div className={styles.main}>
        <Layout />
        <div className={styles.investSection}>
          <div className={styles.investHeader}>
            <h1>Om Guldrush.se</h1>
          </div>
          <p className={styles.investText}>
            Intresset för ädelmetaller går tillbaka till 2016, då skaparna bakom
            Guldrush bilade genom nordön på Nya Zeeland lyssnandes på en
            ekonomi-podcast. I podden diskuterades guld som valuta och dess roll
            i historien. Podcasten blev inledningen på en resa ner i det ädla
            kaninhål som guld och silver är. <br /> <br />
            När vi insåg hur mycket guld och övriga ädelmetaller spelat roll
            historiskt, samtidigt som det då i princip inte talades något om det
            alls, blev vi exalterade och frustrerade. En viss kognitiv dissonans
            infann sig. Hur kommer det sig egentligen att denna information ej
            är mer allmänt utbredd?
            <br /> <br /> Vi bestämde oss för att göra slag i sak och bli en
            positiv kraft i att öka förståelsen för ädelmetaller som
            investering. Denna sida lanserades 2020 och vårt mål är att sprida
            det goda ordet om världens äldsta valutor - guld och silver.
          </p>
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
      </div>
      <Footer />
    </>
  );
}
