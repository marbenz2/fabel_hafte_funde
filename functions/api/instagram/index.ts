import { InstagramApiResponse } from "../../../src/types";

type Env = {
  VITE_INSTAGRAM_LIMIT?: string;
  VITE_INSTAGRAM_LL_TOKEN?: string;
};

export async function onRequest({ env }: { env: Env }): Promise<Response> {
  try {
    if (!env.VITE_INSTAGRAM_LL_TOKEN) {
      throw new Error("VITE_INSTAGRAM_LL_TOKEN is not set");
    }
    if (!env.VITE_INSTAGRAM_LIMIT) {
      throw new Error("VITE_INSTAGRAM_LIMIT is not set");
    }

    const result = (await fetch(
      `https://graph.instagram.com/me/media?fields=username,id,media_type,media_url,caption,permalink&limit=${encodeURIComponent(
        env.VITE_INSTAGRAM_LIMIT
      )}&access_token=${encodeURIComponent(env.VITE_INSTAGRAM_LL_TOKEN)}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    ).then((response) => response.json())) as InstagramApiResponse;
    if ("message" in result) {
      throw new Error(result.message as string);
    }
    return new Response(JSON.stringify({ ...result }), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      return new Response(JSON.stringify({ errorMessage: err.message }), {
        status: 533,
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
    } else {
      // Behandlung für den Fall, dass err kein Error-Objekt ist
      return new Response(
        JSON.stringify({ errorMessage: "Unbekannter Fehler" }),
        {
          status: 500,
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        }
      );
    }
  }
}
