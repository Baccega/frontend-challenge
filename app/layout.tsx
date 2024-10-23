import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import { Navigation } from "./_components/navigation";

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
        className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen w-full grid-rows-[70px_1fr] overflow-x-hidden pb-10 font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <Providers>
          <Navigation />
          <main className="flex h-full w-screen justify-center bg-background pt-8">
            <div className="w-full max-w-[min(calc(100vw-2rem),var(--max-w))]">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
