export interface IFilm {
	short: Short;
}

export interface Short {
	'@type': string;
	name: string;
	image: string;
	description: string;
	aggregateRating: AggregateRating;
	genre: string[];
	datePublished: string;
	duration: string;
	review: Review;
}

export interface AggregateRating {
	ratingValue: number;
}

export interface Review {
	dateCreated: string;
	name: string;
	reviewBody: string;
}
