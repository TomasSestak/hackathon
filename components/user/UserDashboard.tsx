import { Flex, Text } from '@chakra-ui/react';
import Input from '@/components/form/Input';
import { useForm } from 'react-hook-form';

const UserDashboard = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	return (
		<Flex flexDirection={'column'}>
			<Input label={'Username'} placeholder={'@username'} id={'username'} register={register} />
			<Text color={'gray.500'} fontSize={'xs'} mt={1}>
				Generated via facebook
			</Text>
			<Input label={'Location'} id={'locatiom'} register={register} />
		</Flex>
	);
};

export default UserDashboard;
