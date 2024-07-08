type Document = {
  id: string;
  itemName: string;
  description: string;
  price: number;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  createdAt: string;
  updatedAt: string;
};

type Pagination = {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
};

type ApiResponse = {
  docs: Document[];
} & Pagination;

export async function onRequest(): Promise<Response> {
  try {
    const result = (await fetch(
      `https://fabelhafte-funde-backend.vercel.app/api/posts`,
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
