import { IEventHighlight } from './event-highlight';
import { IEventSponsor } from './event-sponsor';
import { ISlug } from './slug';

export interface IEvent {
  _id: string;
  title: string;
  introText: string;
  overview: unknown;
  registerUrl: string;
  mainImages: unknown[];
  slug: ISlug;
  venue: string;
  datetime: string;
  highlights: IEventHighlight[];
  sponsors: IEventSponsor[];
  ctaTitle: string;
  ctaOverview: unknown;
  ctaImages: unknown[];
  ctaButtonText: string;
  ctaButtonUrl: string;
}
