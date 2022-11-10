import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Logo from "./Logo";

const LogIn: NextPage = () => {
  const { data: session, status } = useSession();

  const isLoggedIn = !!session?.user?.email;
  const displayAuthButtons = status !== "loading";

  const login = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/to_do_list" });
  };

  const logout = () => {
    signOut({ callbackUrl: "http://localhost:3000/index" });
  };

  return (
    <div className="flex flex-col w-[30vw] h-[50vh] items-center justify-center gap-y-4 border-8 p-10">
      <Logo />

      {!isLoggedIn && displayAuthButtons && (
        <button
          onClick={login}
          className="cursor-pointer bg-white text-black px-20 py-5"
        >
          Login
        </button>
      )}

      {isLoggedIn && displayAuthButtons && (
        <button className="cursor-pointer bg-white text-black px-20 py-5">
          <div onClick={logout}>Logout</div>
        </button>
      )}
    </div>
  );
};

export default LogIn;
