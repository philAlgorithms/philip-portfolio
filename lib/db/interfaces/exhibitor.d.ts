import { IPhotographyGenre } from './photography-genre';
import { IUser } from './user';

export interface IExhibitor {
  id: number;
  user: IUser;
  photography_genre: IPhotographyGenre;
  alt_photography_genre: string | null;
  years_of_experience: number;
  phone_number: string;
  bio: string;
  brand_name: string;
  collection_title: string;
  collection_description: string;
  publicity_mode: string;
  use_works_for_promotions: boolean;
  works_used_by_external: boolean;
  works_count: number;
  created_at: string;
}

export interface IUploadExhibitor {
  photography_genre_id?: number;
  years_of_experience?: number;
  bio?: string;
  brand_name?: string;
  collection_title?: string;
  collection_description?: string;
  phone_number?: string;
  headshot?: File;
  agreed_to_terms?: boolean;
  works_used_by_external?: boolean;
  publicity_mode?: string;
  alt_publicity_mode?: string;
  use_for_promotions?: boolean;
  external_exhibitions?: string[];
  alt_photography_genre?: string;
}
