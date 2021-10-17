import { Input as ChakraInput, Text, Stack, InputProps, Select } from '@chakra-ui/react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import Label from '@/components/form/Label';

interface Props {
	register: UseFormRegister<any>;
	id: string;
	label: string;
	items: { value: number; label: string }[];
}

const Dropdown = ({ register, id, label, items, ...rest }: Props & InputProps) => {
	return (
		<Stack>
			<Label>{label}</Label>
			<Select variant={'outline'} size={'md'} id={id} {...register(id)}>
				{items.map(({ value, label }) => {
					return (
						<option value={value} key={`dropdown: ${label}: ${value}`}>
							{label}
						</option>
					);
				})}
			</Select>
		</Stack>
	);
};

export default Dropdown;
