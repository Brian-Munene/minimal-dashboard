import { createSlice } from "@redux/toolkit";
import CountriesService from "../../services/countries.service";

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

export const fetchCountries = () => {
    return async (dispatch) => {
        CountriesService.getCountries().then(
            dispatch(COUNTRIES_ACTIONS.getAllCountries())
        )

    }
}
