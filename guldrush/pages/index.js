import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import sortPrices from "../functions/sortPrices"; 
import GoldbarComparison from "../components/GoldbarComparison"
import { useRouter } from 'next/router'; 
import Link from 'next/link'; 

export default function Home({ prices }) {
  return (
    <div>
    <Link href="/guld/20-gram"> 
      <a> 20! </a>
    </Link>

    <Link href="/guld/50-gram"> 
      <a> 50! </a>
    </Link>

     <Link href="/guld/100-gram"> 
      <a> 100! </a>
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
    .toArray()

  return {
     props: {
      prices: JSON.parse(JSON.stringify(prices))

    },
  };
}
