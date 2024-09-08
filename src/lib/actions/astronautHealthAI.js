"use server";

import {ChatVertexAI} from "@langchain/google-vertexai";
import {PromptTemplate} from "@langchain/core/prompts";
import {StructuredOutputParser} from "langchain/output_parsers";

const prompt = PromptTemplate.fromTemplate(
    `
  ## Instructions
  You are supposed to analyze the health of astronauts.
  You will be given a list of astronauts and their daily journal log.
  You will analyze the journal log and list out indicators of stress and indicators of good psychological health.
  Then, provide provide a score from 0 to 100 on the astronaut's stress level where 0 is high stress and 100 is low stress.
  In addition, provide justifications for the score.
  You are required to answer with a valid JSON object.
  If the journal log is unintelligible, then return a score of 50, with a note.
  You output must be formatted like this:

  ## Format
  <indicators>
  indicators of stress:
  - indicator 1
  - indicator 2
  - indicator 3
  indicators of good psychological health:
  - indicator 1
  - indicator 2
  - indicator 3
  </indicators>
  <answer>
  {{
    "score": "the astronaut's score from 0 to 100",
    "justifications": "your justifications for the score"
  }}
  </answer>

  ## Example output
  <indicators>
  indicators of stress:
  - anxious tone
  - negative thoughts
  - lack of motivation
  indicators of good psychological health:
  - positive thoughts
  - good mood
  - good sleep
  </indicators>
  <answer>
  {{
    "score": "70",
    "justifications": "The astronaut has been experiencing a lot of negative thoughts and lack of motivation. They also have been feeling anxious and down."
  }}
  </answer>

  Here is the journal log for the astronaut:
  {journalLog}
  `
);

const outputParser = StructuredOutputParser.fromNamesAndDescriptions({
    score: "the astronaut's score from 0 to 100",
    justifications: "justifications for the score",
});

const getAstronautHealth = async (journalLog) => {
    const chat = new ChatVertexAI({
        model: "gemini-1.5-flash",
        temperature: 0,
    });
    const response = await prompt.pipe(chat).invoke({
        journalLog
    });

    const answerMatch = response.content.match(/<answer>([\s\S]*?)<\/answer>/);
    if (answerMatch) {
        const jsonString = answerMatch[1].trim();
        return JSON.parse(jsonString);
    } else {
        throw new Error("Unable to extract answer from response");
    }
};

export default getAstronautHealth;
