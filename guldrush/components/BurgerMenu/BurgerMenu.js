import { slide as Menu } from "react-burger-menu";
import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";
import Link from "next/link";

// class BurgerMenu extends React.Component {
const BurgerMenu = () => {
  const [goldIsOpen, setGoldIsOpen] = useState(0);
  const toggleGold = () => setGoldIsOpen(!goldIsOpen);

  const [silverIsOpen, setSilverIsOpen] = useState(0);
  const toggleSilver = () => setSilverIsOpen(!silverIsOpen);
  // showSettings(event) {
  //   event.preventDefault();
  // }

  console.log(Menu.isOpen);

  // render() {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu>
      <p className={styles.metalHeader} onClick={toggleGold}>
        Guld
      </p>
      <ul className={styles.subMenu}>
        <Link href="/guld">
          <li className={goldIsOpen ? "list-item-show" : "list-item-hidden"}>
            <button> Alla guldprodukter</button>
          </li>
        </Link>
        <Link href="/guld/guldtackor">
          <li className={goldIsOpen ? "list-item-show" : "list-item-hidden"}>
            <button> Guldtackor</button>
          </li>
        </Link>
        <Link href="/guld/guldmynt">
          <li className={goldIsOpen ? "list-item-show" : "list-item-hidden"}>
            <button> Guldmynt</button>
          </li>
        </Link>
      </ul>

      <p className={styles.metalHeader} onClick={toggleSilver}>
        {" "}
        Silver
      </p>
      <ul className={styles.subMenu}>
        <Link href="/silver">
          <li className={silverIsOpen ? "list-item-show" : "list-item-hidden"}>
            <button> Alla silverprodukter</button>
          </li>
        </Link>
        <Link href="/silver/silvertackor">
          <li className={silverIsOpen ? "list-item-show" : "list-item-hidden"}>
            <button> Silvertackor</button>
          </li>
        </Link>
        <Link href="/silver/silvermynt">
          <li className={silverIsOpen ? "list-item-show" : "list-item-hidden"}>
            <button> Silvermynt</button>
          </li>
        </Link>
      </ul>

      <a id="contact" className="menu-item" href="/om">
        Om
      </a>
      <a className="menu-item menu-item-blog" href="/blogg">
        Blogg
      </a>
    </Menu>
  );
};
export default BurgerMenu;

// const BurgerMenu = () => {

//     showSettings (event) {
//     event.preventDefault();
//     .
//     .
//     .
//   }
//   return (
//     <Menu>
//       <a id="home" className="menu-item" href="/">
//         Home
//       </a>
//       <a id="about" className="menu-item" href="/about">
//         About
//       </a>
//       <a id="contact" className="menu-item" href="/contact">
//         Contact
//       </a>
//       <a onClick={this.showSettings} className="menu-item--small" href="">
//         Settings
//       </a>
//     </Menu>
//   );
// };

// export default BurgerMenu;
