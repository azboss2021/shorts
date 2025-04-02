import { FaBell } from "react-icons/fa6";

const Buttons = () => {
  return (
    <button className="group flex cursor-pointer items-center rounded-xl border-b-4 border-gray-400 bg-white px-8 py-4 font-bold text-black uppercase transition-all duration-200 hover:-translate-y-1 hover:border-b-6 hover:border-red-900 hover:bg-red-600 hover:text-white hover:shadow-lg active:scale-[98%]">
      Subscribe
      <FaBell className="w-0 -translate-x-2 scale-0 text-amber-400 opacity-400 transition-all duration-200 group-hover:ml-2 group-hover:w-[14px] group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />
    </button>
  );
};
export default Buttons;
