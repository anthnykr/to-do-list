import Head from "next/head";
import { NextPage } from "next";
import LogIn from "../components/LogIn";

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white w-screen h-screen flex items-center justify-center">
      <Head>
        <title>To Do List</title>
      </Head>

      <LogIn />
    </div>
  );
};

export default Home;
