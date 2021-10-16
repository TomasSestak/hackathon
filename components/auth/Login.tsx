import { Heading, Stack, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import BlackButton from '@/components/buttons/BlackButton';
import { SubmitHandler } from 'react-hook-form';
import Input from '@/components/form/Input';

interface FormData {
	email: string;
	password: string;
}

const Register = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {};

	return (
		<Flex flexDirection={'column'} py={10}>
			<Heading fontSize={'md'} mb={2}>
				Login
			</Heading>
			<Input label={'E-mail'} id={'email'} register={register} />
			<Input label={'Heslo'} id={'password'} register={register} />
			<BlackButton onClick={handleSubmit(onSubmit)}>Login</BlackButton>
		</Flex>
	);
};

export default Register;
