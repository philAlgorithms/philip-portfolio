import { ICurrency } from './currency';
import { IExhibitor } from './exhibitor';

export interface IExhibitorWork {
  id: number;
  exhibitor: IExhibitor;
  proposed_value: number;
  value_currency: ICurrency;
  year: string;
  photograph_url: string;
  title: string;
  description: string;
}

export interface IUploadExhibitorWork {
  proposed_value?: number;
  value_currency_id?: number;
  year?: string;
  photograph?: File;
  title?: string;
  description?: string;
}
