import Head from "next/head";
import { NextPage } from "next";
import Header from "../components/Header";
import ToDoList from "../components/ToDoList";
import { useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session, status } = useSession()

  const isLoggedIn = !!session?.user?.email;
  const displayAuthButtons = status !== "loading";

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>To Do List</title>
      </Head>

      <Header />

      {isLoggedIn && displayAuthButtons && <ToDoList />}

    </div>
  );
};

export default Home;
