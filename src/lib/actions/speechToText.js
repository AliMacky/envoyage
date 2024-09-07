const speech = require('@google-cloud/speech')
import fs from 'fs'

export async function transcribeAudio(audioFile) {
    try {
        const speechClient = new speech.SpeechClient()
        const file = fs.readFileSync(audioFile)
        const audioBytes = file.toString('base64')

        const audio = {
            content: audioBytes,
        }
        const config = {
            encoding: 'LINEAR16',
            sampleRateHertz: 44100,
            languageCode: "en-US"
        }

        const text = await speechClient.recognize({audio, config})
        console.log(test)
        return text
    } catch (error) {
        console.log("ERROR: " + error)
    }
}