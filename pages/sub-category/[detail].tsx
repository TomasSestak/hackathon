import { NextPage } from 'next';
import barbers from '@/data/barbers.json';
import { Box, Text, Heading, Image, Button, Flex, Container } from '@chakra-ui/react';
import slugify from 'slugify';
import api from '@/api';
import BlackButton from '@/components/buttons/BlackButton';
import { useRouter } from 'next/router';

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

interface ItemProps {
	href: string;
	label: string;
	border?: true;
}

const Item = ({ href, label, border }: ItemProps) => {
	return (
		<Flex justifyContent={'space-between'} borderColor={'#EDF2F7'} borderBottomWidth={border ? 1 : 0} pt={26.5} pb={21.5}>
			<Heading size={'sm'}>{label}</Heading>
			<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.6788 12L8.64111 7.04999L10.0802 5.63599L16.557 12L10.0802 18.364L8.64111 16.95L13.6788 12Z" fill="#E2E8F0" />
			</svg>
		</Flex>
	);
};

const SubCategoryDetail: NextPage<Props> = ({ detail }) => {
	const router = useRouter();

	return (
		<Container>
			<Flex flexDirection={'column'}>
				<Heading size={'2xl'} mb={3}>
					{detail}
				</Heading>
				<Item href={'/category/barber'} label={'Kadeřnictví'} border />
				<Item href={'/category/cosmetics'} label={'Kosmetika'} border />
				<Item href={'/category/pedikura'} label={'Pedikůra'} />
			</Flex>
			<Box bg={'gray.50'} borderColor={'gray.200'} shadow={'sm'} borderWidth={1} py={'37px'} px={'45px'} borderRadius={6}>
				<Heading size={'lg'} mb={1}>
					Nenašli jste co jste hledali?
				</Heading>
				<Text fontSize={'xs'} lineHeight={4}>
					Nahrajte poptávku práce a sežeňte podnik nebo specialistu přímo pro Vás
				</Text>
				<BlackButton onClick={() => router.push('/user/placed-demands')}>K vytvoření poptávky</BlackButton>
			</Box>
		</Container>
	);
};

export default SubCategoryDetail;
