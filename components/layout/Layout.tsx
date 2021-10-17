import { ReactNode } from 'react';
import SideNavigation from '@/components/SideNavigation';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
