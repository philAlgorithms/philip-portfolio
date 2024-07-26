import { mockSkill } from '@/lib/sanity/mock';
import client from '@/lib/sanity/sanity';
import { ISkill } from '@/lib/sanity/types/skill';

export default class SkillService {
  async fetchAll(start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;
    const query = `*[_type=="skill"][${start}...${finish}] {
      _id,
      name,
      icon,
      darkModeIcon,
      link,
      slug
    }`;

    const skills = await client.fetch<ISkill[]>(query).catch(() => {
      return [];
    });

    return skills;
  }
  async fetchForSlide(start?: number, finish?: number) {
    const query = `*[_type=="skill"][${start}...${finish}] {
      _id,
      name,
      icon,
      darkModeIcon,
      link,
      slug
    }`;

    const skills = await client.fetch<ISkill[]>(query, {}).catch(() => []);

    return skills;
  }

  async fetchBySlug(slug: string) {
    const query = `*[_type=="skill" && slug.current=="${slug}"][0] {
      _id,
      name,
      icon,
      darkModeIcon,
      link,
      slug
    }`;
    const skill = await client.fetch<ISkill>(query).catch(() => mockSkill);
    return skill;
  }

  async fetchById(id: string) {
    const query = `*[_type=="skill" && _id=="${id}"][0] {
      _id,
      name,
      icon,
      darkModeIcon,
      link,
      slug
    }`;

    const skill = await client.fetch<ISkill>(query).catch(() => mockSkill);

    return skill;
  }
}
