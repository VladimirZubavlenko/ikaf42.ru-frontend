import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#3f51b5',
			light: '#F4F6F8',
		},
		secondary: {
			main: '#DCDCDC',
		},
		action: {
			active: '#ff4d4d',
		},
		text: {
			primary: '#000000',
		},
		background: {
			default: '#3f51b5',
			paper: '#fafafa',
		},
	},
});
