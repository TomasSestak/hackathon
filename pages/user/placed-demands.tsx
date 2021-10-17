import { Button, Text, Flex, Stack, Container } from '@chakra-ui/react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import BlackButton from '@/components/buttons/BlackButton';
import { useDispatch, useSelector } from '@/store';
import { updateLogged } from '@/store/auth';
import Input from '@/components/form/Input';
import UserDashboard from '@/components/user/UserDashboard';
import DemandService from '@/components/form/DemandService';
import { useRouter } from 'next/router';

const UserPlacedDemands = () => {
	const { logged } = useSelector(({ auth }) => auth);
	const router = useRouter();

	if (!logged) {
		router.push('/user');
		return;
	}

	return <DemandService />;
};

export default UserPlacedDemands;
