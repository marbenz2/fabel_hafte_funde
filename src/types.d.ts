type ImageSize = {
  url: string | null;
};

type Image = {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  sizes: {
    thumbnail: ImageSize;
    card: ImageSize;
  };
  createdAt: string;
  updatedAt: string;
  url: string;
  thumbnailURL: string | null;
};

type Document = {
  id: string;
  image: Image;
  itemName: string;
  description: string;
  price: number;
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

export type ApiResponse = {
  docs: Document[];
} & Pagination;
