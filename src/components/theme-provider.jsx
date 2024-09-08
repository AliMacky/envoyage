"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


export function ThemeProvider({ children, ...props }) {
    return <NextThemesProvider forcedTheme="dark" {...props}>{children}</NextThemesProvider>;
}