import styles from "./NavMenu.module.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

const NavMenu = ({ products }) => {
  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>
        <a>
          <li>
            {" "}
            <DropdownGold />
          </li>
        </a>
        <a>
          <li>
            <DropdownSilver />
          </li>
        </a>
        <a href="/om">
          <li className={styles.navItem}>Om</li>
        </a>
        <a className={styles.navItemBlog} href="/blogg">
          <li className={styles.navItem}> Blogg </li>
        </a>
      </ul>
    </div>
  );
};

const DropdownGold = ({ props }) => {
  const [isToggled, setToggle] = useState(false);
  const menubg = useSpring({ background: isToggled ? "#6ce2ff" : "#ebebeb" });
  const { y } = useSpring({
    y: isToggled ? 180 : 0,
  });
  const menuAppear = useSpring({
    transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    // opacity: isToggled ? 1 : 0,
  });

  return (
    <div className={styles.menu}>
      <animated.button
        className={styles.radiowrapper}
        onClick={() => setToggle(!isToggled)}
      >
        <div className={styles.radio}>
          <h1>Guld</h1>
          {/* <animated.p
            style={{
              transform: y.interpolate((y) => `rotateX(${y}deg)`),
            }}
          >
            ▼
          </animated.p> */}
        </div>
      </animated.button>
      <animated.div style={menuAppear}>
        {isToggled ? <DropdownContentGold /> : null}
      </animated.div>
    </div>
  );
};

const DropdownSilver = ({ props }) => {
  const [isToggled, setToggle] = useState(false);
  const menubg = useSpring({ background: isToggled ? "#6ce2ff" : "#ebebeb" });
  const { y } = useSpring({
    y: isToggled ? 180 : 0,
  });
  const menuAppear = useSpring({
    transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    // opacity: isToggled ? 1 : 0,
  });

  return (
    <div className={styles.menu}>
      <animated.button
        className={styles.radiowrapper}
        onClick={() => setToggle(!isToggled)}
      >
        <div className={styles.radio}>
          <h1>Silver</h1>
          {/* <animated.p
            style={{
              transform: y.interpolate((y) => `rotateX(${y}deg)`),
            }}
          >
            ▼
          </animated.p> */}
        </div>
      </animated.button>
      <animated.div style={menuAppear}>
        {isToggled ? <DropdownContentSilver /> : null}
      </animated.div>
    </div>
  );
};

const DropdownContentGold = () => {
  return (
    <div className={styles.radiocontent}>
      <a href="/guld">Alla guldprodukter</a>
      <a href="/guld/guldtackor">Guldtackor</a>
      <a href="/guld/guldmynt">Guldmynt</a>
    </div>
  );
};

const DropdownContentSilver = () => {
  return (
    <div className={styles.radiocontent}>
      <a href="/silver">Alla silverprodukter</a>
      <a href="/silver/silvertackor">Silvertackor</a>
      <a href="/silver/silvermynt">Silvermynt</a>
    </div>
  );
};

export default NavMenu;
