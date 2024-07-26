export interface ISanityImage {
  asset: { _ref: string; _type: string };
  _key: string;
  _type: string;
}

export interface ISanityImageUpload {
  _key: string;
  _type: string;
  _upload: {
    createdAt: string;
    file: { name: string; type: string };
    previewImage: string;
    progress: number;
    updatedAt: string;
  };
}
