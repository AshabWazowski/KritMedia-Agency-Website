import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "KritMedia | Expert Full-Stack Development Agency",
  description: "Elevate your digital presence with expert engineering from KritMedia.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased font-sans flex flex-col min-h-screen text-foreground`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
