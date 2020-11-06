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
          <p>Välj gram</p>
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
      <a href="/guld/guldtackor/1-gram">1 gram</a>
      <a href="/guld/guldtackor/5-gram">5 gram</a>
      <a href="/guld/guldtackor/10-gram">10 gram</a>
      <a href="/guld/guldtackor/20-gram">20 gram</a>
      <a href="/guld/guldtackor/50-gram">50 gram</a>
      <a href="/guld/guldtackor/100-gram">100 gram</a>
      <a href="/guld/guldtackor/250-gram">250 gram</a>
    </div>
  );
  //   } else if (router.asPath == "/silver/silvertackor") {
  //     <div className={styles.radiocontent}>
  //       <a href="/silver/silvertackor/100-gram">100 gram</a>
  //       <a href="/silver/silvertackor/500-gram">500 gram</a>
  //       <a href="/silver/silvertackor/10-gram">1000 gram</a>
  //     </div>;
  //   }
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
