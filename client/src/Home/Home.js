import React from "react";
import Row from "../Row/Row";
import Banner from "../Banner/Banner";
import requests from "../requests";

function Home() {
  return (
    <div>
      {/* <Nav /> */}
      <Banner fetchURL={requests.fetchTopRated} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default Home;
