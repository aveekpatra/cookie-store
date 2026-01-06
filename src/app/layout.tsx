import type { Metadata } from "next";
import { Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-great-vibes"
});

export const metadata: Metadata = {
    title: "Slaščičarstvo MM Clone",
    description: "A clone of the Slaščičarstvo MM website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${greatVibes.variable} font-sans`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
