import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Providers from "./providers";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZenML Coding Challenge",
  description:
    "My solution for the 'ZenML Frontend Engineer - Coding Challenge'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen w-full grid-rows-[70px_1fr] items-center justify-items-center pb-10 font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <Providers>
          <header className="sticky top-0 z-40 flex h-full w-full items-center justify-center border-b border-gray-300 bg-white">
            <div className="w-full max-w-[var(--max-w)] px-4">
              <Image
                priority
                src="/logo.png"
                alt="ZenML logo"
                width={135}
                height={46}
              />
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
