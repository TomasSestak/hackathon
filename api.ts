import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

const api = axios.create({
	baseURL: 'http://10.12.201.165:3000/api/v1',
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

interface AxiosBaseQueryProps {
	url: string;
	method?: AxiosRequestConfig['method'];
	data?: AxiosRequestConfig['data'];
}

export const axiosBaseQuery: BaseQueryFn<AxiosBaseQueryProps, unknown, AxiosError['response']> = async ({ url, method = 'get', data }) => {
	try {
		const result = await api({ url, method, data });
		return { data: result.data };
	} catch (error: any) {
		console.log(error);
		return {
			error: error.response,
		};
	}
};
