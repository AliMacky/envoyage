"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

import { createBrowserClient } from "@supabase/ssr";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Particles from "@/components/ui/particles";

function createSupabaseBrowserClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
}

export default function Login() {
    const router = useRouter();

    const signIn = async (e) => {
        e.preventDefault();
        const email = e.currentTarget.elements[0].value;
        const password = e.currentTarget.elements[1].value;

        const supabase = createClient();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error("Sign in error:", error.message);
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <div className="flex flex-1 justify-center items-center h-full">
            <div className="max-w-md w-full border shadow-sm mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-zinc-900 z-20 relative">
                <h2 className="font-bold text-xl">Welcome back to Envoyage!</h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2">
                    Let's get exploring!
                </p>

                <form className="my-8" onSubmit={signIn}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            placeholder="johndoe@email.ai"
                            type="email"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="••••••••"
                            type="password"
                        />
                    </LabelInputContainer>

                    <button
                        className="relative group/btn bg-zinc-950 transition ease-in-out duration-300 hover:bg-neutral-700 rounded-lg active:scale-95 block w-full text-white h-10 font-medium"
                        type="submit"
                    >
                        Sign in &rarr;
                    </button>
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />
                </form>
                <div className="flex flex-col space-y-4"></div>
            </div>
        </div>
    );
}

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
