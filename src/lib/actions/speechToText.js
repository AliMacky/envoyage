"use server"

// const fs = require('fs');

export async function transcribeAudio() {


    // const filename = '/test.m4a';
    // const encoding = 'AAC'; // Use 'MP3', 'AAC' or 'OGG_OPUS' if .m4a format
    // const sampleRateHertz = 48000;
    // const languageCode = 'en-US';
    //
    // const config = {
    //     encoding: encoding,
    //     sampleRateHertz: sampleRateHertz, // Be sure this matches your audio file's sample rate
    //     languageCode: languageCode,
    //     enableAutomaticPunctuation: true,
    // };
    //
    // const audio = {
    //     content: fs.readFileSync(filename).toString('base64'),
    // };
    //
    // const request = {
    //     config: config,
    //     audio: audio,
    // };
    //
    // try {
    //     // Detects speech in the audio file
    //     const [response] = await client.recognize(request);
    //     const transcription = response.results
    //         .map(result => result.alternatives[0].transcript)
    //         .join('\n');
    //     console.log('Transcription: ', transcription);
    // } catch (err) {
    //     console.error('ERROR:', err);
    // }
}
