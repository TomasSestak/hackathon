import { UseFormRegister } from 'react-hook-form';
import Input from '@/components/form/Input';
import { Stack } from '@chakra-ui/react';

interface Props {
	register: UseFormRegister<any>;
	onBlur?: () => void;
}

const AddressItems = ({ register, onBlur }: Props) => {
	return (
		<Stack>
			<Input register={register} id={'street'} label={'Ulice'} onBlur={onBlur} />
			<Input register={register} id={'postalCode'} label={'PSČ'} onBlur={onBlur} />
			<Input register={register} id={'city'} label={'Město'} onBlur={onBlur} />
		</Stack>
	);
};

export default AddressItems;
