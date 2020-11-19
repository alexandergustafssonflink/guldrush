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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Work+Sans&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Jämför pris på guldtackor, guldmynt, silvertackor och silvermynt"
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
          <meta
            name="description"
            content="Jämför pris på guldtackor, guldmynt, silvertackor och silvermynt"
          />
        </Head>
        <Header />
      </>
    );
  } else if (router.asPath.includes("investera")) {
    return (
      <>
        <Head>
          <title>Guldrush.se | Investera i guld och silver</title>;
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Jämför pris på guldtackor, guldmynt, silvertackor och silvermynt"
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
          <meta
            name="description"
            content="Jämför pris på guldtackor, guldmynt, silvertackor och silvermynt"
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
        <meta
          name="description"
          content="Jämför pris på guldtackor, guldmynt, silvertackor och silvermynt"
        />
        <Header />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>
            Guldrush.se | Jämför pris på ädelmetaller som guld och silver
          </title>
          ;
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Jämför pris på guldtackor, guldmynt, silvertackor och silvermynt"
          />
        </Head>
        <Header />
      </>
    );
  }
};

export default Layout;
