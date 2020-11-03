import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import sortPrices from "../functions/sortPrices"; 
import { useRouter } from 'next/router'; 
import Link from 'next/link';
import styles from "./index.module.css"; 

export default function Home({ prices }) {
  return (
    <div className={styles.metalChoice}>
    <Link href="/guldtackor"> 
        <button className={styles.metalButton}> Guldtackor </button>
    </Link>

     <Link href="/silvertackor"> 
        <button className={styles.metalButton}> Silvertackor </button>
    </Link>

      <Link href="/guldmynt"> 
        <button className={styles.metalButton}> Guldmynt </button>
    </Link>

     <Link href="/silvermynt"> 
        <button className={styles.metalButton}> Silvermynt </button>
    </Link>
    </div>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const prices = await db
    .collection("prices")
    .find({})
    .sort({"Date":-1})
    .limit(50)
    .toArray()

  return {
     props: {
      prices: JSON.parse(JSON.stringify(prices))

    },
  };
}
