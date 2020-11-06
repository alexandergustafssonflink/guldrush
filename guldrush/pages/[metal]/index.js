import sortPrices from "../../functions/sortPrices";
import { connectToDatabase } from "../../util/mongodb";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Link from "next/link";
import Layout from "../../components/Layout/Layout.js";
import ListProducts from "../../components/ListProducts/ListProducts.js";

export default function metal({ products }) {
  let router = useRouter();
  let latestDate = products[0].date;
  let latestProducts = products.filter((p) => {
    if (p.date == latestDate) {
      return p;
    }
  });
  let sortedProducts = latestProducts.sort(sortPrices);

  if (router.asPath == "/guld") {
    return (
      <>
        <Layout />
        <div className={styles.buttonSection}>
          <Link href="/guld/guldmynt">
            <button className={styles.metalButton}> Guldmynt </button>
          </Link>
          <Link href="/guld/guldtackor">
            <button className={styles.metalButton}> Guldtackor </button>
          </Link>
        </div>
        <ListProducts products={sortedProducts} />
      </>
    );
  } else if (router.asPath == "/silver") {
    return (
      <>
        <Layout />
        <div className={styles.buttonSection}>
          <Link href="/silver/silvermynt">
            <button className={styles.metalButton}> Silvermynt </button>
          </Link>
          <Link href="/silver/silvertackor">
            <button className={styles.metalButton}> Silvertackor </button>
          </Link>
        </div>
        <ListProducts products={sortedProducts} />
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  console.log(context.params.metal);

  const products = await db
    .collection("prices")
    .find({
      metal: context.params.metal,
    })
    .sort({ date: -1 })
    .limit(300)
    .toArray();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
