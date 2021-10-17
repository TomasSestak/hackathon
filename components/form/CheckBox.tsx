import { Flex, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import Label from '@/components/form/Label';

interface Props {
	label: string;
	initialState?: boolean;
	id: string;
	register: UseFormRegister<any>;
}

const CheckBox = ({ label, id, register, initialState = false }: Props) => {
	const [state, setState] = useState(initialState);

	return (
		<Flex mt={1}>
			<Checkbox id={id} {...register(id)}>
				<Label>{label}</Label>
			</Checkbox>
		</Flex>
	);
};

export default CheckBox;
