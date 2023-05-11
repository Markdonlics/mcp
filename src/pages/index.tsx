import { Inter } from "next/font/google";
import HeroImage from "@/components/HeroImage";
import ServiceCard from "@/components/ServiceCard";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <HeroImage />
      <ServiceCard />
    </>
  );
}
