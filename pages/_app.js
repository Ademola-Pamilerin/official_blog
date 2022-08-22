import Head from "next/head";
import Layout from "../component/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Ademola Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <Component {...pageProps} />
        </Layout>)

}
export default MyApp