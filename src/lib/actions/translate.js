"use server"

import translate from "translate";
export async function translateText(text, language) {
   translate.engine = "google";
   translate.key = process.env.GOOGLE_TRANSLATE_KEY;
   return await translate(text, language);
}