import sortPrices from "../../functions/sortPrices"; 

export default function GoldbarComparison({prices}) {
  let sortedTwentyGoldBars = sortPrices(prices[0].LibertySilver.twentyGramGold, prices[0].Guldcentralen.twentyGramGold, prices[0].Tavex.twentyGramGold);

  return (
  <div>
    <h1> 20 Gram guldtacka </h1>
    {sortedTwentyGoldBars.map((bar, i) => {
      return(
      <h3 key={i}>
      {bar.company + ": " + bar.price + "kr (" + bar.name + ")"}
      </h3>
      )
    })} 
    </div>
  );
}

