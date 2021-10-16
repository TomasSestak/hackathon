import { AppDispatch } from '@/store/index';
import { createSlice } from '@reduxjs/toolkit';

interface AuthStore {
	logged: boolean;
}

const initialState = {
	logged: false,
};

const slice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		updateLogged: (state, { payload }) => {
			state.logged = payload;
		},
	},
});

//export reducer
export default slice.reducer;

// Actions
export const { updateLogged } = slice.actions;
