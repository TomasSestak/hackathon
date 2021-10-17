import { Box, Fade, Input, Spinner, Container, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useGetSearchResultsQuery } from '@/store/search';
import ServiceRow from '@/components/ServiceRow';

const ServiceIndex = () => {
	const [text, setText] = useState('');

	const { data, isLoading } = useGetSearchResultsQuery(text);

	return (
		<Container>
			<Box mr={2} flexGrow={1} position={'relative'}>
				<Input
					placeholder={'Zadejtu službu, kterou hledáte'}
					variant={'outline'}
					size={'sm'}
					value={text}
					onInput={({ currentTarget: { value } }) => (isLoading ? null : setText(value))}
					borderRadius={6}
					width={'100%'}
				/>
				<Fade in={isLoading}>
					<Spinner color={'gray.400'} position={'absolute'} top={2} right={2} width={15} height={15} />
				</Fade>
			</Box>
			{data && (
				<Flex flexDirection={'column'}>
					{data
						.filter((item) => item.type === 'service')
						.map(({ name, price }) => {
							return <ServiceRow name={name} price={price} href={`/service/${name}`} />;
						})}
				</Flex>
			)}
			{isLoading && (
				<Flex justifyContent={'center'}>
					<Spinner color={'gray.400'} />
				</Flex>
			)}
		</Container>
	);
};

export default ServiceIndex;
