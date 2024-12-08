import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { theme } from "@/styles/theme"
import 'antd/dist/reset.css';
import { I18nProviderClient } from "../../../locales/clients";
import { ReactElement } from "react";


export const metadata: Metadata = {
  title: "Create Next & Redux App",
  description: "Generated by create next app",
};

export default async function RootLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <I18nProviderClient locale={locale}>
          <AntdRegistry>
            <ConfigProvider theme={theme} >
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </I18nProviderClient>
      </body>
    </html>
  );
}
