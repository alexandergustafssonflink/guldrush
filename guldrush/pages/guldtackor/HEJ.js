import sortPrices from "../../functions/sortPrices"; 
import { connectToDatabase } from '../../util/mongodb'


export default function fiftyGramGold (prices) {
  
  let sortedFiftyGramGoldBars = sortPrices(prices.prices[0].LibertySilver.fiftyGramGold, prices.prices[0].Guldcentralen.fiftyGramGold, prices.prices[0].Tavex.fiftyGramGold);
   return (
  <div>
    <h1> 50 Gram guldtackor </h1>
    {sortedFiftyGramGoldBars.map((bar, i) => {
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