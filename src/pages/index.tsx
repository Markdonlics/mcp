import { Subscription } from "@/components";
import { Inter } from "next/font/google";
import Link from "next/link";
import { GrCheckmark } from "react-icons/gr";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center w-full text-center py-56 bg-gradient-to-b from-neutral-900 from-0% via-white via-40% to-neutral-900 to-100%">
         {/*  <h1 className="text-2xl text-gray-400 uppercase font-extrabold text-center">Site under development</h1>
          <Link className="link-light text-white text-lg drop-shadow-lg" href="/about"></Link>
          <Link className="link-light text-white drop-shadow-lg text-lg" href="/contact">visit other pages</Link> */}
      </div>
    </>
  );
}
