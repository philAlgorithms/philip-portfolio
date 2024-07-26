export interface ISanityDocument {
  id: number;
  key: string;
  sanity_id: string;
  sanity_type: string;
  sanity_slug: string | null;
}

export interface IUploadEventDetails {
  event_name?: string;
  datetime: string;
  venue: string;
}
