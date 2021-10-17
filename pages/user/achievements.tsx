import { Button, Text, Flex, Stack, Container } from '@chakra-ui/react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import BlackButton from '@/components/buttons/BlackButton';
import { useDispatch, useSelector } from '@/store';
import { updateLogged } from '@/store/auth';
import Input from '@/components/form/Input';
import UserDashboard from '@/components/user/UserDashboard';
import { useRouter } from 'next/router';

const UserAchievements = () => {
	const { logged } = useSelector(({ auth }) => auth);
	const router = useRouter();

	if (!logged) {
		router.push('/user');
		return;
	}

	return (
		<Container>
			<Flex flexDirection={'column'} minH={'100vh'} justifyContent={'center'}>
				Achievements
			</Flex>
		</Container>
	);
};

export default UserAchievements;
