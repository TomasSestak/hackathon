import { Box, Container, Stack, Text, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer = () => {
	return (
		<Box bg={'gray.50'} color={'gray.700'}>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Stack direction={'row'} spacing={6}>
					<NextLink href={'/'} passHref>
						<Link>Homepage</Link>
					</NextLink>
					<NextLink href={'/'} passHref>
						<Link>Uživatelský účet</Link>
					</NextLink>
				</Stack>
				<Text>© 2021 Chakra Templates. All rights reserved</Text>
			</Container>
		</Box>
	);
};

export default Footer;
