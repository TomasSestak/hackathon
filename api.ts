import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

const api = axios.create({
	baseURL: '',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;

interface AxiosBaseQueryProps {
	url: string;
	method?: AxiosRequestConfig['method'];
	data?: AxiosRequestConfig['data'];
}

export const axiosBaseQuery =
	({
		baseUrl,
		prepareHeaders,
	}: {
		baseUrl?: string;
		prepareHeaders?: FetchBaseQueryArgs['prepareHeaders'];
	}): BaseQueryFn<
		{
			url: string;
			method: AxiosRequestConfig['method'];
			data?: AxiosRequestConfig['data'];
		},
		unknown,
		unknown
	> =>
	async ({ url, method, data }) => {
		try {
			const result = await api({ url: baseUrl ? baseUrl + url : url, method, data });
			return { data: result.data };
		} catch (axiosError) {
			let err = axiosError as AxiosError;
			return {
				error: { status: err.response?.status, data: err.response?.data },
			};
		}
	};
