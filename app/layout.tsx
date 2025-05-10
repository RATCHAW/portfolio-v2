import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const geistSans = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ayoub Bendarsi | Web Developer",
    description:
        "A full-stack web developer passionate about crafting tech-driven solutions. I specialize in building responsive applications with React, Node.js, and TypeScript",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${geistSans.variable} antialiased`}>{children}</body>
        </html>
    );
}
