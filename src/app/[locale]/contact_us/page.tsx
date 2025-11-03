import { Metadata } from "next";
import Contactus from "@/components/contactus/contacus";

export const metadata:Metadata = {
  title: "Contact Us",
  description: "Contact Us for NomowSoft",
}

export default function ContactUs() {
  return (
    <section>
      <Contactus />
    </section>
  );
}
