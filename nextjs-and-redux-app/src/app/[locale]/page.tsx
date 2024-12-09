'use client'
import ContactUs from "./componants/contactUs";
import LanguageSwitcher from "./componants/languageSwitcher";
import Link from "next/link";
import { theme } from 'antd';



export default function Home() {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <main style={{
      height: "100vh", paddingTop: 5,
      background: `linear-gradient(180deg, ${token.colorPrimary} 20%, ${token.colorPrimaryBg} 80%)`
    }}>

      <LanguageSwitcher />
      <Link href="/portal" style={{ color: token.colorWhite, textDecoration: "none", padding: 2 }} > Portal</Link>
      <Link href="/login" target="_blank" style={{ color: token.colorWhite, textDecoration: "none", padding: 2 }}> Account</Link>
      <ContactUs />

    </main>
  );
}
