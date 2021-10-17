import { Input as ChakraInput, Text, Stack, InputProps } from '@chakra-ui/react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import Label from '@/components/form/Label';

interface Props {
	register: UseFormRegister<any>;
	id: string;
	label: string;
}

const Input = ({ register, id, label, ...rest }: Props & InputProps) => {
	return (
		<Stack>
			<Label>{label}</Label>
			<ChakraInput variant={'outline'} id={id} {...register(id)} {...rest} />
		</Stack>
	);
};

export default Input;
