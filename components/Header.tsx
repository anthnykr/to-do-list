import Link from "next/link";

function Header() {
  return (
    <header className="bg-gray-50 text-black py-5 px-10 font-semibold">
      <div className="flex justify-between">
        <div></div>

        <div className="flex space-x-2 md:space-x-10">
          <Link href="/to_do_list">To Do List</Link>
          <Link href="/calendar">Calendar</Link>
        </div>

        <div>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
