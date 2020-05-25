import gql from 'graphql-tag';
import { orderBy } from 'lodash';
import { format } from 'date-fns';
import articles from '../graphql/query/articles.gql';
import { makeDate, makeUri, getContent } from '../helpers';

export const state = () => ({
	articles: [],
	loaded: false
});
export const mutations = {
	SET_ARTICLES(state, articles) {
		state.articles = articles.map((article) => {
			const date = makeDate(article.name.substring(0, 8));
			return {
				name: article.name,
				uri: makeUri(article.name),
				title: article.object.text.split('\n')[0].replace('# ', ''),
				data: article.object.text,
				content: getContent(article.object.text),
				date,
				convertedDate: {
					year: format(date, 'YY'),
					month: format(date, 'MM'),
					day: format(date, 'DD')
				}
			};
		});
		state.loaded = true;
	}
};
export const getters = {
	getArticles(state) {
		return orderBy(state.articles, 'date', 'desc');
		// return orderBy(state.articles, 'date', 'DESC');
	},
	getArticle: (state) => (uri) => {
		return state.articles.find((article) => article.uri === uri);
	},
	lastArticle(state) {
		return orderBy(state.articles, 'date', 'desc')[0];
	}
};
export const actions = {
	async loadArticles({ state, commit }) {
		if (!state.loaded)
			await this.app.apolloProvider.defaultClient
				.query({
					query: gql`
						${articles}
					`
				})
				.then((res) => {
					commit(
						'SET_ARTICLES',
						res.data.repositoryOwner.repository.object.entries
					);
				});
	}
};
