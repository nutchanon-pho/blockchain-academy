import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Footer from '../components/Footer';

export default class MyDocument extends Document {
  render() {
    /* eslint-disable react/react-in-jsx-scope, jsx-a11y/html-has-lang */
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Siam Blockchain Academy</title>
          <meta
            name="description"
            content="ศูนย์รวมแห่งการเรียนรู้ Blockchain และ Cryptocurrency"
          />
          <meta
            name="keywords"
            content="bitcoin blockchain cryptocurrency invesment บิทคอยน์ บล็อกเชน เงินดิจิตอล สกุลเงินดิจิตอล ethereum"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* PWA primary color */}
          <meta content="IE=edge" httpEquiv="" />
          <base href="/" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="#fff" name="theme-color" />
          <meta
            content="React Boilerplate Next"
            name="apple-mobile-web-app-title"
          />
          <meta content="black" name="apple-mobile-web-app-status-bar-style" />
          <meta content="#fff" name="msapplication-navbutton-color" />
          <link href="/static/manifest.json" rel="manifest" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/apple-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="static/android-chrome-192x192.png"
          />
          <link
            rel="mask-icon"
            href="static/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Prompt:300,400,500,700&amp;subset=thai" />
          <link
            rel="stylesheet"
            href="/static/global-stylesheet.css"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
          />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
