import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export default async function handler(req:any,res:any){

  if(req.method !== "POST"){
    return res.status(405).json({
      error:"Method not allowed"
    });
  }

  try{

    const {audio,mimeType}=req.body;

    if(!audio){
      return res.status(400).json({
        error:"No audio received"
      });
    }

    const buffer=Buffer.from(audio,"base64");

    const ext =
      mimeType?.includes("mp4") ? "m4a" :
      mimeType?.includes("ogg") ? "ogg" :
      "webm";

    const file=new File(
      [buffer],
      `voice.${ext}`,
      {
        type:mimeType || "audio/webm"
      }
    );

    const result=await client.audio.transcriptions.create({
      file,
      model:"whisper-large-v3",
      language:"ar",
      temperature:0,
      response_format:"json",
      prompt:
      "استمع بدقة إلى العربية المصرية. اكتب الكلام كما نُطق وصحح الكلمات حسب السياق."
    });

    return res.status(200).json({
      text:result.text
    });

  }catch(e:any){

    console.error(e);

    return res.status(500).json({
      error:e.message || "Transcription error"
    });
  }
}
