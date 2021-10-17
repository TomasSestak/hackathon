import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/api';

interface Demand {
	category: {
		id: number;
		parent_id: number;
		name: string;
	};
	id: number;
	user_id: number;
	category_id: number;
	content: string;
	budget: number;
	status: string;
	created_at: string;
}

interface PostDemand {
	user_id: number;
	content: string;
	category_id: number;
	budget: number;
}

export const demandsApi = createApi({
	baseQuery: axiosBaseQuery,
	reducerPath: 'demandsApi',
	tagTypes: ['Demands'],
	endpoints: (build) => ({
		getDemands: build.query<Demand[], void>({
			query: () => ({ url: `/demands` }),
			providesTags: ['Demands'],
		}),
		addDemand: build.mutation<any, PostDemand>({
			query: (data) => ({ url: `/demand`, data }),
			invalidatesTags: ['Demands'],
		}),
	}),
});

export const { useGetDemandsQuery, useAddDemandMutation } = demandsApi;
