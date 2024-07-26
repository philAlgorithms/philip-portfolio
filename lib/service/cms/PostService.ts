import { mockPost } from '@/lib/sanity/mock';
import client from '@/lib/sanity/sanity';
import { IPost } from '@/lib/sanity/types/post';

export default class PostService {
  async fetchByType(type: string) {
    const query = `*[_type=="${type}"][0] {
      _id,
      title,
      body,
      publishedAt,
      _updatedAt
    }`;

    const event = await client.fetch<IPost>(query).catch((e) => {
      return mockPost;
    });

    return event;
  }
}
