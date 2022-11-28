import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header: NextPage = () => {
  const { data: session, status } = useSession();

  const isLoggedIn = !!session?.user?.email;
  const displayAuthButtons = status !== "loading";

  const login = () => {
    signIn("google");
  };

  const logout = () => {
    signOut({ callbackUrl: "http://localhost:3000" });
  };

  return (
    <div className="flex justify-between items-center bg-blue-700 w-screen">
      <p className="ml-5 md:mr-28"></p>
      <div className="flex h-[72px]">
        <Link href="/calendar" className="flex items-center text-white text-2xl h-full hover:bg-blue-900 px-6">Calendar</Link>
        <Link href="/" className="flex items-center text-white text-2xl h-full hover:bg-blue-900 px-6">To-Do List</Link>
      </div>

      {!isLoggedIn && displayAuthButtons && (
        <button
          onClick={login}
          className="cursor-pointer bg-white text-black px-12 py-3 hover:bg-gray-200 mr-5 my-3"
        >
          Login
        </button>
      )}

      {isLoggedIn && displayAuthButtons && (
        <button className="cursor-pointer bg-white text-black px-12 py-3 hover:bg-gray-200 mr-5 my-3">
          <div onClick={logout}>Logout</div>
        </button>
      )}
    </div>
  );
};

export default Header;
