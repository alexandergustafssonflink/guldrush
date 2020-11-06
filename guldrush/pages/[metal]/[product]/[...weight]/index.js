import sortPrices from "../../../../functions/sortPrices";
import { connectToDatabase } from "../../../../util/mongodb";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Layout from "../../../../components/Layout/Layout.js";
import ListProducts from "../../../../components/ListProducts/ListProducts.js";

export default function listOfProductsByWeight({ products }) {
  let latestDate = products[0].date;
  let latestProducts = products.filter((p) => {
    if (p.date == latestDate) {
      return p;
    }
  });

  let sortedProducts = latestProducts.sort(sortPrices);
  return (
    <>
      <Layout />
      <ListProducts products={sortedProducts} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const products = await db
    .collection("prices")
    .find({
      weight: parseInt(context.params.weight),
      metal: context.params.metal,
      product: context.params.product,
    })
    .sort({ date: -1 })
    .limit(100)
    .toArray();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
