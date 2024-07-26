import { mockHomePage } from '@/lib/sanity/mock';
import client from '@/lib/sanity/sanity';
import { IHomePage } from '@/lib/sanity/types/home-page';

export default class PageService {
  async fetchHomePage() {
    const query = `*[_type=="homePage"][0] {
      hero,
      about,
      _updatedAt
    }`;

    const event = await client.fetch<IHomePage>(query).catch((e) => {
      console.log(e);
      return mockHomePage;
    });

    return event;
  }
}
