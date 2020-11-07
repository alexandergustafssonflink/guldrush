import sortPrices from "../../../functions/sortPrices";
import { connectToDatabase } from "../../../util/mongodb";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/Layout.js";
import styles from "./index.module.css";
import ListProducts from "../../../components/ListProducts/ListProducts.js";
import SelectMenu from "../../../components/SelectMenu/SelectMenu.js";
import SelectMenuSilver from "../../../components/SelectMenuSilver/SelectMenuSilver.js";

export default function listOfProductsByProduct({ products }) {
  let latestDate = products[0].date;
  let latestProducts = products.filter((p) => {
    if (p.date == latestDate) {
      return p;
    }
  });
  let sortedProducts = latestProducts.sort(sortPrices);
  let router = useRouter();

  if (router.asPath == "/guld/guldtackor") {
    return (
      <>
        <Layout />
        <SelectMenu />
        <ListProducts products={sortedProducts} />
      </>
    );
  } else if (router.asPath == "/silver/silvertackor") {
    return (
      <>
        <Layout />
        <SelectMenuSilver />
        <ListProducts products={sortedProducts} />
      </>
    );
  } else if (router.asPath == "/silver/silvermynt") {
    return (
      <>
        <Layout />
        <ListProducts products={sortedProducts} />
      </>
    );
  } else if (router.asPath == "/guld/guldmynt") {
    return (
      <>
        <Layout />
        <ListProducts products={sortedProducts} />
      </>
    );
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
