'use client'
import { theme } from "@/styles/theme";
import ContactUs from "./componants/contactUs";
import LanguageSwitcher from "./componants/languageSwitcher";
import Link from "next/link";



export default function Home() {
  return (
    <main style={{
      height: "100vh", paddingTop:5,
      background: `linear-gradient(180deg, ${theme.token.colorBg} 20%, ${theme.token.colorNeutral} 80%)`
    }} >
      <LanguageSwitcher/>
      <Link href="/portal" style={{color:theme.token.colorWhite, textDecoration: "none", padding:2 }} > Portal</Link>
      <Link href="/login" target="_blank" style={{color:theme.token.colorWhite , textDecoration: "none", padding:2 }}> Account</Link>
      <ContactUs />
    </main>
  );
}
