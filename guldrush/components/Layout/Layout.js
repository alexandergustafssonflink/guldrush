import Head from "next/head";
import Header from "../Header/Header.js"

const Layout = () => {
  return (
      <>
      <Head>
        <title>Guldrush.se | Jämför priser på ädelemetaller</title>;
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&display=swap"
          rel="stylesheet"
        />
     
      </Head>
    <Header />
    </>
      
   
  );
};

export default Layout;