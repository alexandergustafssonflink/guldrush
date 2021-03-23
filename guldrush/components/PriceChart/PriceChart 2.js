import styles from "./PriceChart.module.css";

const PriceChart = (props) => {
  let prices = props.props.dailyPrices[0];
  console.log(prices);
  return (
    <>
      <div className={styles.priceChart}>
        <h3>
          {" "}
          Aktuellt guldpris (kr/gram): <span>{prices.goldPrice} </span>{" "}
        </h3>
        <h3>
          {" "}
          Aktuellt silverpris (kr/gram): <span> {prices.silverPrice}</span>{" "}
        </h3>
      </div>
    </>
  );
};

export default PriceChart;
