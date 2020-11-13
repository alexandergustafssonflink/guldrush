import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import styles from "./SelectMenuSilver.module.css";
import { useRouter } from "next/router";

export default function SelectMenuSilver(props) {
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
  return (
    <div className={styles.radiocontent}>
      <a href="/guld/guldmunt/1-oz">1 oz</a>
      <a href="/guld/guldmunt/0.5-oz">0.5 oz</a>
      <a href="/guld/guldmunt/0.25-oz">0.25 oz</a>
    </div>
  );
};
