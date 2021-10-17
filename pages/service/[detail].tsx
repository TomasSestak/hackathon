import { NextPage } from 'next';
import barbers from '@/data/barbers.json';
import { Box, Text, Heading, Image } from '@chakra-ui/react';
import slugify from 'slugify';
import api from '@/api';

interface Props {
	detail: string;
}

interface Path {
	params: Props;
}

export const getStaticPaths = async (): Promise<{ paths: Path[]; fallback: true }> => {
	const paths = barbers.map(({ title }) => {
		return {
			params: {
				detail: slugify(title),
			},
		};
	});
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params: { detail } }: { params: Props }): Promise<{ props: Props; revalidate: number }> => {
	//const { data } = await api.get(`/service/${detail}`);

	return {
		props: {
			detail,
			//data,
		},
		revalidate: 60,
	};
};

const ServiceDetail: NextPage<Props> = ({ detail }) => {
	return <></>;
};

export default ServiceDetail;
