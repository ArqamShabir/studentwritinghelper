import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Loader from "@/components/Loader";   
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); 
    
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return(<>
        <Head>
  <title>Online Calculators - GPA, Scientific, and More | Student Writing Helper</title>
  <meta 
    name="description" 
    content="Access free online calculators, including GPA calculators, scientific calculators, and more. Simple, accurate, and fast calculations for students." 
  />
  <meta property="og:title" content="Online Calculators - GPA, Scientific, and More" />
  <meta property="og:description" content="Get accurate GPA and scientific calculations with our free online tools. Fast, reliable, and easy to use!" />
  <meta property="og:image" content="/logo.png" />
  <meta property="og:url" content="https://studentwritinghelper.com" />
  <link rel="icon" href="/favicon.ico" sizes="any"/>
</Head>
      <Header/>
      {loading && <Loader />}
      <Component {...pageProps} />
      <Footer/>
  </>)
  
  ;
}
