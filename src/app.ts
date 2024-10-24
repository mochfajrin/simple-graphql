import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs/promises";
import { resolvers } from "./schema.js";

const typeDefs = await fs.readFile("./src/schema.graphql", {
  encoding: "utf-8",
});

// server setup

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`Server ready at ${url}`);
