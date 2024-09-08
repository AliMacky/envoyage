"use server";

import {ChatAnthropic} from "@langchain/anthropic";
import {AnthropicVertex} from "@anthropic-ai/vertex-sdk";

const getAstronautHealth = async () => {
    // console.log("HERE 2")
    // const client = new AnthropicVertex({
    //     region: "us-east5",
    //     projectId: "ali-adi-lucas",
    //     temperature: 0
    // });
    // console.log("HERE 3")
    // const chat = new ChatAnthropic({
    //     apiKey: "foo",
    //     model: 'claude-3-5-sonnet@20240620',
    //     createClient: (() => client),
    // })
    // console.log("HERE 4");
    // const response = await chat.invoke([['human', 'Hello!']]);
    // console.log(response);
}

export default getAstronautHealth;