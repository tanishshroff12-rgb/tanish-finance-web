import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = { title: "Tanish Finance" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-cream text-ink`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
