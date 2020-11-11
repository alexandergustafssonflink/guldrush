import Head from "next/head";
import Header from "../Header/Header.js";
import { useRouter } from "next/router";

const Layout = () => {
  let router = useRouter();
  if (router.asPath.includes("guldtackor")) {
    return (
      <>
        <Head>
          <title>Guldrush.se | Jämför pris på guldtackor</title>;
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
      </>
    );
  } else if (router.asPath.includes("guldmynt")) {
    return (
      <>
        <Head>
          <title>Guldrush.se | Jämför pris på guldmynt</title>;
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
      </>
    );
  } else if (router.asPath.includes("guld")) {
    return (
      <>
        <Head>
          <title>Guldrush.se | Jämför pris på guld</title>
          ;
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
      </>
    );
  } else if (router.asPath.includes("silver")) {
    return (
      <>
        <Head>
          <title>Guldrush.se | Jämför pris på silver</title>
          ;
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Guldrush.se | Jämför pris på guld</title>
          ;
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
      </>
    );
  }
};

export default Layout;
