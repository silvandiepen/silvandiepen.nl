import gql from 'graphql-tag';
import { orderBy } from 'lodash';
import { format } from 'date-fns';
import snippets from '../graphql/query/snippets.gql';
import {
	makeDate,
	makeUri,
	getTitle,
	getMetaData,
	getContent
} from '../helpers';
import { Article } from '@/types';

interface SnippetState {
	snippets: Article[];
	loaded: boolean;
}
export const state = (): SnippetState => ({
	snippets: [],
	loaded: false
});

interface InitialArticle {
	name: string;
	object: any;
}

export const mutations = {
	SET_SNIPPETS(state: SnippetState, snippets: InitialArticle[]) {
		state.snippets = snippets.map((snippet) => {
			const date = makeDate(snippet.name.substring(0, 8));
			return {
				name: snippet.name,
				uri: makeUri(snippet.name),
				title: getTitle(snippet.object.text),
				meta: getMetaData(snippet.object.text),
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

export const getters = {
	getSnippets(state: SnippetState) {
		return orderBy(state.snippets, 'date', 'asc');
		// return orderBy(state.snippets, 'date', 'DESC');
	},
	getSnippet: (state: SnippetState) => (uri: string) => {
		return state.snippets.find((snippet) => snippet.uri === uri);
	}
};

export const actions = {
	async loadSnippets({ state, commit }: any): Promise<void> {
		if (!state.loaded)
			await this.app.apolloProvider.defaultClient
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
