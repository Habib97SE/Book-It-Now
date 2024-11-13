import { AppProps } from "next/app";
import NavBar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import "@/app/globals.css";
function Home({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default Home;
