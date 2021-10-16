import { Button, Text, chakra, ButtonProps } from '@chakra-ui/react';

interface Props {
	onClick: () => void;
	children: string;
}

const BlackButton = ({ onClick, children, ...rest }: Props & ButtonProps) => {
	return (
		<Button onClick={onClick} variant={'solid'} size={'lg'} bg={'black'} color={'white'} borderRadius={6} minWidth={320} mt={8} {...rest}>
			<Text fontSize={'lg'} lineHeight={7} fontWeight={'semi-bold'}>
				{children}
			</Text>
		</Button>
	);
};

export default BlackButton;
