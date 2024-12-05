import { FaPizzaSlice } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-gradient-to-r from-orange-400 via-red-600 to-yellow-500 flex justify-end items-center p-5 ">
      <p className="mr-auto ml-5 text-slate-50 text-sm ">
        بهترین غذاها در سریع ترین زمان
      </p>
      <h1 className="text-right text-slate-50 text-xl">فستفودآنلاین</h1>
      <FaPizzaSlice className="mr-5 text-slate-50 size-7" />
    </div>
  );
}
export default Header;
