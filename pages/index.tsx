import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import Review from '@/components/Review';

const Index = () => {
	return (
		<>
			<Container maxW={'container.lg'}>
				<Review
					user={'Tomáš Šesták'}
					data={{
						text: 'And even if person thinks, that he or she is unlucky, our team is sure that this happens because of lack of comparison of firms/services by real clients, not bots. So we decided to create platform, where clients ca',
						created_at: '17. 10. 2021',
					}}
					reply={{
						text: 'And even if person thinks, that he or she is unlucky, our team is sure that this happens because of lack of comparison of firms/services by real clients, not bots. So we decided to create platform, where clients ca',
						created_at: '17. 10. 2021',
					}}
					status={true}
				/>
				<Grid gap={10} templateColumns="repeat(auto-fill, minmax(min(340px, 100%), 1fr))">
					<GridItem bg={'gray.400'} h={400} borderRadius={6}></GridItem>
					<GridItem bg={'gray.400'} h={400} borderRadius={6}></GridItem>
					<GridItem bg={'gray.400'} h={400} borderRadius={6}></GridItem>
					<GridItem bg={'gray.400'} h={400} borderRadius={6}></GridItem>
					<GridItem bg={'gray.400'} h={400} borderRadius={6}></GridItem>
					<GridItem bg={'gray.400'} h={400} borderRadius={6}></GridItem>
					<GridItem bg={'gray.400'} h={400} borderRadius={6}></GridItem>
				</Grid>
			</Container>
		</>
	);
};

export default Index;
