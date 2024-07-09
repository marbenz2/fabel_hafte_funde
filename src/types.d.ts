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
    inspector: ImageSize;
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

export type PayloadApiResponse = {
  docs: Document[];
} & Pagination;

type InstagramPost = {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
};

type InstagramPagingCursors = {
  before: string;
  after: string;
};

type InstagramPaging = {
  cursors: InstagramPagingCursors;
};

export type InstagramApiResponse = {
  data: InstagramPost[];
  paging: InstagramPaging;
};
