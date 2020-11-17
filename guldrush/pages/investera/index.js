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
            <h1>Investera i ädelmetaller</h1>
          </div>
          <div className={styles.investImgDiv}>
            <img
              className={styles.investImage}
              src="./images/goldbars.jpg"
              alt="Goldbars"
            />
            <div className={styles.quoteSection}>
              <p className={styles.quote}>
                “The desire of gold is not for gold. It is for the means of
                freedom and benefit.”{" "}
              </p>
              <p className={styles.quoteAuthor}>- Ralph Waldo Emerson </p>
            </div>
          </div>
          <h1 className={styles.investInHeader}> Investera i guld </h1>
          <p className={styles.investText}>
            Ädelmetaller i form av guld och silver har i tusentals år använts
            som betalmedel. Fram till 1971 fungerade den amerikanska dollarn som
            ett kvitto på fysiskt guld. Varje dollarsedel kom med ett löfte att
            den när som helst kunde bytas in mot sitt bestämda värde i guld.
            Även idag äger stater stora mängder guld, som i sin tur används som
            uppbackning för deras valutor.
            <br />
            <br />
            Guld, till skillnad från vanliga valutor, existerar endast i en
            begränsad mängd på jorden, kan ej tryckas av centralbanker och
            drabbas därför ej av inflation. Egenskaper som hög hållbarhet och
            hög temperaturbeständighet gör även att guld är mycket efterfrågat
            inom elektronikindustrin. Mobiltelefoner och datorer är två exempel
            där guld är en mycket viktig beståndsdel.
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

          <img
            className={styles.investImage}
            src="./images/silverbars.png"
            alt="Silverbars"
          />
          <h1 className={styles.investInHeader}> Investera i silver </h1>
          <p className={styles.investText}>
            Även silver har, mycket på grund av sin hållbarhet, formbarhet och
            estetik, under alla tider använts som betalmedel. Nuförtiden används
            även silver i många olika industrier.
            <br />
            <br />
            Silver är den metall som leder värme och elektricitet allra bäst och
            den används bland annat i elkontakter, batterier och kretskort i
            elektronik som mobiltelefoner och datorer. Metallen ingår används
            även i solceller, på flygplan och rymdsatelliter samt vid plätering
            av andra material.
            <br />
            <br />
            Silver har stora anitbakteriella fördelar och används därför även
            inom läkemedelsindustrin.
          </p>
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
