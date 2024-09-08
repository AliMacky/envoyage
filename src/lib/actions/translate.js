"use server"

import translate from "translate";
export async function translateText(text, affiliation) {
   translate.engine = "google";
   translate.key = process.env.GOOGLE_TRANSLATE_KEY;
   let translatedMessages = {en: "", ru: "", zh: ""};
   if (affiliation === "USA") {
      // translatedMessages[0] =
      translatedMessages.ru = await translate(text, {to: "ru", from: "en"})
      translatedMessages.zh = await translate(text, {to: "zh", from: "en"})
      translatedMessages.en = text
   } else if (affiliation === "RUS") {
      translatedMessages.en = await translate(text, {to: "en", from: "ru"})
      translatedMessages.zh = await translate(text, {to: "zh", from: "ru"})
      translatedMessages.ru = text
   } else if (affiliation === "CHN") {
      translatedMessages.ru = await translate(text, {to: "ru", from: "zh"})
      translatedMessages.en = await translate(text, {to: "en", from: "zh"})
      translatedMessages.zh = text
   }
   return translatedMessages
}