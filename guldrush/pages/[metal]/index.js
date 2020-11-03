import sortPrices from "../../functions/sortPrices"; 
import { connectToDatabase } from '../../util/mongodb';
import { useRouter } from 'next/router';
import styles from "./index.module.css";
import Link from 'next/link';




export default function metal ({products}) {
  let router = useRouter()
  console.log(router.asPath);
  let latestDate = products[0].date; 
 let latestProducts = products.filter((p) => {
    if(p.date == latestDate) {
      return p; 
    }
  })

  // let sortedProducts = sortPrices(products[0], products[1], products[2])
let sortedProducts = latestProducts.sort(sortPrices);

    if (router.asPath == "/guld") {
         return (
     <div> 
    <Link href="/guld/guldtackor/5-gram"> 
        <button className={styles.metalButton}> 5 gram </button>
    </Link>

      <Link href="/guld/guldtackor/10-gram"> 
        <button className={styles.metalButton}> 10 gram </button>
    </Link>
      <Link href="/guld/guldtackor/20-gram"> 
        <button className={styles.metalButton}> 20 gram </button>
    </Link>
     <Link href="/guld/guldtackor/50-gram"> 
        <button className={styles.metalButton}> 50 gram </button>
    </Link>

    <Link href="/guld/guldtackor/100-gram"> 
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
    } else if (router.asPath == "/silver") {
return (
     <div> 
    <Link href="/silver/silvertackor/100-gram"> 
        <button className={styles.metalButton}> 100 gram </button>
    </Link>

      <Link href="/silver/silvertackor/500-gram"> 
        <button className={styles.metalButton}> 500 gram </button>
    </Link>
      <Link href="/silver/silvertackor/1000-gram"> 
        <button className={styles.metalButton}> 1000 gram </button>
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

  
     
    
  
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const products = await db
    .collection("prices")
    .find({
      "metal": context.params.metal
      })
    .sort({date: -1})
    .limit(200)
    .toArray()

  return {
     props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}