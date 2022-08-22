import Document, { Head, Html, NextScript, Main } from 'next/document'

class Docs extends Document {
    render() {
        return <>
            <Html>
                <Head >
                    <meta name='description' content='Welcome to the my Personal Blog about programming 😊😊😊😊😊😊' />
                </Head>
                <body>
                    <Main />
                    <div id="portal"></div>
                    <NextScript />
                </body>
            </Html>
        </>
    }
}
export default Docs