import { mockBlogPost } from '@/lib/sanity/mock/blog-post';
import client from '@/lib/sanity/sanity';
import { IBlogPost, IBlogPostWithoutBody } from '@/lib/sanity/types/blog-post';
import { groq } from 'next-sanity';

export default class BlogPostService {
  async fetchAll(start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;
    const query = `*[_type == "post"][${start}...${finish}] {
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
    }`;
    const posts = await client.fetch<IBlogPost[]>(query).catch(() => []);

    return posts;
  }

  async fetchAllWithCategorySlug(
    slug: string,
    start?: number,
    finish?: number
  ) {
    start ??= 0;
    finish ??= 20;
    const query = `*[_type == "post" && references(*[_type == "category" && slug.current == "${slug}"]._id)][${start}...${finish}] {
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
    }`;
    const posts = await client.fetch<IBlogPost[]>(query).catch(() => []);

    return posts;
  }
  async fetchAllWithoutBody(start?: number, finish?: number) {
    start ??= 0;
    finish ??= 20;
    const query = groq`*[_type == "post"][${start}...${finish}] {
      _id,
      title,
      intro,
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
      publishedAt
    }`;
    const posts = await client.fetch<IBlogPostWithoutBody[]>(query);

    return posts;
  }

  async fetchBySlug(slug: string) {
    const query = `*[_type=="post" && slug.current=="${slug}"][0] {
      _id,
      title,
      author->{
        name,
        slug
      },
      body,
      intro,
      mainImage,
      "categories": *[_type == "category" && references(^.id)] {
        _id,
        title,
        description  
      },
      publishedAt,
      _updatedAt
    }`;
    const posts = await client
      .fetch<IBlogPost>(query)
      .catch(() => mockBlogPost);

    return posts;
  }

  async fetchById(id: string) {
    const query = `*[_type=="post" && _id=="${id}"][0] {
      _id,
      title,
      publishedAt,
      author,
      bio,
      mainImage,
      "categories": *[_type == "category" && references(^.id)] {
        _id,
        title,
        description  
      },
      _updatedAt
    }`;
    const posts = await client
      .fetch<IBlogPost>(query)
      .catch(() => mockBlogPost);

    return posts;
  }
}
