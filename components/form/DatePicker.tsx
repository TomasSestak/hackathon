import { SingleDatepicker } from '@/components/form/ChakraDatePicker';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import Label from '@/components/form/Label';
import { Stack } from '@chakra-ui/react';

interface Props {
	id: string;
	label: string;

	initialDate?: Date;
	register: UseFormRegister<any>;
}

const DatePicker = ({ id, initialDate = new Date(), register, label }: Props) => {
	const [date, setDate] = useState(initialDate);

	return (
		<Stack>
			<Label>{label}</Label>
			<SingleDatepicker onDateChange={setDate} date={date} {...register(id)} />
		</Stack>
	);
};

export default DatePicker;
