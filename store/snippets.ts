import gql from 'graphql-tag';
import { orderBy } from 'lodash';
import { format } from 'date-fns';
import snippets from '../graphql/query/snippets.gql';
import {
	makeDate,
	getUri,
	getTitle,
	parseMetaData,
	getContent
} from '../helpers';
import { Article, InitialArticle } from '@/types';

interface SnippetState {
	snippets: Article[];
	loaded: boolean;
}
export const state = (): SnippetState => ({
	snippets: [],
	loaded: false
});

export const mutations = {
	SET_SNIPPETS(state: SnippetState, snippets: InitialArticle[]): void {
		if (state.snippets)
			state.snippets = snippets.map((snippet) => {
				const date = makeDate(snippet.name.substring(0, 8));
				return {
					name: snippet.name,
					uri: getUri(snippet),
					title: getTitle(snippet.object.text),
					meta: parseMetaData(snippet.object.text),
					data: snippet.object.text,
					content: getContent(snippet.object.text),
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

interface Ifilters {
	tag: string;
	category: string;
}

export const getters = {
	getSnippets: (state: SnippetState) => (filter: Ifilters) => {
		if (!filter.category && !filter.tag)
			return orderBy(state.snippets, 'date', 'asc');
		else
			return orderBy(state.snippets, 'date', 'asc')
				.filter((article: Article): boolean =>
					article.meta.tags.includes(filter.tag)
				)
				.filter(
					(article: Article): boolean =>
						article.meta.category === filter.category
				);
	},
	getSnippet: (state: SnippetState) => (uri: string) => {
		return state.snippets.find((snippet) => snippet.uri === uri);
	}
};

export const actions = {
	async loadSnippets({ state, commit }: any): Promise<void> {
		if (!state.loaded)
			await (this as any).app.apolloProvider.defaultClient
				.query({
					query: gql`
						${snippets}
					`
				})
				.then((res: any) => {
					commit(
						'SET_SNIPPETS',
						res ? res.data.repositoryOwner.repository.object.entries : null
					);
				});
	}
};
