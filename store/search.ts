import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/api';

export const searchApi = createApi({
	baseQuery: axiosBaseQuery,
	reducerPath: 'searchApi',
	endpoints: (build) => ({
		getSearchResults: build.query<any, string>({
			query: (text) => ({ url: `/api/search${text}` }),
		}),
	}),
});

export const { useGetSearchResultsQuery } = searchApi;
