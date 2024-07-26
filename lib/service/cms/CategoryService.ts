import { mockCategory, mockCategoryWithoutPosts } from '@/lib/sanity/mock';
import client from '@/lib/sanity/sanity';
import { ICategory, ICategoryWithoutPosts } from '@/lib/sanity/types/category';

export default class CategoryService {
  async fetchAll() {
    const query = `*[_type=="category"] {
      _id,
      title,
      slug,
    }`;
    const projects = await client
      .fetch<ICategoryWithoutPosts[]>(query)
      .catch(() => []);

    return projects;
  }
  async fetchAllWithPosts(start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;
    const query = `*[_type=="category"] {
      _id,
      title,
      slug,
      "posts": *[_type == "post" && references(^._id)][${start}...${finish}] {
        _id,
        title,
        intro,
        body,
        author->{
          name,
          slug
        },
        mainImage,
        "categories": *[_type == "category" && references(^.id)] {
          _id,
          title,
          description  
        },
        slug,
        publishedAt,
        _updatedAt
      }
    }`;
    const projects = await client.fetch<ICategory[]>(query).catch(() => []);

    return projects;
  }

  async fetchById(id: string) {
    const query = `*[_type=="category" && _id=="${id}"][0] {
      _id,
      title,
      slug,
    }`;

    const project = await client
      .fetch<ICategoryWithoutPosts>(query)
      .catch(() => mockCategoryWithoutPosts);

    return project;
  }

  async fetchByIdWithPosts(id: string, start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;
    const query = `*[_type=="category" && _id=="${id}"][0] {
      _id,
      title,
      slug,
      "posts": *[_type == "post" && references(^._id)][${start}...${finish}] {
        _id,
        title,
        intro,
        body,
        author->{
          name,
          slug
        },
        mainImage,
        "categories": *[_type == "category" && references(^.id)] {
          _id,
          title,
          description  
        },
        slug,
        publishedAt,
        _updatedAt
      }
    }`;

    const project = await client
      .fetch<ICategory>(query)
      .catch(() => mockCategory);

    return project;
  }

  async fetchBySlug(slug: string) {
    const query = `*[_type=="category" && slug.current=="${slug}"][0] {
      _id,
      title,
      slug,
    }`;

    const project = await client
      .fetch<ICategoryWithoutPosts>(query)
      .catch(() => mockCategoryWithoutPosts);

    return project;
  }

  async fetchBySlugWithPosts(slug: string, start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;

    const query = `*[_type=="category" && slug.current=="${slug}"][0] {
      _id,
      title,
      slug,
      "posts": *[_type == "post" && references(^._id)][${start}...${finish}] {
        _id,
        title,
        intro,
        body,
        author->{
          name,
          slug
        },
        mainImage,
        "categories": *[_type == "category" && references(^.id)] {
          _id,
          title,
          description  
        },
        slug,
        publishedAt,
        _updatedAt
      }
    }`;

    const project = await client
      .fetch<ICategory>(query)
      .catch(() => mockCategory);

    return project;
  }
}
