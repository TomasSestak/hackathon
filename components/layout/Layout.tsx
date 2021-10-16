import { ReactNode } from 'react';
import SideNavigation from '@/components/SideNavigation';
import Footer from '@/components/layout/Footer';

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div>
			{children}
			<SideNavigation />
			<Footer />
		</div>
	);
};

export default Layout;
