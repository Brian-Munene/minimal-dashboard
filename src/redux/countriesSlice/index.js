import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countries: []
    },
    reducers: {
        getAllCountries: (state, action) => {
            state.countries = action.payload
        }
    }
})

export const COUNTRIES_ACTIONS = countriesSlice.actions

export const fetchCountries = (data) => {
    return async (dispatch) => {
        dispatch(COUNTRIES_ACTIONS.getAllCountries(data))
    }
}

export default countriesSlice.reducer
