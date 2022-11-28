import Head from "next/head";
import { NextPage } from "next";
import Header from "../components/Header";
import ToDoList from "../components/ToDoList";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>To Do List</title>
      </Head>

      <Header />
      <ToDoList />
    </div>
  );
};

export default Home;
