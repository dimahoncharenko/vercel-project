import React from "react";
import { AppProps } from "next/app";

import Container from "../components/Container";
import Header from "../components/Header";
import RoadMap from "../components/RoadMap";
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp
