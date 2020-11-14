import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import styles from "./SelectMenuCoins.module.css";
import { useRouter } from "next/router";

export default function SelectMenuCoins(props) {
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
  const [weight, setWeight] = useState();
  console.log(weight);
  return (
    <div className={styles.radiocontent}>
      <a onClick={() => setWeight(1)}>1 oz</a>
      <a onClick={() => setWeight(0.5)}>0.5 oz</a>
      <a onClick={() => setWeight(0.25)}>0.25 oz</a>
    </div>
  );
};
