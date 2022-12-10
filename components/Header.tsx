import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Header: NextPage = () => {
  const { data: session, status } = useSession();

  const isLoggedIn = !!session?.user?.email;
  const displayAuthButtons = status !== "loading";

  const login = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const logout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex justify-between items-center bg-blue-700 w-screen">
      <p className="ml-5 md:mr-28"></p>

      {!isLoggedIn && displayAuthButtons && (
        <p className="flex items-center text-white text-2xl h-[72px] px-6">To Do List</p>
      )}

      {isLoggedIn && displayAuthButtons && (
        <p className="flex items-center text-white text-2xl h-[72px] px-6">{session?.user?.name}'s To-Do List</p>
      )}

      {!isLoggedIn && displayAuthButtons && (
        <button
          onClick={login}
          className="cursor-pointer bg-white text-black px-12 py-3 hover:bg-gray-200 mr-5 my-3"
        >
          Login
        </button>
      )}

      {isLoggedIn && displayAuthButtons && (
        <button
          onClick={logout}
          className="cursor-pointer bg-white text-black px-12 py-3 hover:bg-gray-200 mr-5 my-3"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
