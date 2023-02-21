import { configureStore } from '@reduxjs/toolkit'
import navReducer from './redux/navSlice'
import loginSlice from './redux/loginSlice'


export const store = configureStore({
    reducer: {
        nav: navReducer,
        login: loginSlice,
    },
})

