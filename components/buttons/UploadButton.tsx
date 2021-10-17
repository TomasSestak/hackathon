import { Button, ButtonProps, Text, Input, InputProps } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
	label?: string;
	register: UseFormRegister<any>;
}

const UploadButton = ({ label = 'Nahrát soubor', register, ...rest }: InputProps & Props) => {
	return (
		<Input variant={'outline'} size={'sm'} type={'file'} multiple {...rest} {...register('file')}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7.33331 7.33334V3.33334H8.66665V7.33334H12.6666V8.66668H8.66665V12.6667H7.33331V8.66668H3.33331V7.33334H7.33331Z"
					fill="#2D3748"
				/>
			</svg>
		</Input>
	);
};

export default UploadButton;
