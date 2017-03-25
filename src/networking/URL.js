export const BASE_URL = 'https://newsapi.org/v1';
export const END_POINT_SOURCE = '/sources?';
export const END_POINT_ARTICLE = '/articles?';
export const SOURCE_ID = 'source=';
export const SORT_BY = '&sortBy=';
export const LAUNGUAGE = 'language=en';
export const API_KEY = '&apiKey=edba351311594c4aa0d0f3a0611d7720';

export const getSourcesUrl = () => (BASE_URL.concat(END_POINT_SOURCE, LAUNGUAGE));

export const getArticlesUrl = (sourceId, sortBy) => (
	BASE_URL.concat(END_POINT_ARTICLE, SOURCE_ID, sourceId, SORT_BY, sortBy, API_KEY));
