import Head from "next/head";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu clone</title>
      </Head>

      <Header />

      <Nav />
    </div>
  );
}
