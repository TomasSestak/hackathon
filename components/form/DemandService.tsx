import { Heading, Text, Stack, Container } from '@chakra-ui/react';
import Dropdown from '@/components/form/Dropdown';
import TextArea from '@/components/form/TextArea';
import DatePicker from '@/components/form/DatePicker';
import Input from '@/components/form/Input';
import AddressItems from '@/components/form/AddressItems';
import BlackButton from '@/components/buttons/BlackButton';
import { useForm } from 'react-hook-form';

const DemandService = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = () => {};

	return (
		<Container>
			<Stack pt={10}>
				<Heading fontSize={'xl'}>Nenalezli jste službu kterou hledáte?</Heading>
				<Text fontSize={'xs'}>Vyplňte jakou práci poptáváte a my pro Vás najdeme vhodný podnik či specialistu.</Text>
				<Dropdown register={register} id={'category'} label={'Kategorie'} items={[{ value: 'beauty', label: 'Krása' }]} />
				<TextArea label={'Popište co potřebujete'} id={'description'} register={register} />
				<DatePicker label={'Platnost do'} id={'deadline'} register={register} />
				<Input register={register} id={'budget'} label={'Kolik za práci nabízíte?'} type={'number'} />
				<AddressItems register={register} />
				<BlackButton onClick={handleSubmit(onSubmit)}>Zaslat poptávku</BlackButton>
			</Stack>
		</Container>
	);
};

export default DemandService;