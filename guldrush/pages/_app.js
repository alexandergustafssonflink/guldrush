import styles from "../styles/styles.css";

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
