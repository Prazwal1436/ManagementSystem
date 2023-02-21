import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state,payload) => {
        state.status =  true
      },
      logout: (state) => {
        localStorage.setItem("access_token", "")
        state.status =  false
      },
  },
})

// Action creators are generated for each case reducer function
export const {login,logout} = loginSlice.actions

export default loginSlice.reducer
