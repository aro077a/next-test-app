import React from "react";
import Head from "next/head";
import Chat from "/components/Chat";
import LeftNavbar from "/components/LeftNavbar";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <LeftNavbar />
      <Chat />
    </>
  );
};

export default Home;
