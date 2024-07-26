import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};
export interface IContactProps {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  message?: string;
  country?: ICountry;
}

export interface ICountry {
  id: number;
  name: string;
  iso: string;
  nicename: string;
  iso3: string | null;
  numcode: number | null;
  phonecode: number;
}
