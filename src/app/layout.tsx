import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "球探报告",
  description: "一个可直接静态部署的移动端篮球球员模板测试站。",
  metadataBase: new URL("https://onlyfriendsclub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "球探报告",
    description: "一个可直接静态部署的移动端篮球球员模板测试站。",
    url: "https://onlyfriendsclub.com",
    siteName: "球探报告",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
