import sortPrices from "../../../../functions/sortPrices";
// import { connectToDatabase } from "../../../../util/mongodb";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Layout from "../../../../components/Layout/Layout.js";
import ListProducts from "../../../../components/ListProducts/ListProducts.js";
import SelectMenu from "../../../../components/SelectMenu/SelectMenu.js";
import SelectMenuSilver from "../../../../components/SelectMenuSilver/SelectMenuSilver.js";
import Footer from "../../../../components/Footer/Footer.js";

export default function listOfProductsByWeight({ products }) {
  let latestDate = products[0].date;
  let router = useRouter();
  let latestProducts = products.filter((p) => {
    if (p.date == latestDate) {
      return p;
    }
  });

  if (router.asPath.includes("/guld/guldtackor")) {
    let sortedProducts = latestProducts.sort(sortPrices);
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
  } else if (router.asPath.includes("/silver/silvertackor")) {
    let sortedProducts = latestProducts.sort(sortPrices);
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
  } else if (router.asPath.includes("/guld/guldmynt")) {
    let sortedProducts = latestProducts.sort(sortPrices);
    return (
      <>
        <div className={styles.main}>
          <Layout />
          <ListProducts products={sortedProducts} />
        </div>
        <Footer />
      </>
    );
  }
}

// export async function getStaticPaths(context) {
//   console.log(context);
//   return {
//     paths: [
//       {
//         params: {
//           product: "guldtackor",
//           metal: "guld",
//           weight: ["50", "100"],
//         },
//       },
//       { params: { product: "guldmynt", metal: "guld", weight: "50" } },
//       { params: { product: "silvertackor", metal: "silver", weight: "50" } },
//       { params: { product: "silvermynt", metal: "silver", weight: "50" } },
//     ],
//     fallback: false,
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           product: "guldtackor",
//           metal: "guld",
//           weight: ["1", "5", "10"],
//         },
//       },
//       {
//         params: {
//           product: "guldmynt",
//           metal: "guld",
//           weight: ["1", "5", "10"],
//         },
//       },
//       {
//         params: {
//           product: "silvertackor",
//           metal: "silver",
//           weight: ["1", "5", "10"],
//         },
//       },
//       {
//         params: {
//           product: "silvermynt",
//           metal: "silver",
//           weight: ["1", "5", "10"],
//         },
//       },
//     ],
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `https://guldrush-api.herokuapp.com/${context.params.metal}/${context.params.product}/${context.params.weight}`
//   );
//   const products = await res.json();

//   return {
//     props: {
//       products: products,
//     },
//   };
// }

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://guldrush-api.herokuapp.com/${context.params.metal}/${context.params.product}/${context.params.weight}`
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
//       weight: parseInt(context.params.weight),
//       metal: context.params.metal,
//       product: context.params.product,
//     })
//     .sort({ date: -1 })
//     .limit(100)
//     .toArray();

//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//     },
//   };
// }
