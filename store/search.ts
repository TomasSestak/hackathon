import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/api';

interface SearchResult {
	id: number;
	name: string;
	identification_number: string;
	category_id: number;
	address: string;
	website: string;
	phone: string;
	type: 'service' | 'category' | 'company';
	price?: number;
}

export const searchApi = createApi({
	baseQuery: axiosBaseQuery,
	reducerPath: 'searchApi',
	endpoints: (build) => ({
		getSearchResults: build.query<SearchResult[], string>({
			query: (text) => ({ url: `/search/${text}` }),
		}),
	}),
});

export const { useGetSearchResultsQuery } = searchApi;
