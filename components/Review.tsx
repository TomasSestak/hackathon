import { Collapse, Fade, Flex, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import BlackButton from '@/components/buttons/BlackButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReplyButton from '@/components/buttons/ReplyButton';

interface Props {
	user: string;
	data: {
		text: string;
		created_at: string;
	};
	reply?: {
		text: string;
		created_at: string;
	};
	status: true;
}

interface FormData {
	reply: string;
}

const Review = ({ user, data: { text, created_at }, status, reply }: Props) => {
	const { isOpen, onToggle } = useDisclosure();

	const { register, handleSubmit } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = ({ reply }) => {};

	return (
		<Flex flexDirection={'column'} pt={13} pb={26} borderRadius={6} borderColor={'gray.200'} borderWidth={1} pl={'25px'} pr={'30px'}>
			<Flex borderBottomWidth={1} borderColor={'#E2E8F0'} pb={'16px'} mb={23}>
				<Text color={'black'} fontSize={14} fontWeight={'bold'}>
					{user}    
					{status ? <>👍🏻</> : <>👎🏻</>}
				</Text>
			</Flex>
			<Text color={'blackAlpha.700'} fontSize={'xs'} pb={'16px'}>
				{text}
			</Text>
			<Text color={'gray.300'} fontSize={'xs'} lineHeight={4} mb={23}>
				{created_at}
			</Text>
			{reply && (
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
			<Fade in={!isOpen} unmountOnExit>
				<ReplyButton onClick={onToggle} />
			</Fade>
			{!reply && (
				<Collapse in={isOpen}>
					<Textarea placeholder={'Zde můžete zareagovat na zákaznickou recenzi'} size={'md'} {...register('reply')} />
					<BlackButton onClick={handleSubmit(onSubmit)} width={'100%'}>
						Odpovědět
					</BlackButton>
				</Collapse>
			)}
		</Flex>
	);
};

export default Review;
