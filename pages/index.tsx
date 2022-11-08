import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { signIn, signOut, useSession } from "next-auth/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div>
        <div>
          <ArrowPathIcon className="h-20 w-20 animate-spin" />
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="bg-white text-black">
        <button onClick={() => signIn()} className="px-20 py-10">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex-col space-y-2 md:space-y-4">
      <div className="flex space-x-2 md:space-x-4">
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={30}
          height={30}
          className="rounded-full"
        />
        <p>Hi, {session.user.name}</p>
      </div>

      <div className="bg-white text-black">
        <button onClick={() => signOut()} className="px-20 py-10">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
