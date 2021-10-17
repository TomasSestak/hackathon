import { Collapse, Fade, Flex, Text, Textarea, useDisclosure, Stack } from '@chakra-ui/react';
import BlackButton from '@/components/buttons/BlackButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReplyButton from '@/components/buttons/ReplyButton';

interface Props {
	variant?: 'default' | 'demand';
	user: string;
	data: {
		text: string;
		created_at: string;
	};
	reply?: {
		text: string;
		created_at: string;
	};
	status?: boolean;
	demand?: {
		description: string;
		budget: number;
		deadline: string;
		address: string;
	};
}

interface FormData {
	reply: string;
}

const Review = ({ variant = 'default', user, data: { text, created_at }, status, reply, demand }: Props) => {
	const { isOpen, onToggle } = useDisclosure();

	const { register, handleSubmit } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = ({ reply }) => {};

	return (
		<Flex flexDirection={'column'} pt={13} pb={26} borderRadius={6} borderColor={'gray.200'} borderWidth={1} pl={'25px'} pr={'30px'} mb={5}>
			<Flex borderBottomWidth={1} borderColor={'#E2E8F0'} pb={'16px'} mb={23}>
				<Text color={'black'} fontSize={14} fontWeight={'bold'}>
					{user}&nbsp;&nbsp;&nbsp;&nbsp;
					{variant === 'demand' ? <>👨‍🏭</> : status ? <>👍🏻</> : <>👎🏻</>}
				</Text>
			</Flex>
			<Text color={'blackAlpha.700'} fontSize={'xs'} pb={'16px'}>
				{text}
			</Text>
			{demand && (
				<Stack>
					<Text color={'gray.900'} fontSize={'xs'} lineHeight={4}>
						<strong>Cenová nabídka</strong>: {demand.budget} Kč
					</Text>
					<Text color={'gray.900'} fontSize={'xs'} lineHeight={4}>
						<strong>Platná do:</strong>: {demand.deadline} Kč
					</Text>
					<Text color={'gray.900'} fontSize={'xs'} lineHeight={4}>
						<strong>Místo práce</strong>: {demand.address} Kč
					</Text>
				</Stack>
			)}
			<Text color={'gray.300'} fontSize={'xs'} lineHeight={4} mb={23}>
				{created_at}
			</Text>
			{reply && variant === 'default' && (
				<Flex flexDirection={'column'} borderColor={'gray.300'} borderLeftWidth={1} pl={4}>
					<Text color={'black'} fontSize={'xs'} pb={2} fontWeight={'bold'}>
						Vaše odpověď
					</Text>
					<Text color={'blackAlpha.700'} fontSize={'xs'} pb={'16px'}>
						{text}
					</Text>
					<Text color={'gray.300'} fontSize={'xs'} lineHeight={4} mb={23}>
						{created_at}
					</Text>
				</Flex>
			)}
			{!reply && (
				<>
					<Fade in={!isOpen} unmountOnExit>
						<ReplyButton label={variant === 'demand' ? 'Reagovat na nabídku' : undefined} onClick={onToggle} />
					</Fade>
					<Collapse in={isOpen}>
						<Textarea
							placeholder={variant === 'demand' ? 'Zde můžete zareagovat na nabídku práce' : 'Zde můžete zareagovat na zákaznickou recenzi'}
							size={'md'}
							{...register('reply')}
						/>
						<BlackButton onClick={handleSubmit(onSubmit)} width={'100%'}>
							{variant === 'demand' ? 'Zareagovat na nabídku' : 'Odpovědět'}
						</BlackButton>
					</Collapse>
				</>
			)}
		</Flex>
	);
};

export default Review;
