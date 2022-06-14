import {configureStore} from '@reduxjs/toolkit'
import authSlice from "./authslice";
import countriesSlice from "./countriesSlice";


const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
        countries: countriesSlice
    }
})

export default reduxStore;
