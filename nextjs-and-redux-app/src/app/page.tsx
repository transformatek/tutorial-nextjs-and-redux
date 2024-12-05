'use client'
import { theme } from "@/styles/theme";
import ContactUs from "./componants/contactUs";



export default function Home() {
  return (
    <main style={{
      height: "100vh",
      background: `linear-gradient(180deg, ${theme.token.colorBg} 20%, ${theme.token.colorNeutral} 80%)`
    }} >
      <ContactUs />
    </main>
  );
}
