// Copyright © 2024 Lucas Chen, Ali Macky, and Aditya Kumar. All rights reserved.

// This file is part of the Archibald License project.
// This project is licensed under the Archibald License as of 08/22/24. This license applies to all code in this repository, including code from previous commits.

// Unauthorized use, copying, modification, merging, publication, distribution,
// sublicensing, or sale of this code, whether in whole or in part, is strictly prohibited
// without express written permission from the authors.

// Violations of this license will result in legal action, including but not limited to suing for damages.

import { NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { createClient } from "@/lib/supabase/server";

const protectedPaths = [
    "/dashboard",
    "/chat/*",
    "/journal",
    "/journal-history"
];

export async function middleware(request) {
    // update user's auth session
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const url = new URL(request.url, "http://localhost:3000");
    if (protectedPaths.includes(url.pathname) && !user) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return await updateSession(request);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};