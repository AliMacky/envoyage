"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function NumberTicker({
    value,
    direction = "up",
    delay = 0,
    className,
}) {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 80,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(direction === "down" ? 0 : value);
            }, delay * 1000);
        }
    }, [motionValue, isInView, delay, value, direction]);

    useEffect(() => {
        const unsubscribe = springValue.onChange((latest) => {
            if (ref.current) {
                ref.current.textContent = new Intl.NumberFormat("en-US").format(
                    Number(latest.toFixed(0))
                );
            }
        });

        return () => unsubscribe();
    }, [springValue]);

    return React.createElement("span", {
        className: cn("inline-block tabular-nums tracking-wider", className),
        ref: ref,
    });
}
