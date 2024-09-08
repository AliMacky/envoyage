"use client";
import {createClient} from "@/lib/supabase/client";
import {useEffect, useState} from "react";
import {sendMessage} from "@/lib/actions/sendMessage";
import {ArrowRightIcon, Mic, MicOff} from "lucide-react";
import {motion} from "framer-motion";

export function Chat({chatId, history, uid, affiliation, role, users}) {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [originalMessages, setOriginalMessages] = useState([]);
    const supabase = createClient();
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [recognition, setRecognition] = useState(null);
    const delay = Math.floor(Math.random() * 1260) + 240;

    const startListening = () => {
        if (recognition) {
            recognition.start();
            setIsListening(true);
        }
    };

    const stopListening = () => {
        if (recognition) {
            recognition.stop();
            setIsListening(false);
        }
    };

    const handleInserts = (payload) => {
        setMessages(payload.new.messages);
    };

    const toggleShowOriginal = (index) => {
        if (originalMessages.includes(index)) {
            const newMessages = originalMessages.filter(function (listIndex) {
                return listIndex !== index;
            });
            setOriginalMessages(newMessages);
        } else {
            setOriginalMessages([...originalMessages, index]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputMessage("");
        setTranscript("");
        sendMessage(chatId, inputMessage, uid, messages, affiliation);
    };

    useEffect(() => {
        if (!("webkitSpeechRecognition" in window)) {
            alert("Your browser does not support speech recognition.");
            return;
        }

        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognitionInstance = new SpeechRecognition();

        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = true;
        recognitionInstance.lang = "en-US";

        recognitionInstance.onresult = (event) => {
            let interimTranscript = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    setTranscript(
                        (prev) => prev + event.results[i][0].transcript
                    );
                    setInputMessage(transcript);
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
        };

        recognitionInstance.onerror = (event) => {
            console.error("Speech recognition error detected: ", event.error);
        };

        setRecognition(recognitionInstance);

        setMessages(history);
        const channel = supabase
            .channel(`room_${chatId}`)
            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "chats",
                    filter: `id=eq.${chatId}`,
                },
                handleInserts
            )
            .subscribe();
        return () => {
            channel.unsubscribe();
        };
    }, []);
    useEffect(() => {
        if (transcript !== "") {
            setInputMessage(transcript);
        }
    }, [transcript]);

    return (
        <div className="h-full rounded-lg flex flex-col sm:flex-row flex-1">
            <div className="flex flex-1 pb-3 flex-col gap-2 h-full overflow-hidden">
                <div className="flex flex-col gap-4 flex-1 mt-6 md:mx-24 overflow-y-auto pr-4 mb-4">
                    {messages.map((msg, i) =>
                        msg.uid !== uid ? (
                            <div className="flex flex-col" key={i}>
                                <motion.div
                                    key={`${msg.id}-user-${i}`}
                                    initial={{opacity: 0.0, y: 40}}
                                    animate={{opacity: 1, y: 0}}
                                    delay={500}
                                    transition={{
                                        type: "spring",
                                        duration: 0.6,
                                    }}
                                    className="min-w-0 leading-relaxed break-words self-start px-4 py-1.5 bg-zinc-800 border-2 border-zinc-700 rounded-lg"
                                >
                                    {
                                        originalMessages.includes(i) ? msg.affiliation === "USA" ? msg.messages.en : msg.affiliation === "RUS" ? msg.messages.ru : msg.messages.zh : affiliation === "USA" ? msg.messages.en : affiliation === "RUS" ? msg.messages.ru : msg.messages.zh
                                    }
                                </motion.div>
                                <motion.div
                                    key={`${msg.id}-user-${i}`}
                                    initial={{opacity: 0.0, y: 40}}
                                    animate={{opacity: 1, y: 0}}
                                    delay={500}
                                    transition={{
                                        type: "spring",
                                        duration: 0.6,
                                    }}
                                    className="pl-1 pt-0.5 text-xs text-zinc-400"
                                >
                                    <button onClick={() => {
                                        toggleShowOriginal(i)
                                    }}
                                            className="cursor-pointer">{originalMessages.includes(i) ? "Show Translation" : "Show Original"}
                                    </button>
                                </motion.div>
                            </div>
                        ) : (
                            <motion.div
                                key={`${msg.id}-user-${i}`}
                                initial={{opacity: 0.0, y: 40}}
                                animate={{opacity: 1, y: 0}}
                                delay={500}
                                transition={{
                                    type: "spring",
                                    duration: 0.6,
                                }}
                                className="min-w-0 leading-relaxed break-words self-end px-4 py-1.5 bg-blue-950 border-2 border-blue-700/70 rounded-lg"
                            >
                                {affiliation === "USA"
                                    ? msg.messages.en
                                    : affiliation === "RUS"
                                        ? msg.messages.ru
                                        : msg.messages.zh}
                            </motion.div>
                        )
                    )}
                </div>
                <form
                    className="flex relative justify-center md:mx-24 mx-none"
                    onSubmit={handleSubmit}
                >
                    <div
                        onClick={isListening ? stopListening : startListening}
                        className="absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    >
                        {isListening ? <Mic/> : <MicOff/>}
                    </div>
                    <input
                        type="text"
                        placeholder="Type your message here"
                        className="rounded-lg w-full pl-14 py-4 bg-zinc-800 outline-2 outline-zinc-600 pr-36 resize-none overflow-hidden h-auto"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={inputMessage === ""}
                        className="absolute top-1/2 -right-1 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-400 rounded-lg text-black p-2 hover:bg-zinc-500 disabled:bg-zinc-600 transition ease-in-out duration-300"
                    >
                        <ArrowRightIcon size={20}/>
                    </button>
                </form>
            </div>
        </div>
    );
}
