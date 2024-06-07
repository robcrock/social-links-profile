import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import localFont from "@next/font/local";

const inter = localFont({
  src: "../../public/assets/fonts/inter-variable.ttf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Social links profile",
  description: "My social link-sharing profile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
          charSet="UTF-8"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
