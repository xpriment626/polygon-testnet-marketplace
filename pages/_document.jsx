import Document, { Html, Head, Main, NextScript } from "next/document";

class Typography extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"
                        rel="preload"
                    />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Typography;
