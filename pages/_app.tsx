import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/components/layout/Layout';

const App = ({ Component, pageProps }: AppProps) => {
	return (
			<ChakraProvider>
				<Provider store={store}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</ChakraProvider>
	);
};
export default App;
