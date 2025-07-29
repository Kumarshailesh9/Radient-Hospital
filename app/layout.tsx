import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-context";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radiant Healthcare",
  description:
    "Radiant Healthcare is one of the best Ayushman-approved hospitals in Gorakhpur. Get cashless treatment under PM-JAY, RSBY, and UP State Health Scheme.",
  keywords:
    "Ayushman Bharat Hospital Gorakhpur, PM-JAY, Cashless treatment, Government healthcare schemes, Radiant Healthcare Hospital, Best hospital in Gorakhpur, Top multispecialty hospital in Gorakhpur",
  generator: "v0.dev",
  icons: {
    icon: "/logo.png",
  },
  other: {
    "facebook-domain-verification": "hkkmv4ivarc5gruntlf6urkbm0g0p0", 
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <Header />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
