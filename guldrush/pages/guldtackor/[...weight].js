import sortPrices from "../../functions/sortPrices"; 
import { connectToDatabase } from '../../util/mongodb'
import { useRouter } from 'next/router'



export default function listOfGoldBars ({products}) {
  let latestDate = products[0].date; 
   return (
     <div> 
     {products.map((p, i) => {
        if ( p.date == latestDate) {
        return (
          <div key={i}>
          <a href={p.url}> <h1>{p.company + ": " + p.price + " (" + p.name + ")" + "***"+ p.date + "***"} </h1></a>
          </div>
        )
        }
      })} 
      </div>
  );
}




export async function getServerSideProps(context) {
  console.log(context);
  const { db } = await connectToDatabase();

  const products = await db
    .collection("prices")
    .find({
      "weight": parseInt(context.params.weight)})
    .sort({date: -1})
    .limit(20)
    .toArray()

  return {
     props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}


