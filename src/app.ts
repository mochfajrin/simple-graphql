import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

// server setup

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    game(_: any, args: { id: string }, context) {
      return db.games.find((e) => e.id === args.id);
    },
    author(_: any, args: { id: string }, context) {
      return db.authors.find((e) => e.id === args.id);
    },
    review(_: any, args: { id: string }, context) {
      return db.reviews.find((e) => e.id === args.id);
    },
  },
  Game: {
    reviews(parent: { id: string }) {
      return db.reviews.filter((e) => e.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent: { id: string }) {
      return db.reviews.filter((e) => e.author_id === parent.id);
    },
  },
  Review: {
    game(parent: { game_id: string }) {
      return db.games.find((e) => e.id === parent.game_id);
    },
    author(parent: { author_id: string }) {
      return db.authors.find((e) => e.id === parent.author_id);
    },
  },
  Mutation: {
    addGame(_, args, context) {
      const game = {
        id: Date.now().toString(),
        ...args.game,
      };
      db.games.push(game);
      return game;
    },
    deleteGame(_, args: { id: string }, contaxt) {
      db.games = db.games.filter((e) => e.id !== args.id);
      return db.games;
    },
    updateGame(
      _,
      args: { id: string; game: { title: string; platform: string[] } }
    ) {
      const game = db.games.map((e) => {
        if (e.id == args.id) {
          return { ...e, ...args.game };
        }
        return e;
      });
      return game.find((e) => e.id === args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`Server ready at port 3000`);
