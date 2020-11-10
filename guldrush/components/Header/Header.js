import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <a className={styles.homeLink} href="/">
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
      </a>
    </div>
  );
};

export default Header;
