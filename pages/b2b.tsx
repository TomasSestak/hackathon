import { Container, Stack, Text, Flex } from '@chakra-ui/react';
import BlackButton from '@/components/buttons/BlackButton';
import { useState } from 'react';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import OutlineButton from '@/components/buttons/OutlineButton';

const B2b = () => {
	const [authType, setAuthType] = useState<'register' | 'login'>();

	const onRegister = () => {
		setAuthType('register');
	};

	const onLogin = () => {
		setAuthType('login');
	};

	return (
		<Flex flexDirection={'column'} py={10}>
			<Container>
				<Flex flexDirection={'column'}>
					{authType === 'register' && <Register />}
					{authType === 'login' && <Login />}
					{!authType && (
						<>
							<Text fontSize={'xs'} textAlign={'center'}>
								Start using slist today
							</Text>
							<BlackButton onClick={onRegister}>Register</BlackButton>
							<OutlineButton onClick={onLogin} mt={4}>
								Login
							</OutlineButton>
						</>
					)}
				</Flex>
			</Container>
		</Flex>
	);
};

export default B2b;
