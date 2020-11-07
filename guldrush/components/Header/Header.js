import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <a className={styles.homeLink} href="/">
        <h1> Guldrush.se </h1>
      </a>
    </div>
  );
};

export default Header;
