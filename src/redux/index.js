import {configureStore} from '@reduxjs/toolkit'
import authSlice from "./authslice";


const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
    }
})

export default reduxStore;
