import NextLink from 'next/link';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

interface Props {
	name: string;
	price: number;
	href: string;
}

const ServiceRow = ({ name, price, href }: Props) => {
	return (
		<NextLink href={href}>
			<Flex alignItems={'center'} py={10} borderBottomWidth={1} borderColor={'gray.200'}>
				<Box shadow={'base'} borderColor={'gray.200'} borderWidth={1} width={79} height={79} mr={10} borderRadius={6} />
				<Flex flexDirection={'column'}>
					<Heading size={'md'}>{name}</Heading>
					<Text fontSize={'xs'}>Od {price} Kč</Text>
				</Flex>
				<Box ml={'auto'}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.1719 12L8.22192 7.05L9.63592 5.636L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#E2E8F0" />
					</svg>
				</Box>
			</Flex>
		</NextLink>
	);
};

export default ServiceRow;
