import { useSelector } from '@/store';

const SideNavigation = () => {
	const { sideNavigationVisible } = useSelector(({ ui }) => ui);

	return <></>;
};

export default SideNavigation;
