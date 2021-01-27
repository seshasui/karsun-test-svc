import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import { buildSchema } from 'type-graphql';
import { EmployeeResolver } from './employee/employee-resolver';
import express from 'express';
import compression from 'compression';
import cors from 'cors';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [EmployeeResolver],
  });

  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
  });

  const app = express();

  app.use('*', cors());
  app.use(compression());

  server.applyMiddleware({ app, path: '/graphql' });
  const httpServer = createServer(app);
  await httpServer.listen({ port: 3000 }, (): void =>
    console.log(`\n GraphQL is now running on http://localhost:3000/graphql`),
  );
}

bootstrap();
