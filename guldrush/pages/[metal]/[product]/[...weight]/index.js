import sortPrices from "../../../../functions/sortPrices";
import { connectToDatabase } from "../../../../util/mongodb";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Layout from "../../../../components/Layout/Layout.js";

export default function listOfProductsByWeight({ products }) {
  let latestDate = products[0].date;
  // console.log(products);
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
