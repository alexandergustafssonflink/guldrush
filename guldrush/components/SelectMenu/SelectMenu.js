import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import styles from "./SelectMenu.module.css";
import { useRouter } from "next/router";

export default function SelectMenu(props) {
  return (
    <div className={styles.selectMenu}>
      <Radio />
    </div>
  );
}

const Radio = () => {
  const [isToggled, setToggle] = useState(false);
  const menubg = useSpring({ background: isToggled ? "#6ce2ff" : "#ebebeb" });
  const { y } = useSpring({
    y: isToggled ? 180 : 0,
  });
  const menuAppear = useSpring({
    transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: isToggled ? 1 : 0,
  });

  return (
    <div className={styles.menu}>
      <animated.button
        className={styles.radiowrapper}
        onClick={() => setToggle(!isToggled)}
      >
        <div className={styles.radio}>
          <p>Välj vikt</p>
          <animated.p
            style={{
              transform: y.interpolate((y) => `rotateX(${y}deg)`),
            }}
          >
            ▼
          </animated.p>
        </div>
      </animated.button>
      <animated.div style={menuAppear}>
        {isToggled ? <RadioContent /> : null}
      </animated.div>
    </div>
  );
};

const RadioContent = () => {
  //   if (router.asPath == "/guld/guldtackor") {
  return (
    <div className={styles.radiocontent}>
      <a href="/guld/guldtackor/1">1 gram</a>
      <a href="/guld/guldtackor/2">2 gram</a>
      <a href="/guld/guldtackor/5">5 gram</a>
      <a href="/guld/guldtackor/10">10 gram</a>
      <a href="/guld/guldtackor/20">20 gram</a>
      <a href="/guld/guldtackor/50">50 gram</a>
      <a href="/guld/guldtackor/100">100 gram</a>
      <a href="/guld/guldtackor/250">250 gram</a>
    </div>
  );
};
