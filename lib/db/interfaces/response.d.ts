import { Redirect } from 'next';

export interface EloquentLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface EloquentBaseResponse {
  message: string;
}

export interface EloquentExceptionResponse extends EloquentBaseResponse {
  line: number;
  file: string;
  exception: string;
  trace: EloquentExceptionTrace[];
}

export interface EloquentExceptionTrace {
  class: string;
  file: string;
  function: string;
  line: number;
  type: string;
}

export interface EloquentErrors {
  [key: string]: string[];
}
export interface EloquentErrorResponse extends EloquentBaseResponse {
  errors: EloquentErrors;
}

export interface EloquentMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: EloquentLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface EloquentLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}
export interface EloquentResponse<D = any> extends EloquentBaseResponse {
  data: D;
  links?: EloquentLinks;
  meta?: EloquentMeta;
}

export type CustomRedirect = Redirect & {
  shouldRedirect: boolean;
};
export type HiringRedirect = CustomRedirect & {};
export type ApplicationRedirect = CustomRedirect & {};
