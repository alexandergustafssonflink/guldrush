import sortPrices from "../../functions/sortPrices"; 
import { connectToDatabase } from '../../util/mongodb'


export default function hundredGramGold (prices) {
  
  let sortedHundredGramGoldBars = sortPrices(prices.prices[0].LibertySilver.hundredGramGold, prices.prices[0].Guldcentralen.hundredGramGold, prices.prices[0].Tavex.hundredGramGold);
   return (
  <div>
    <h1> 100 Gram guldtackor </h1>
    {sortedHundredGramGoldBars.map((bar, i) => {
      return(
      <h3 key={i}>
      {bar.company + ": " + bar.price + "kr (" + bar.name + ")"}
      </h3>
      )
    })} 
    </div>
  );
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