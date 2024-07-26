import { ITestifier } from './testifier';

export interface ITestimonial {
  _id: string;
  testimony: string;
  testifier: ITestifier;
}
