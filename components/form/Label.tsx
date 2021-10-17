import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

const Label = ({ children }: Props) => {
	if (!children) return null;

	return (
		<Text fontSize={'md'} lineHeight={6} fontWeight={'medium'} mt={3}>
			{children}
		</Text>
	);
};

export default Label;
