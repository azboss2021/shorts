import Buttons from "@/components/Buttons";
import { FaArrowRightLong, FaHeart } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="mx-auto h-full min-h-screen w-full max-w-[430px] text-white">
      <div className="flex h-6 w-full items-center justify-center gap-1 text-center text-[8px] font-bold text-white uppercase">
        <FaHeart /> Subscribe to <FaArrowRightLong /> Millionaire Start
        <FaHeart />
      </div>
      <div className="-mt-12 flex h-screen w-full flex-col items-center justify-center gap-8">
        <Buttons />
      </div>
    </main>
  );
}
