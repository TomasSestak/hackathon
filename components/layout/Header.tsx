import { Box, Container, Flex, Input, Select, Button, Link as ChakraLink, Fade } from '@chakra-ui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import api from '@/api';
import { useState } from 'react';
import { useGetSearchResultsQuery } from '@/store/search';
import { Spinner } from '@chakra-ui/react';

const Header = () => {
	const { register } = useForm();

	const [text, setText] = useState('');

	const { data, isLoading } = useGetSearchResultsQuery(text);

	console.log(data, isLoading);

	return (
		<Container>
			<Flex py={18}>
				<Select size={'sm'} variant={'outline'} mr={2} width={91} flexShrink={0} borderRadius={6}>
					<option value="prague">Praha</option>
				</Select>
				<Box mr={2} flexGrow={1} position={'relative'}>
					<Input
						placeholder={'Zadejtu službu nebo jméno podniku'}
						variant={'outline'}
						size={'sm'}
						onInput={({ currentTarget: { value } }) => (isLoading ? null : setText(value))}
						borderRadius={6}
					/>
					<Fade in={isLoading}>
						<Spinner color={'gray.400'} position={'absolute'} top={2} right={2} width={15} height={15} />
					</Fade>
				</Box>
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
