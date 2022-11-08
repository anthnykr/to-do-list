import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

function to_do_list() {
  return (
    <div className="">
      <Header />
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default to_do_list;
