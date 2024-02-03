import { createSlice } from "@reduxjs/toolkit"

export const createUser = createSlice({
	name: "user",
	initialState: {
		users: [],
	},
	reducers: {
		register: (state, action) => {
			state.users = action.payload
		},
		logout: state => {
			state.users = null
		},
	},
})

export const { logout, register } = createUser.actions
export default createUser.reducer
