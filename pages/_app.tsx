import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ChakraProvider>
	);
};
export default App;
