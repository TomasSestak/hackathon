import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Grid, GridItem } from '@chakra-ui/react';

const Index = () => {
	return (
		<>
			<Container maxW={'container.lg'}>
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
