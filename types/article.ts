interface ArticleDate {
	year: string;
	month: string;
	day: string;
}

export interface Article {
	name: string;
	uri: string;
	title: string;
	meta: IArticleMeta;
	data: string;
	content: string;
	date: Date;
	convertedDate: ArticleDate;
}
export interface IArticleMeta {
	[x: string]: string | string[];
}

export interface InitialArticle {
	name: string;
	object: any;
}
