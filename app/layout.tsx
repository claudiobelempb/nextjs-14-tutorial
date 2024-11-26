import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../components/Navbar";

const Inter = localFont({
    src: "./assets/fonts/Inter-VariableFont_opsz,wght.ttf",
    preload: true,
    variable: "--font-inter",
    weight: "100 500 400 600 700 900",
});

const Inconsolata = localFont({
    src: "./assets/fonts/Inconsolata-VariableFont_wdth,wght.ttf",
    preload: true,
    variable: "--font-inconsolata",
    weight: "100 500 400 600 700 900",
});

export const metadata: Metadata = {
    title: "Next.js Project",
    description: "A Next.js project with TypeScript and TailwindCSS",
    keywords: "Next.js, Typescript, TailwindCSS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${Inter.variable} ${Inconsolata.variable} antialiased `}
            >
                <Navbar />
                <main className="max-w-3xl mx-auto py-10">{children}</main>
            </body>
        </html>
    );
}