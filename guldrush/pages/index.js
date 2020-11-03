import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import sortPrices from "../functions/sortPrices"; 
import { useRouter } from 'next/router'; 
import Link from 'next/link';
import styles from "./index.module.css"; 
import Layout from "../components/Layout/Layout.js"; 

export default function Home({ prices }) {
  return (
    <>
    <Layout /> 
    
    <div className={styles.metalChoice}>
    <h1> Jämför priser på: </h1>
    <div className={styles.smallButtons}>
    <Link href="/guld/guldtackor"> 
        <button className={styles.metalButton}> Guldtackor </button>
    </Link>

     <Link href="/silver/silvertackor"> 
        <button className={styles.metalButton}> Silvertackor </button>
    </Link>

      <Link href="/guld/guldmynt"> 
        <button className={styles.metalButton}> Guldmynt </button>
    </Link>

     <Link href="/silver/silvermynt"> 
        <button className={styles.metalButton}> Silvermynt </button>
    </Link>
    </div>
    <div className={styles.bigButtons}>
    <Link href="/guld"> 
        <button className={styles.bigButton}> Alla guldprodukter </button>
    </Link>

     <Link href="/silver"> 
        <button className={styles.bigButton}> Alla silverprodukter </button>
    </Link>
    </div>

    </div>
    </>
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
