import Head from "next/head";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Results from "../components/Results/Results";
import requests from "../utils/requests/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu clone</title>
      </Head>

      <Header />

      <Nav />

      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending?.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
