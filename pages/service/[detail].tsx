import { NextPage } from 'next';
import barbers from '@/data/barbers.json';
import { Box, Text, Heading, Image, Flex, Container } from '@chakra-ui/react';
import slugify from 'slugify';
import api from '@/api';
import CompanyRow from '@/components/CompanyRow';

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
	return (
		<Flex flexDirection={'column'}>
			<Box position={'relative'} height={324} overflow={'hidden'} display={'flex'} alignItems={'flex-end'}>
				<Image src={'/haircut.jpg'} objectFit={'cover'} position={'absolute'} objectPosition={'center'} />
				<Flex flexDirection={'column'} zIndex={2} bg={'rgba(0, 0, 0, .3)'} position={'relative'} width={'100%'} px={30} py={30}>
					<Heading size={'lg'} color={'white'}>
						{detail}
					</Heading>
					<Text lineHeight={5} fontSize={'sm'} color={'white'}>
						od 100 kč
					</Text>
				</Flex>
			</Box>
			<Container>
				<CompanyRow name={'Firm 1'} rating={90} price={100} />
				<CompanyRow name={'Firm 2'} rating={80} price={100} />
				<CompanyRow name={'Firm 3'} rating={70} price={100} />
			</Container>
			<Image src={'/map.jpg'} width={'100%'} />
		</Flex>
	);
};

export default ServiceDetail;
