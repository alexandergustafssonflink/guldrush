import sortPrices from "../../../../functions/sortPrices"; 
import { connectToDatabase } from '../../../../util/mongodb'
import { useRouter } from 'next/router';
import styles from "./index.module.css"; 




export default function listOfProductsByWeight ({products}) {
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
      "weight": parseInt(context.params.weight),
      "metal": context.params.metal,
      "product": context.params.product
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