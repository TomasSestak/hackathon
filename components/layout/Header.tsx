import { Box, Container, Flex, Input, Select, Button, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import api from '@/api';
import { useState } from 'react';
import { useGetSearchResultsQuery } from '@/store/search';

const Header = () => {
	const { register } = useForm();

	const [text, setText] = useState('');

	const { data, isLoading } = useGetSearchResultsQuery(text);

	return (
		<Container>
			<Flex py={18}>
				<Select size={'sm'} variant={'outline'} mr={2} width={91} flexShrink={0}>
					<option value="option1">Praha</option>
				</Select>
				<Input
					placeholder={'Zadejtu službu nebo jméno podniku'}
					variant={'outline'}
					size={'sm'}
					onInput={async ({ currentTarget: { value } }) => setText(value)}
					mr={2}
				/>
				<Flex>
					<Link href={'/user'} passHref>
						<ChakraLink height={'100%'} mr={2}>
							<Button size={'xs'} variant={'outline'} height={'100%'} width={'32px'}>
								u
							</Button>
						</ChakraLink>
					</Link>
					<Link href={'/user'}>
						<ChakraLink height={'100%'}>
							<Button size={'xs'} variant={'outline'} height={'100%'} width={'32px'}>
								m
							</Button>
						</ChakraLink>
					</Link>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Header;
