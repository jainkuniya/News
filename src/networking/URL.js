import { API_KEY } from '../API';

export const BASE_URL = 'https://newsapi.org/v1';
export const END_POINT_SOURCE = '/sources?';
export const END_POINT_ARTICLE = '/articles?';
export const SOURCE_ID = 'source=';
export const SORT_BY = '&sortBy=';
export const LAUNGUAGE = 'language=en';
export const API_KEY_TEXT = '&apiKey=';

export const getSourcesUrl = () => (BASE_URL.concat(END_POINT_SOURCE, LAUNGUAGE));

export const getArticlesUrl = (sourceId, sortBy) => (
	BASE_URL.concat(
		END_POINT_ARTICLE, 
		SOURCE_ID, 
		sourceId, 
		SORT_BY, 
		sortBy,
		API_KEY_TEXT, 
		API_KEY,
		));
