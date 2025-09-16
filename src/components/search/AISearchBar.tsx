// supabase/functions/ai-search/index.ts
import { serve } from "std/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

serve(async (req) => {
  try {
    const { query } = await req.json();

    if (!query || query.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Empty query" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Step 1: Generate AI answer
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini", // you can switch to gpt-4.1 for more accuracy
      messages: [
        { role: "system", content: "You are an expert assistant for Model United Nations (MUN), UN, and global diplomacy." },
        { role: "user", content: query },
      ],
      temperature: 0.3,
    });

    const answer =
      aiResponse.choices[0]?.message?.content || "No answer found.";

    // Step 2: Fetch relevant sources dynamically (Tavily Search API)
    const tavilyRes = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("TAVILY_API_KEY")}`,
      },
      body: JSON.stringify({ query, max_results: 3 }),
    });

    let sources: { title: string; url: string; snippet: string }[] = [];
    try {
      const tavilyData = await tavilyRes.json();
      sources =
        tavilyData.results?.map((r: any) => ({
          title: r.title,
          url: r.url,
          snippet: r.content,
        })) || [];
    } catch (err) {
      console.error("Failed to parse sources:", err);
    }

    // Step 3: Dynamic confidence scoring
    let confidence = 0.5;

    if (answer.length > 150) confidence += 0.2; // detailed answer
    if (sources.length >= 2) confidence += 0.2; // multiple sources
    if (/latest|current|2025|today/i.test(query)) confidence -= 0.1; // if it's time-sensitive

    if (confidence > 1) confidence = 1;
    if (confidence < 0) confidence = 0;

    // Final response
    return new Response(
      JSON.stringify({
        answer,
        sources,
        confidence,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("AI Search error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to process search" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
