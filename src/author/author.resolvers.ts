import { Author, AuthorResolvers, Review } from "../__generated__/resolvers-types";
import _db from "../_db";

export const authorResolvers: AuthorResolvers = {
  async reviews(parent: Author): Promise<Array<Review>> {
    return _db.reviews.filter((e) => e.author_id === parent.id);
  },
};
