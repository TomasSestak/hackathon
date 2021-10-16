import { createSlice } from '@reduxjs/toolkit';

interface UIStore {
	sideNavigationVisible: boolean;
}

const initialState: UIStore = {
	sideNavigationVisible: true,
};

const slice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleSideNabigationVisible: (state) => {
			state.sideNavigationVisible = !state.sideNavigationVisible;
		},
	},
});

export default slice.reducer;

export const { toggleSideNabigationVisible } = slice.actions;
