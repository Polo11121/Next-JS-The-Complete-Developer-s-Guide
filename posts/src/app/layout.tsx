import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { Providers } from "@/providers";
import { Header } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <body className={inter.className}>
      <div className="container mx-auto px-4 max-w-6xl">
        <Providers>
          <Header />
          {children}
        </Providers>
      </div>
    </body>
  </html>
);

export default RootLayout;
