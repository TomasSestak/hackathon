import { Button, Text, Flex, Stack, Container } from '@chakra-ui/react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import BlackButton from '@/components/buttons/BlackButton';
import { useDispatch, useSelector } from '@/store';
import { updateLogged } from '@/store/auth';
import Input from '@/components/form/Input';
import UserDashboard from '@/components/user/UserDashboard';
import Login from '@/components/auth/Login';

const UserIndex = () => {
	const dispatch = useDispatch();

	const { logged } = useSelector(({ auth }) => auth);

	const responseFacebook = (res: any) => {
		console.log(res);
		dispatch(updateLogged(true));
	};

	return (
		<Flex flexDirection={'column'} minH={'100vh'} justifyContent={'center'}>
			<Container>{logged ? <UserDashboard /> : <Login />}</Container>
		</Flex>
	);
};

export default UserIndex;
