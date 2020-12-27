import sortPrices from "../../functions/sortPrices";
// import { connectToDatabase } from "../../util/mongodb";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Link from "next/link";
import Layout from "../../components/Layout/Layout.js";
import Footer from "../../components/Footer/Footer.js";
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
        <div className={styles.main}>
          <Layout />
          <div className={styles.buttonSection}>
            <Link href="/guld/guldmynt">
              <button className={styles.metalButton}> Guldmynt </button>
            </Link>
            <Link href="/guld/guldtackor">
              <button className={styles.metalButton}> Guldtackor </button>
            </Link>
          </div>
          <div className={styles.productsHeader}>
            <h1> Alla produkter </h1>
          </div>
          <ListProducts products={sortedProducts} />
        </div>
        <Footer />
      </>
    );
  } else if (router.asPath == "/silver") {
    return (
      <>
        <div className={styles.main}>
          <Layout />
          <div className={styles.buttonSection}>
            <Link href="/silver/silvermynt">
              <button className={styles.metalButton}> Silvermynt </button>
            </Link>
            <Link href="/silver/silvertackor">
              <button className={styles.metalButton}> Silvertackor </button>
            </Link>
          </div>
          <div className={styles.productsHeader}>
            <h1> Alla produkter </h1>
          </div>
          <ListProducts products={sortedProducts} />
        </div>
        <Footer />
      </>
    );
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { metal: "guld" } }, { params: { metal: "silver" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://guldrush-api.herokuapp.com/${context.params.metal}`
  );
  const products = await res.json();

  return {
    props: {
      products: products,
    },
  };
}

// export async function getServerSideProps(context) {
//   const { db } = await connectToDatabase();

//   const products = await db
//     .collection("prices")
//     .find({
//       metal: context.params.metal,
//     })
//     .sort({ date: -1 })
//     .limit(300)
//     .toArray();

//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//     },
//   };
// }
