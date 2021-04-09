import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1> Guldrush.se </h1>

      <h3>
        Kontakt:
        <a className={styles.mailLink} href="mailto:info@guldrush.se">
          {" "}
          info@guldrush.se{" "}
        </a>{" "}
      </h3>
    </div>
  );
};

export default Footer;
