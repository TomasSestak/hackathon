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
			<Flex flexDirection={'column'} height={206} py={31} px={35} shadow={'base'} justifyContent={'flex-end'} mb={10}>
				<Heading fontSize={'md'}>{detail}</Heading>
				<Text fontSize={'xs'}>od 100 Kč | od 10 zprovozovatelů</Text>
			</Flex>
			<Grid>
				{barbers.map((item, index) => {
					const { oneStar, twoStar, threeStar, fourStar, fiveStar } = item.reviewsDistribution;

					const rating = oneStar + 2 * twoStar + 3 * threeStar + 4 * fourStar + 5 * fiveStar;

					return (
						<GridItem key={`category-detail-tile: ${index}`}>
							<Link href={`/service/${slugify(item.title)}`}>
								<a>
									<Box borderRadius={6} px={4} pt={6} position={'relative'}>
										<Flex alignItems={'center'} borderBottomWidth={1} borderColor={'gray.200'} pb={6}>
											<Box borderColor={'gray.200'} borderWidth={1} shadow={'base'} width={79} height={79} mr={6} flexShrink={0} />
											<div>
												<Heading fontSize={'sm'}>{item.title}</Heading>
												<Flex alignItems={'flex-end'} ml={'auto'}>
													{Math.round((rating / item.reviewsCount) * 20 * 10) / 10} % 
													<Text fontSize={'xs'}>({item.reviewsCount} hodnocení)</Text>
												</Flex>
												<Text fontSize={'xs'} lineHeight={4}>
													{item.price}
												</Text>
												<Text mt={6} color={'gray.600'}>
													{item.address}
												</Text>
											</div>
										</Flex>
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
