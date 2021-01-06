import Head from "next/head";
import Header from "../Header/Header.js";
import { useRouter } from "next/router";
// import React from "react";
// import { initGA, logPageView } from '../utils/analytics'

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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-YK8J27DT1L"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YK8J27DT1L');
        `,
            }}
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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-YK8J27DT1L"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YK8J27DT1L');
        `,
            }}
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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-YK8J27DT1L"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YK8J27DT1L');
        `,
            }}
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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-YK8J27DT1L"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YK8J27DT1L');
        `,
            }}
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
          <meta
            name="description"
            content="Jämför pris på guldtackor, guldmynt, silvertackor och silvermynt"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-YK8J27DT1L"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YK8J27DT1L');
        `,
            }}
          />
        </Head>

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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-YK8J27DT1L"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YK8J27DT1L');
        `,
            }}
          />
        </Head>
        <Header />
      </>
    );
  }
};

export default Layout;
