import {transcribeAudio} from "@/lib/actions/speechToText";

export default function Home() {
    transcribeAudio('/test.m4a')
    return (
        <div></div>
    )
}