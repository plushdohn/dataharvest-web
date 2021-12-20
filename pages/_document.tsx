import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Build custom queries for the League of Legends API; Understand the numbers behind keystones, champions, items, roles and more."
          />
          <meta
            name="keywords"
            content="League of Legends, lol, query, blocks, dataharvest, data, database, games, ranked, soloqueue"
          />
          <meta
            name="propeller"
            content="7c59b5ce5d663056cd043596548ebadf"
          ></meta>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
