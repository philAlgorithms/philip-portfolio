import { mockExperience } from '@/lib/sanity/mock';
import client from '@/lib/sanity/sanity';
import { IExperience } from '@/lib/sanity/types/experience';

export default class ExperienceService {
  async fetchAll(start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;
    const query = `*[_type=="experience"][${start}...${finish}] {
      _id,
      title,
      logo,
      darkModeLogo,
      startedAt,
      endedAt,
      activities,
      link,
      slug
    }`;

    const experiences = await client.fetch<IExperience[]>(query).catch(() => {
      return [];
    });

    return experiences;
  }
  async fetchForSlide(start?: number, finish?: number) {
    const query = `*[_type=="experience"][${start}...${finish}] {
      _id,
      title,
      logo,
      darkModeLogo,
      startedAt,
      endedAt,
      activities,
      link,
      slug
    }`;

    const experiences = await client
      .fetch<IExperience[]>(query, {})
      .catch(() => []);

    return experiences;
  }

  async fetchBySlug(slug: string) {
    const query = `*[_type=="experience" && slug.current=="${slug}"][0] {
      _id,
      title,
      logo,
      darkModeLogo,
      startedAt,
      endedAt,
      activities,
      link,
      slug
    }`;
    const experience = await client
      .fetch<IExperience>(query)
      .catch(() => mockExperience);
    return experience;
  }

  async fetchById(id: string) {
    const query = `*[_type=="experience" && _id=="${id}"][0] {
      _id,
      title,
      logo,
      darkModeLogo,
      startedAt,
      endedAt,
      activities,
      link,
      slug
    }`;

    const experience = await client
      .fetch<IExperience>(query)
      .catch(() => mockExperience);

    return experience;
  }
}
