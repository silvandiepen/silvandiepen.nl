import gql from 'graphql-tag';
import { orderBy } from 'lodash';
import { format } from 'date-fns';
import articles from '../graphql/query/articles.gql';
const insert = (str, atIndex, value) => {
	if (typeof atIndex === 'object') {
		let newStr = str;
		atIndex.forEach((idx, index) => {
			newStr =
				newStr.substr(0, idx + value.length * index) +
				value +
				newStr.substr(idx + value.length * index);
		});
		return newStr;
	} else {
		return str.substr(0, atIndex) + value + str.substr(atIndex);
	}
};
const makeDate = (date) => new Date(insert(date, [4, 6], '-'));
const makeUri = (str) => str.substr(9, str.length).replace('.md', '');
export const state = () => ({
	articles: [],
	loaded: false
});
const stripTitle = (str) => {
	const lines = str.split('\n');
	delete lines[0];
	return lines.join('\n');
};
export const mutations = {
	SET_ARTICLES(state, articles) {
		state.articles = articles.map((article) => {
			const date = makeDate(article.name.substring(0, 8));
			return {
				name: article.name,
				uri: makeUri(article.name),
				title: article.object.text.split('\n')[0].replace('# ', ''),
				data: article.object.text,
				content: stripTitle(article.object.text),
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
		return orderBy(state.articles, 'date', 'asc');
		// return orderBy(state.articles, 'date', 'DESC');
	},
	getArticle: (state) => (uri) => {
		return state.articles.find((article) => article.uri === uri);
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
