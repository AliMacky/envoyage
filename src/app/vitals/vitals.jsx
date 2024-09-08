"use client";

import Link from "next/link";
import {SquareActivity} from "lucide-react";
import {motion} from "framer-motion";

const AstronautVitals = ({subordinates}) => {
    return <div className="mt-4 space-y-4">
        {subordinates.map((subordinate) => (
            <motion.div
                initial={{opacity: 0.0, y: 40}}
                animate={{opacity: 1, y: 0}}
                delay={500}
                transition={{
                    type: "spring",
                    duration: 0.6,
                }}
                key={subordinate.uid}
                className="">
                <Link href={`/vitals/${subordinate.uid}`}>
                    <div
                        className="p-4 my-3 bg-zinc-800 border border-zinc-600 rounded-lg hover:bg-zinc-700 transition-colors flex gap-4 items-center">
                        <div>
                            <SquareActivity size={50} strokeWidth={1}/>
                        </div>
                        <div>
                            <div className="flex flex-row items-center">
                                <h3 className="text-lg font-semibold">Astronaut {subordinate.user_name} </h3>
                                <p className="pl-3 text-gray-500 truncate max-w-2xl">{subordinate.uid}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        ))}
    </div>;
};

export default AstronautVitals;