import Head from "next/head";
import { NextPage } from "next";
import Header from "../components/Header";
import Calendar from "../components/Calendar";

const calendar: NextPage = () => {
  return (
    <div>
      <Head>
        <title>To Do List</title>
      </Head>

      <Header />
      <Calendar />
    </div>
  );
};

export default calendar;