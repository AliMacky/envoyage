import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider"
import {cn} from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "envoyage",
    description: "space",
};

export default function RootLayout({children}) {

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    inter.className,
                    "flex flex-col h-screen w-screen antialiased"
                )}
            >
                <ThemeProvider
                    attribute="class"
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}