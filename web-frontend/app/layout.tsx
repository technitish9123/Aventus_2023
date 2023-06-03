/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Header from "./components/navbar/index";
import "../tailwind.styles.css";
import Footer from "./components/footer/index";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="bg-hash-light text-hash-dark dark:bg-hash-dark dark:text-hash-light">
        <Script
          id="theme-toggle"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                })();
              `,
          }}
        />

        <Header />
        {children}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
