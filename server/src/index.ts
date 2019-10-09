import { ApolloServer } from "apollo-server";
import * as path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import Container from "typedi";
import * as TypeORM from "typeorm";
import { createConnection } from "typeorm";
import PostResolver from "./resolvers/PostResolver";

TypeORM.useContainer(Container);

async function init() {

  // reads from ormconfig.json by default
  await createConnection();

  const schema = await buildSchema({
    resolvers: [PostResolver],
    emitSchemaFile: path.resolve(__dirname, "schema", "schema.gql"),
    container: ({ context }) => context.container,
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    playground: true,
    tracing: true,
    introspection: true,
    context: () => {
      const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      const container = Container.of(requestId);
      const context = { requestId, container };
      container.set("context", context);
      return context;
    }
  });

  // Start the server
  await server.listen(8000);
  console.log(`Server is running
  STARTED: ${new Date()}
  ENV: ${process.env.NODE_ENV}
  PORT: 8000`);
}

init();
