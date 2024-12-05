import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { theme } from "@/styles/theme"
import 'antd/dist/reset.css';


export const metadata: Metadata = {
  title: "Create Next & Redux App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AntdRegistry>
          <ConfigProvider theme={theme} >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
