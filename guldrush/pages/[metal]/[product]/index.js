import sortPrices from "../../../functions/sortPrices";
import { connectToDatabase } from "../../../util/mongodb";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/Layout.js";
import styles from "./index.module.css";

export default function listOfProductsByProduct({ products }) {
  let latestDate = products[0].date;
  let latestProducts = products.filter((p) => {
    if (p.date == latestDate) {
      return p;
    }
  });

  // let sortedProducts = sortPrices(products[0], products[1], products[2])
  let sortedProducts = latestProducts.sort(sortPrices);
  return (
    <>
      <Layout />
      <div className={styles.main}>
        {sortedProducts.map((p, i) => {
          return (
            <a className={styles.link} href={p.url}>
              <div className={styles.product} key={i}>
                <div>
                  <h3>{p.name} </h3>
                  <p>{p.company}</p>
                </div>
                <div>
                  <h3 className={styles.priceTag}>{p.price + "kr"}</h3>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
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
