import sortPrices from "../../../functions/sortPrices"; 
import { connectToDatabase } from '../../../util/mongodb'
import { useRouter } from 'next/router';
// import styles from "./weight.module.css"; 




export default function listOfProductsByProduct ({products}) {
  let latestDate = products[0].date; 
  // console.log(products);
 let latestProducts = products.filter((p) => {
    if(p.date == latestDate) {
      return p; 
    }
  })

  // let sortedProducts = sortPrices(products[0], products[1], products[2])
let sortedProducts = latestProducts.sort(sortPrices);
   return (
     <div> 
     {sortedProducts.map((p, i) => {
        return (
          <div key={i}>
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
      "product": context.params.product,
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