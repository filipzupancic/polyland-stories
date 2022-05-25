
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.scss"
import Head from 'next/head'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
  <>
        <Head>
        <link key={1} rel="icon" href="/static/favicon/favicon.ico" />
        <link key={3} rel="icon" type="image/png" sizes="192x192"  href="/static/favicon/android-icon-192x192.png" />
        <link key={4} rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link key={5}  rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
        <link key={6} rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
  </>
  )
}