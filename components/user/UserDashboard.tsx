import { Flex, Heading, Text, Textarea, Checkbox, Link } from '@chakra-ui/react';
import Input from '@/components/form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import Dropdown from '@/components/form/Dropdown';
import TextArea from '@/components/form/TextArea';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { useState } from 'react';
import DatePicker from '@/components/form/DatePicker';
import CheckBox from '@/components/form/CheckBox';
import AddressItems from '@/components/form/AddressItems';
import BlackButton from '@/components/buttons/BlackButton';
import DemandService from '@/components/form/DemandService';
import NextLink from 'next/link';

interface FormData {}

interface ItemProps {
	href: string;
	label: string;
	border?: true;
}

const Item = ({ href, label, border }: ItemProps) => {
	return (
		<NextLink href={href} passHref>
			<Link
				display={'flex'}
				justifyContent={'space-between'}
				pt={'12px'}
				pb={'9px'}
				pl={'30px'}
				pr={17}
				borderColor={'gray.200'}
				borderBottomWidth={border ? 1 : 0}
				alignItems={'center'}
			>
				<Heading fontSize={'sm'}>{label}</Heading>
				<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.6788 12L8.64111 7.04999L10.0802 5.63599L16.557 12L10.0802 18.364L8.64111 16.95L13.6788 12Z" fill="#E2E8F0" />
				</svg>
			</Link>
		</NextLink>
	);
};

const UserDashboard = () => {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors, isSubmitting },
	} = useForm();

	const onBlur = () => {};

	return (
		<Flex flexDirection={'column'}>
			<Input label={'Username'} placeholder={'@username'} id={'username'} register={register} />
			<Text color={'gray.500'} fontSize={'xs'} mt={1}>
				Vygenerováno facebookem
			</Text>
			<AddressItems register={register} onBlur={handleSubmit(onBlur)} />

			<Flex flexDirection={'column'} borderColor={'gray.200'} shadow={'base'} borderWidth={1} mt={'34px'} mb={'15px'}>
				<Item href={'/user/reviews'} label={'Recenze'} border />
				<Item href={'/user/placed-demands'} label={'Vaše poptávky práce'} border />
				<Item href={'/user/achievements'} label={'Odměny'} />
			</Flex>
		</Flex>
	);
};

export default UserDashboard;
