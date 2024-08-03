import { mockProject } from '@/lib/sanity/mock';
import client from '@/lib/sanity/sanity';
import { IProject, IProjectWithoutBody } from '@/lib/sanity/types/project';

export default class ProjectService {
  async fetchAll(start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;
    const query = `*[_type=="project"][${start}...${finish}] {
      _id,
      title,
      description,
      slug,
      mainImage,
      skills[]->{
        _id,
        name,
        icon,
        darkModeIcon,
        link
      },
      startedAt,
      endedAt,
      link,
      post,
      _updatedAt
    }`;

    const projects = await client
      .fetch<IProjectWithoutBody[]>(query)
      .catch(() => {
        return [];
      });

    return projects;
  }

  async fetchBySlug(slug: string) {
    const query = `*[_type=="project" && slug.current=="${slug}"][0] {
      _id,
      title,
      description,
      slug,
      mainImage,
      skills[]->{
        _id,
        name,
        icon,
        darkModeIcon,
        link
      },
      startedAt,
      endedAt,
      link,
      post,
      body,
      _updatedAt
    }`;
    const project = await client
      .fetch<IProject>(query)
      .catch(() => mockProject);
    return project;
  }

  async fetchById(id: string) {
    const query = `*[_type=="project" && _id=="${id}"][0] {
      _id,
      title,
      description,
      slug,
      mainImage,
      skills[]->{
        _id,
        name,
        icon,
        darkModeIcon,
        link
      },
      startedAt,
      endedAt,
      link,
      post,
      _updatedAt,
      body,
    }`;

    const project = await client
      .fetch<IProject>(query)
      .catch(() => mockProject);

    return project;
  }

  async fetchByCategoryKey(key: string, start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;
    const query = `*[_type == "post" && references(*[_type == "category" && key == "${key}"]._id)][${start}...${finish}] {
      _id,
      title,
      description,
      slug,
      mainImage,
      skills[]->{
        _id,
        name,
        icon,
        darkModeIcon,
        link
      },
      startedAt,
      endedAt,
      link,
      post,
      _updatedAt
    }`;
    const posts = await client
      .fetch<IProjectWithoutBody[]>(query)
      .catch(() => []);

    return posts;
  }
}
