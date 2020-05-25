interface ArticleDate {
	year: string;
	month: string;
	day: string;
}

export interface Article {
	name: string;
	uri: string;
	title: string;
	meta: unknown;
	content: string;
	date: Date;
	convertedDate: ArticleDate;
}
