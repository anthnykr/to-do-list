import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";

const To_Do_List: NextPage = () => {
  const { data: session, status } = useSession();

  const isLoggedIn = !!session?.user?.email;
  const displayAuthButtons = status !== "loading";

  const logout = () => {
    signOut({ callbackUrl: "http://localhost:3000" });
  };

  return (
    <div className="bg-black text-white w-screen h-screen flex items-center justify-center">
      {isLoggedIn && displayAuthButtons && (
        <button className="cursor-pointer bg-white text-black px-20 py-5">
          <div onClick={logout}>Logout</div>
        </button>
      )}
    </div>
  );
};

export default To_Do_List;
