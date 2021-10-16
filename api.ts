import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query';

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

export const axiosBaseQuery: BaseQueryFn<AxiosBaseQueryProps, unknown, AxiosError> = async ({ url, method = 'get', data }) => {
	try {
		const result = await api({ url, method, data });
		return { data: result.data };
	} catch (error: any) {
		return {
			error: error.response,
		};
	}
};