import { Heading, Stack, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import BlackButton from '@/components/buttons/BlackButton';
import { SubmitHandler } from 'react-hook-form';
import Input from '@/components/form/Input';
import api from '@/api';
import { useDispatch } from '@/store';
import { setClientData, setId, updateLogged } from '@/store/auth';

interface FormData {
	email: string;
	password: string;
}

const Login = () => {
	const dispatch = useDispatch();

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
		try {
			const {
				data: { id },
			}: { data: { id: number } } = await api.post('/login', { email, password });
			const { data } = await api.get(`/user/${id}`);
			dispatch(setClientData(data));
			dispatch(setId(id));
			dispatch(updateLogged(true));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Flex flexDirection={'column'} py={10}>
			<Heading as={'h2'} fontSize={'md'} mb={2}>
				Login
			</Heading>
			<Input label={'E-mail'} id={'email'} register={register} type={'email'} />
			<Input label={'Heslo'} id={'password'} register={register} type={'password'} />
			<BlackButton onClick={handleSubmit(onSubmit)} mt={8}>
				Login
			</BlackButton>
		</Flex>
	);
};

export default Login;
