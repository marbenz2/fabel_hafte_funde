import { ApiResponse } from "../../../src/types";

export async function onRequest(): Promise<Response> {
  try {
    const result = (await fetch(
      `https://fabelhafte-funde.netlify.app//api/posts`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    ).then((response) => response.json())) as ApiResponse;
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
