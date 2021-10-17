import { AppDispatch } from '@/store/index';
import { createSlice } from '@reduxjs/toolkit';

export interface ClientData {
	id: number;
	email: string;
	full_name: string;
	phone_verification_token: string;
	phone_verified: 0 | 1;
}

interface AuthStore {
	logged: boolean;
	id: number | null;
	clientData: ClientData | null;
}

const initialState: AuthStore = {
	logged: false,
	id: null,
	clientData: null,
};

const slice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		updateLogged: (state, { payload }) => {
			state.logged = payload;
		},
		setId: (state, { payload }) => {
			state.id = payload;
		},
		setClientData: (state, { payload }) => {
			state.clientData = payload;
		},
	},
});

//export reducer
export default slice.reducer;

// Actions
export const { updateLogged, setId, setClientData } = slice.actions;
