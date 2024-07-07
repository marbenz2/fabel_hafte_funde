type ArtikelApiResponse = {
  id: string;
  artikelBild: {
    id: string;
    alt: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
    createdAt: string;
    updatedAt: string;
    url: string;
    thumbnailURL: null | string;
  };
  "artikelName (max 25 Zeichen)": string;
  "artikelBeschreibung (max 100 Zeichen)": string;
  artikelPreis: number;
  createdAt: string;
  updatedAt: string;
};

export async function onRequest(): Promise<Response> {
  console.log("Request received");
  try {
    const result = (await fetch(`http://localhost:3000/api/item`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }).then((response) => response.json())) as ArtikelApiResponse;

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
        status: 500,
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
