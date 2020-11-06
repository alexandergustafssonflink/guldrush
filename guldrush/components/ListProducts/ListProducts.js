import styles from "./ListProducts.module.css";

const ListProducts = ({ products }) => {
  return (
    <div className={styles.main}>
      <ul className={styles.productList}>
        {products.map((p, i) => {
          return (
            <a className={styles.link} href={p.url} key={i}>
              <li className={styles.product}>
                <div>
                  <h3>{p.name} </h3>
                  <p>{p.company}</p>
                </div>
                <div>
                  <h3 className={styles.priceTag}>{p.price + ":-"}</h3>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default ListProducts;
