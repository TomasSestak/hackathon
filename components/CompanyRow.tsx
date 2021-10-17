import { Flex, Heading, Text } from '@chakra-ui/react';

interface Props {
	name: string;
	rating: number;
	price: number;
}

const CompanyRow = ({ name, rating, price }: Props) => {
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'} py={'20px'}>
			<Flex flexDirection={'column'}>
				<Heading size={'md'} color={'gray.700'}>
					{name}
				</Heading>
				<Text color={'green.600'} fontSize={'xs'}>
					{rating} % spokojených zákazníků
				</Text>
			</Flex>
			<Flex flexDirection={'column'}>
				<Heading size={'sm'}>{price} Kč</Heading>
				<Text color={'green.300'} fontSize={'xs'}>
					za danou službu
				</Text>
			</Flex>
		</Flex>
	);
};

export default CompanyRow;
