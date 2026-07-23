import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export default async function handler(req:any,res:any){
  if(req.method!=="POST"){
    return res.status(405).json({error:"Method not allowed"});
  }

  try{
    const {text}=req.body;

    const speech = await client.audio.speech.create({
      model:"canopylabs/orpheus-arabic-saudi",
      voice:"abdullah",
      input:text,
    });

    const buffer = Buffer.from(await speech.arrayBuffer());

    res.setHeader("Content-Type","audio/mpeg");
    return res.status(200).send(buffer);

  }catch(e:any){
    console.error(e);
    return res.status(500).json({
      error:e.message
    });
  }
}
