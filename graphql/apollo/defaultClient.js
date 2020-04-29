import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GRAPHQL_API } from '../../config';
import ApolloLogger from './ApolloLogger';

export default () => {
	const loggerLink =
		process.env.NODE_ENV !== 'production' ? [new ApolloLogger()] : [];

	const httpLink = new HttpLink({
		uri: GRAPHQL_API,
		credentials: 'same-origin'
	});

	const authLink = setContext((_, { headers }) => {
		const token = process.env.GITHUB_API_KEY
			? process.env.GITHUB_API_KEY
			: null;
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : null
			}
		};
	});

	return {
		link: ApolloLink.from([...loggerLink, authLink, httpLink]),
		cache: new InMemoryCache()
	};
};
