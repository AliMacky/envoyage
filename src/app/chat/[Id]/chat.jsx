"use client"
import {createClient} from "@/lib/supabase/client";
import {useEffect, useState} from "react";
import {sendMessage} from "@/lib/actions/sendMessage";
import {translateText} from "@/lib/actions/translate";

export function Chat({chatId, history, uid}) {
    const [messages, setMessages] = useState([])
    const [inputMessage, setInputMessage] = useState("");
    const supabase = createClient()

    console.log(translateText("Лукас крутой", "us"))

    const handleInserts = (payload) => {
        setMessages(payload.new.messages)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendMessage(chatId, inputMessage, uid, messages)
    }

    useEffect(() => {
        setMessages(history)
    }, []);

    useEffect(() => {
        const channel = supabase
            .channel(`room_${chatId}`)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'chats',
                    filter: `id=eq.${chatId}`
                },
                handleInserts
            )
            .subscribe()
        return () => {
            channel.unsubscribe()
        };
    }, [])

    return (
        <div>
            {messages.map((msg, index) => (
                <div key={index} className="flex flex-row">
                    <p className="font-bold text-white">{msg.uid}</p>: {msg.message}
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Message" value={inputMessage}
                       onChange={(e) => setInputMessage(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
