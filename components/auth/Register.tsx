import { Heading, Stack, Flex } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import BlackButton from '@/components/buttons/BlackButton';
import Input from '@/components/form/Input';

interface FormData {
	email: string;
	ico: string;
	password: string;
}

const Register = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit: SubmitHandler<FormData> = async ({ email, ico, password }) => {};

	return (
		<Flex flexDirection={'column'} py={10}>
			<Heading fontSize={'md'} mb={2}>
				Register
			</Heading>
			<Input label={'E-mail'} id={'email'} register={register} />
			<Input label={'IČO'} id={'ico'} register={register} />
			<Input label={'Heslo'} id={'password'} register={register} />
			<BlackButton onClick={handleSubmit(onSubmit)}>Register</BlackButton>
		</Flex>
	);
};

export default Register;
