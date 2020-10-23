import sortPrices from "../../functions/sortPrices"; 
import { connectToDatabase } from '../../util/mongodb'
import { useRouter } from 'next/router'


export default function listOfGoldBars ({products}) {
  let latestDate = products[0].date; 
  let sortedProducts = sortPrices(products[0], products[1], products[2])
   return (
     <div> 
     {sortedProducts.map((p, i) => {
        if ( p.date == latestDate) {
        return (
          <div key={i}>
          <a href={p.url}> <h1>{p.company + ": " + p.price + "kr"} </h1>  </a>
          <h3>{ p.name }</h3>
          </div>
        )
        }
      })} 
      </div>
  );
}




export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const products = await db
    .collection("prices")
    .find({
      "weight": parseInt(context.params.weight),
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