import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1> Guldrush.se </h1>
      <a className={styles.mailLink} href="mailto:info@guldrush.se">
        <h3> Kontakt: info@guldrush.se </h3>
      </a>
    </div>
  );
};

export default Footer;
