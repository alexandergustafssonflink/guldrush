import sortPrices from "../../functions/sortPrices"; 
import { connectToDatabase } from '../../util/mongodb';
import { useRouter } from 'next/router';
import styles from "./index.module.css";
import Link from 'next/link';




export default function metal ({products}) {
  let latestDate = products[0].date; 
 let latestProducts = products.filter((p) => {
    if(p.date == latestDate) {
      return p; 
    }
  })

  // let sortedProducts = sortPrices(products[0], products[1], products[2])
let sortedProducts = latestProducts.sort(sortPrices);
   return (
   
     <div> 
    <Link href="/guldtackor/5-gram"> 
        <button className={styles.metalButton}> 5 gram </button>
    </Link>

      <Link href="/guldtackor/10-gram"> 
        <button className={styles.metalButton}> 10 gram </button>
    </Link>
      <Link href="/guldtackor/20-gram"> 
        <button className={styles.metalButton}> 20 gram </button>
    </Link>
     <Link href="/guldtackor/50-gram"> 
        <button className={styles.metalButton}> 50 gram </button>
    </Link>

    <Link href="/guldtackor/100-gram"> 
        <button className={styles.metalButton}> 100 gram </button>
    </Link>

     {sortedProducts.map((p, i) => {
        return (
          <div className={styles.product} key={i}>
          <a href={p.url}> <h3>{p.company + ": " + p.price + "kr"} </h3>  </a>
          <p>{ p.name }</p>
          </div>
        ) 
      })} 
      </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const products = await db
    .collection("prices")
    .find({
      "metal": context.params.metal
      })
    .sort({date: -1})
    .limit(20)
    .toArray()

  return {
     props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}