import { Button, Text, Flex, Stack, Container } from '@chakra-ui/react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import BlackButton from '@/components/buttons/BlackButton';
import { useDispatch, useSelector } from '@/store';
import { updateLogged } from '@/store/auth';
import Input from '@/components/form/Input';
import UserDashboard from '@/components/user/UserDashboard';

const User = () => {
	const dispatch = useDispatch();

	const { logged } = useSelector(({ auth }) => auth);

	const responseFacebook = (res) => {
		console.log(res);
		dispatch(updateLogged(true));
	};

	return (
		<Flex flexDirection={'column'} minH={'100vh'} justifyContent={'center'}>
			<Container>
				{logged ? (
					<UserDashboard />
				) : (
					<Stack justifyContent={'center'}>
						<Text fontSize={'xs'} textAlign={'center'}>
							Register / Login via facebook
						</Text>
						<FacebookLogin
							appId="1088597931155576"
							callback={responseFacebook}
							render={({ onClick }) => <BlackButton onClick={onClick}>Facebook Login</BlackButton>}
						/>
					</Stack>
				)}
			</Container>
		</Flex>
	);
};

export default User;
