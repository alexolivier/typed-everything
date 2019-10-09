import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { onError } from "apollo-link-error";
import { InMemoryCache } from 'apollo-cache-inmemory';
import omitDeep from 'omit-deep'
import { RetryLink } from "apollo-link-retry";

const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables) {

    operation.variables = omitDeep(operation.variables,'__typename')
  }
  return forward(operation).map((data) => {
    return data;
  });
});

const httpLink = createHttpLink({
  uri: `http://localhost:8000/graphql`,
})

const retryLink = new RetryLink();



const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
});

const cache = new InMemoryCache();

const createClient = async () => {
  const link = ApolloLink.from([cleanTypeName, errorLink, retryLink, httpLink])
  const client = new ApolloClient({
    link,
    cache
  })
  return client
}

export default { createClient, cache }
