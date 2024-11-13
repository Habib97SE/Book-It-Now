import { AppProps } from "next/app";
import NavBar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

function Home({ Component, pageProps }: AppProps) {
    return (
        <>
            <ClerkProvider>
                <NavBar />
                <Component {...pageProps} />
                <Footer />
            </ClerkProvider>
        </>
    );
}

export default Home;
