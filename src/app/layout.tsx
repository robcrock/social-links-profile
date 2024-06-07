import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Social links profile",
  description: "My social link-sharing profile.",
};

<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
  charSet="UTF-8"
></meta>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
