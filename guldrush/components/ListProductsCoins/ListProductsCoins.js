import styles from "./ListProductsCoins.module.css";
import React, { useState } from "react";

const ListProductsCoins = ({ products }) => {
  let all1Oz = products.filter((p) => p.weightOz == 1);
  let allhalfOz = products.filter((p) => p.weightOz == 0.5);
  let allQuarterOz = products.filter((p) => p.weightOz == 0.25);

  const [weight, setWeight] = useState(0);

  <button onClick={(setWeight = 5)}> 1-5 </button>;
  // USE STATE
  return (
    <div className={styles.main}>
      <ul className={styles.productList}>
        {products.map((p, i) => {
          return (
            <a className={styles.link} href={p.url} key={i}>
              <li className={styles.product}>
                <div>
                  <h3 className={styles.nameTag}>{p.name} </h3>
                  <p className={styles.companyTag}>{p.company}</p>
                </div>
                <div>
                  <h3 className={styles.priceTag}>{p.price + ":-"}</h3>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default ListProductsCoins;
