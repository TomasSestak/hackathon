import { Heading, Text, Stack, Container, Flex, Spinner } from '@chakra-ui/react';
import Dropdown from '@/components/form/Dropdown';
import TextArea from '@/components/form/TextArea';
import DatePicker from '@/components/form/DatePicker';
import Input from '@/components/form/Input';
import AddressItems from '@/components/form/AddressItems';
import BlackButton from '@/components/buttons/BlackButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from '@/store';
import api from '@/api';
import { useGetDemandsQuery, useAddDemandMutation } from '@/store/demands';

interface FormData {
	content: string;
	budget: number;
	category_id: number;
}

const DemandService = () => {
	const { register, handleSubmit } = useForm<FormData>();

	const { id } = useSelector(({ auth }) => auth);

	const { data, isLoading } = useGetDemandsQuery();
	const [addDemand, { isLoading: isUpdating }] = useAddDemandMutation();

	const onSubmit: SubmitHandler<FormData> = async ({ content, budget, category_id }) => {
		addDemand({ user_id: id, content, budget, category_id });
		alert('Poptávka byla úspěsně vytvořena!');
	};

	return (
		<Container>
			<Flex flexDirection={'column'} pt={8}>
				<Heading size={'xl'} mb={2}>
					Vaše poptávky
				</Heading>
				{data
					?.filter(({ user_id }) => user_id === id)
					.map(({ content, budget, name, status }) => {
						return (
							<Flex flexDirection={'column'} borderRadius={6} borderWidth={1} borderColor={'gray.200'} shadow={'base'} px={7} py={5}>
								<Flex justifyContent={'space-between'}>
									<Heading size={'md'}>{name}</Heading>
									<Text size={'sm'} color={'gray.400'} display={'flex'}>
										Aktuální stav:{' '}
										<Text size={'sm'} color={'yellow.400'}>
											&nbsp;{status.toUpperCase()}
										</Text>
									</Text>
								</Flex>
								<Flex justifyContent={'space-between'} mt={10} alignItems={'flex-end'}>
									<Text>{content}</Text>
									<Text ml={2} fontSize={'lg'} fontWeight={'bold'}>
										{budget} Kč
									</Text>
								</Flex>
							</Flex>
						);
					})}
				{!data && isLoading && (
					<Flex justifyContent={'center'}>
						<Spinner color={'gray.400'} />
					</Flex>
				)}
				<Heading size={'xl'} mt={10} mb={4}>
					Nenalezli jste službu kterou hledáte?
				</Heading>
				<Text fontSize={'xs'} mb={4}>
					Vyplňte jakou práci poptáváte a my pro Vás najdeme vhodný podnik či specialistu.
				</Text>
				<Dropdown register={register} id={'category_id'} label={'Kategorie'} items={[{ value: 1, label: 'Krása' }]} />
				<TextArea label={'Popište co potřebujete'} id={'content'} register={register} />
				<DatePicker label={'Platnost do'} id={'deadline'} register={register} />
				<Input register={register} id={'budget'} label={'Kolik za práci nabízíte?'} type={'number'} />
				<AddressItems register={register} />
				<BlackButton onClick={handleSubmit(onSubmit)} mt={8}>
					Zaslat poptávku
				</BlackButton>
			</Flex>
		</Container>
	);
};

export default DemandService;
