import styles from "./header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu.js";

const Header = () => {
  return (
    <>
      <BurgerMenu />
      <a className={styles.homeLink} href="/">
        <div className={styles.mainHeader}>
          <div className={styles.imgWrapper}>
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
          </div>
        </div>
      </a>
    </>
  );
};

export default Header;
