import { Button, ButtonProps, Text } from '@chakra-ui/react';

interface Props {
	onClick: () => void;
	children: string;
}

const OutlineButton = ({ onClick, children, ...rest }: Props & ButtonProps) => {
	return (
		<Button
			onClick={onClick}
			variant={'outline'}
			size={'lg'}
			color={'black'}
			borderRadius={6}
			minWidth={320}
			borderColor={'black'}
			{...rest}
		>
			<Text fontSize={'lg'} lineHeight={7} fontWeight={'semi-bold'}>
				{children}
			</Text>
		</Button>
	);
};

export default OutlineButton;
