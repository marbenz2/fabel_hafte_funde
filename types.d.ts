export type ArtikelApiResponse = {
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
