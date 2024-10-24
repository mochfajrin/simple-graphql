import _db from "../_db";
import { QueryReviewArgs, Review } from "../__generated__/resolvers-types";

export const reviewQuery = {
  async reviews(_: {}): Promise<Array<Review>> {
    return _db.reviews;
  },
  async review(_: {}, args: QueryReviewArgs): Promise<Review> {
    return _db.reviews.find((e) => {
      e.id === args.id;
    });
  },
};
