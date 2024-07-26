import { mockEvent } from '@/lib/sanity/mock';
import client from '@/lib/sanity/sanity';
import { IEvent } from '@/lib/sanity/types/event';

export default class EventService {
  async fetchAll(start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;
    const query = `*[_type=="event"][${start}...${finish}] {
      _id,
      title,
      introText,
      venue,
      registerUrl,
      slug,
      datetime,
      mainImages[],
      sponsors[]{
          name,
          logo,
          link
      },
      highlights[]{
        title,
        description
      },
      ctaTitle,
      ctaOverview,
      ctaButtonText,
      ctaButtonUrl,
      ctaImages[],
      publishedAt
    }`;

    const events = await client.fetch<IEvent[]>(query).catch(() => {
      return [];
    });

    return events;
  }
  async fetchForSlide(start?: number, finish?: number) {
    const query = `*[_type=="event"][${start}...${finish}] {
      _id,
      title,
      introText,
      venue,
      registerUrl,
      slug,
      datetime,
      mainImages[],
      sponsors[]{
          name,
          logo,
          link
      },
      highlights[]{
        title,
        description
      },
      ctaTitle,
      ctaOverview,
      ctaButtonText,
      ctaButtonUrl,
      ctaImages[],
      publishedAt
    }`;

    const events = await client.fetch<IEvent[]>(query, {}).catch(() => []);

    return events;
  }

  async fetchBySlug(slug: string) {
    const query = `*[_type=="event" && slug.current=="${slug}"][0] {
      _id,
      title,
      introText,
      overview,
      venue,
      registerUrl,
      slug,
      datetime,
      mainImages[],
      sponsors[]{
          name,
          logo,
          link
      },
      highlights[]{
        title,
        description
      },
      ctaTitle,
      ctaOverview,
      ctaButtonText,
      ctaButtonUrl,
      ctaImages[],
      publishedAt
    }`;
    const event = await client.fetch<IEvent>(query).catch(() => mockEvent);
    return event;
  }

  async fetchById(id: string) {
    const query = `*[_type=="event" && _id=="${id}"][0] {
      _id,
      title,
      introText,
      venue,
      registerUrl,
      slug,
      datetime,
      mainImages[],
      sponsors[]{
          name,
          logo,
          link
      },
      highlights[]{
        title,
        description
      },
      ctaTitle,
      ctaOverview,
      ctaButtonText,
      ctaButtonUrl,
      ctaImages[],
      publishedAt
    }`;

    const event = await client.fetch<IEvent>(query).catch(() => mockEvent);

    return event;
  }
}
