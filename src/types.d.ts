type PayloadImageSize = {
  url: string | null;
};

type PayloadImage = {
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
    thumbnail: PayloadImageSize;
    card: PayloadImageSize;
    inspector: PayloadImageSize;
  };
  createdAt: string;
  updatedAt: string;
  url: string;
  thumbnailURL: string | null;
};

type PayloadDocument = {
  id: string;
  image: PayloadImage;
  itemName: string;
  shortDescription: string;
  price?: number;
  condition: string;
  size?: string;
  detailedDescription: string;
  createdAt: string;
  updatedAt: string;
};

type PayloadPagination = {
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
  docs: PayloadDocument[];
} & PayloadPagination;

type InstagramPost = {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
  permalink: string;
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
