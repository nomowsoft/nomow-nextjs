import HomePage from "@/components/home/home";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "NomowSoft",
  description: "NomowSoft",
}

export default function Home() {
  return (
    <section className="">
      <HomePage />
    </section>
  );
}
