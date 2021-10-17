import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/api';

export const demandsApi = createApi({
	baseQuery: axiosBaseQuery,
	reducerPath: 'demandsApi',
	tagTypes: ['Demands'],
	endpoints: (build) => ({
		getDemands: build.query<any, void>({
			query: () => ({ url: `/demands` }),
			providesTags: ['Demands'],
		}),
		addDemand: build.mutation<any, any>({
			query: (data) => ({ url: `/demand`, data }),
			invalidatesTags: ['Demands'],
		}),
	}),
});

export const { useGetDemandsQuery, useAddDemandMutation } = demandsApi;
