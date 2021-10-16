declare module 'react-facebook' {
	export class LoginButton extends React.PureComponent<{ onClick: () => void }> {}
	interface FacebookProviderProps {
		appId?: string;
		domain?: string;
		version?: string;
		cookie?: boolean;
		status?: boolean;
		xfbml?: boolean;
		language?: string;
		frictionlessRequests?: boolean;
		children?: any;
		wait?: boolean;
		debug?: boolean;
	}
	export class FacebookProvider extends React.Component<FacebookProviderProps> {}
	interface GroupProps {
		href?: string;
		skin?: string;
		showSocialContext?: boolean;
		showMetaData?: boolean;
		width?: number | string;
		children?: any;
		style?: Object;
		handleParse?: Function;
	}
	export class Group extends React.PureComponent<GroupProps> {}
}
