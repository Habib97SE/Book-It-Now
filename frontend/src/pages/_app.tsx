import { AppProps } from "next/app";
import NavBar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

function Home({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home" />
                <link rel="icon" href="/favicon.avif" />
            </Head>
            <ClerkProvider>
                <NavBar />
                <Component {...pageProps} />
                <Footer />
            </ClerkProvider>
        </>
    );
}

export default Home;
