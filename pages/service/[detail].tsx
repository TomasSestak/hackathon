import { NextPage } from 'next';
import barbers from '@/data/barbers.json';
import { Box, Text, Heading } from '@chakra-ui/react';
import slugify from 'slugify';

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
	return {
		props: {
			detail,
		},
		revalidate: 60,
	};
};

const ServiceDetail: NextPage = () => {
	return (
		<>
			{barbers.map((item, index) => {
				return (
					<>
						<Box key={`service-detail-tile: ${index}`} borderWidth={1} borderRadius={6} borderColor={'gray.200'}>
							<Heading fontSize={'sm'}>{item.title}</Heading>
							<Text fontSize={'xs'} lineHeight={4}>
								{item.price}
							</Text>
						</Box>
					</>
				);
			})}
		</>
	);
};

export default ServiceDetail;
