import { Input as ChakraInput, Text, Stack, InputProps } from '@chakra-ui/react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
	register: UseFormRegister<any>;
	id: string;
	label: string;
}

const Input = ({ register, id, label, ...rest }: Props & InputProps) => {
	return (
		<Stack>
			<Text fontSize={'md'} lineHeight={6} fontWeight={'medium'} mt={3}>
				{label}
			</Text>
			<ChakraInput variant={'outline'} id={id} {...register(id)} />
		</Stack>
	);
};

export default Input;
