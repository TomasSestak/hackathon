import { NextPage } from 'next';
import barbers from '@/data/barbers.json';
import { Box, Container, Grid, GridItem, Heading, Text, Image, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import slugify from 'slugify';

interface Props {
	detail: string;
}

interface Path {
	params: Props;
}

export const getStaticPaths = async (): Promise<{ paths: Path[]; fallback: true }> => {
	return {
		paths: [{ params: { detail: 'barbers' } }],
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

const CategoryDetail: NextPage<Props> = ({ detail }) => {
	return (
		<Container maxW={'xl'} py={10}>
			<Grid gap={6}>
				{barbers.map((item, index) => {
					const { oneStar, twoStar, threeStar, fourStar, fiveStar } = item.reviewsDistribution;

					const rating = oneStar + 2 * twoStar + 3 * threeStar + 4 * fourStar + 5 * fiveStar;

					return (
						<GridItem key={`category-detail-tile: ${index}`}>
							<Link href={`/service/${slugify(item.title)}`}>
								<a>
									<Box borderWidth={1} borderRadius={6} borderColor={'gray.200'} px={4} py={6} position={'relative'}>
										<Flex alignItems={'center'}>
											<Heading fontSize={'sm'}>{item.title}</Heading>
											<Flex alignItems={'flex-end'} ml={'auto'}>
												{Math.round((rating / item.reviewsCount) * 20 * 10) / 10} % 
												<Text fontSize={'xs'}>({item.reviewsCount} hodnocení)</Text>
											</Flex>
										</Flex>
										<Text fontSize={'xs'} lineHeight={4}>
											{item.price}
										</Text>
										<Text mt={6} color={'gray.600'}>
											{item.address}
										</Text>
									</Box>
								</a>
							</Link>
						</GridItem>
					);
				})}
			</Grid>
		</Container>
	);
};

export default CategoryDetail;
