import { Author, Query, QueryAuthorArgs } from "../__generated__/resolvers-types";
import _db from "../_db";

export const authorQuery = {
  async authors(_: {}): Promise<Array<Author>> {
    return _db.authors;
  },
  async author(_: {}, args: QueryAuthorArgs): Promise<Author> {
    return _db.authors.find((e) => e.id === args.id);
  },
};
