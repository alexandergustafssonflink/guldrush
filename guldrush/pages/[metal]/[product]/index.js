import sortPrices from "../../../functions/sortPrices";
import { connectToDatabase } from "../../../util/mongodb";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/Layout.js";
import styles from "./index.module.css";
import ListProducts from "../../../components/ListProducts/ListProducts.js";
import ListProductsCoins from "../../../components/ListProductsCoins/ListProductsCoins.js";
import SelectMenu from "../../../components/SelectMenu/SelectMenu.js";
import SelectMenuSilver from "../../../components/SelectMenuSilver/SelectMenuSilver.js";
import SelectMenuCoins from "../../../components/SelectMenuCoins/SelectMenuCoins.js";
import Footer from "../../../components/Footer/Footer.js";
import React, { useState } from "react";

export default function listOfProductsByProduct({ products }) {
  let latestDate = products[0].date;
  let latestProducts = products.filter((p) => {
    if (p.date == latestDate) {
      return p;
    }
  });
  let sortedProducts = latestProducts.sort(sortPrices);

  let oneOzProducts = sortedProducts.filter((p) => p.weightOz == 1);
  let halfOzProducts = sortedProducts.filter((p) => p.weightOz == 0.5);
  let quarterOzProducts = sortedProducts.filter((p) => p.weightOz == 0.25);
  let oneTenthOzProducts = sortedProducts.filter((p) => p.weightOz == 0.1);
  const [weight, setWeight] = useState();
  let router = useRouter();

  function filterFunc() {
    let filterMenu = document.querySelector("select");
    setWeight(filterMenu.value);
  }

  if (router.asPath == "/guld/guldtackor") {
    return (
      <>
        <div className={styles.main}>
          <Layout />
          <SelectMenu />
          <ListProducts products={sortedProducts} />
        </div>
        <Footer />
      </>
    );
  } else if (router.asPath == "/silver/silvertackor") {
    return (
      <>
        <div className={styles.main}>
          <Layout />
          <SelectMenuSilver />
          <ListProducts products={sortedProducts} />
        </div>
        <Footer />
      </>
    );
  } else if (router.asPath == "/silver/silvermynt") {
    return (
      <>
        <div className={styles.main}>
          <Layout />
          <ListProducts products={sortedProducts} />
        </div>
        <Footer />
      </>
    );
  } else if (router.asPath == "/guld/guldmynt") {
    if (weight == 1) {
      return (
        <>
          <div className={styles.main}>
            <Layout />
            <select className={styles.filterMenu} onChange={filterFunc}>
              <option value={null}>Alla mynt</option>
              <option value={1}>1 oz</option>
              <option value={0.5}>0.5 oz </option>
              <option value={0.25}>0.25 oz </option>
              <option value={0.1}>0.10 oz </option>
            </select>
            <ListProducts products={oneOzProducts} />
          </div>
          <Footer />
        </>
      );
    } else if (weight == 0.5) {
      return (
        <>
          <div className={styles.main}>
            <Layout />
            <select className={styles.filterMenu} onChange={filterFunc}>
              <option value={null}>Alla mynt</option>
              <option value={1}>1 oz</option>
              <option value={0.5}>0.5 oz </option>
              <option value={0.25}>0.25 oz </option>
              <option value={0.1}>0.10 oz </option>
            </select>
            <ListProducts products={halfOzProducts} />
          </div>
          <Footer />
        </>
      );
    } else if (weight == 0.25) {
      return (
        <>
          <div className={styles.main}>
            <Layout />
            <select className={styles.filterMenu} onChange={filterFunc}>
              <option value={null}>Alla mynt</option>
              <option value={1}>1 oz</option>
              <option value={0.5}>0.5 oz </option>
              <option value={0.25}>0.25 oz </option>
              <option value={0.1}>0.10 oz </option>
            </select>
            <ListProducts products={quarterOzProducts} />
          </div>
          <Footer />
        </>
      );
    } else if (weight == 0.1) {
      return (
        <>
          <div className={styles.main}>
            <Layout />
            <select className={styles.filterMenu} onChange={filterFunc}>
              <option value={null}>Alla mynt</option>
              <option value={1}>1 oz</option>
              <option value={0.5}>0.5 oz </option>
              <option value={0.25}>0.25 oz </option>
              <option value={0.1}>0.10 oz </option>
            </select>
            <ListProducts products={oneTenthOzProducts} />
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <div className={styles.main}>
            <Layout />
            <select className={styles.filterMenu} onChange={filterFunc}>
              <option value={null}>Alla mynt</option>
              <option value={1}>1 oz</option>
              <option value={0.5}>0.5 oz </option>
              <option value={0.25}>0.25 oz </option>
              <option value={0.1}>0.10 oz </option>
            </select>
            <ListProducts products={sortedProducts} />
          </div>
          <Footer />
        </>
      );
    }
  }
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const products = await db
    .collection("prices")
    .find({
      product: context.params.product,
    })
    .sort({ date: -1 })
    .limit(200)
    .toArray();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
