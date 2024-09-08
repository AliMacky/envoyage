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