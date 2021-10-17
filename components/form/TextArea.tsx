import { Text, Textarea, Stack } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';
import Label from '@/components/form/Label';

interface Props {
	placeholder?: string;
	register: UseFormRegister<any>;
	id: string;
	label?: string;
}

const TextArea = ({ placeholder, register, id, label }: Props) => {
	return (
		<Stack>
			<Label>{label}</Label>
			<Textarea placeholder={placeholder} size={'md'} id={id} {...register(id)} />
		</Stack>
	);
};

export default TextArea;
