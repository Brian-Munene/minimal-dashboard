import React, {useEffect} from "react";
import Header from "../components/Header"
import CountriesList from "../components/CountriesList"
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import CountriesService from "../services/countries.service";
import { toast } from 'react-toastify';
import {fetchCountries} from '../redux/countriesSlice'

export default function CountriesPage(){
    const toastID = "first";
    const user = useSelector((state) => state.auth.data)
    const countries = useSelector((state) => state.countries)

    const dispatch = useDispatch()
    const [countriesState, setCountriesState] = useState(countries)
    useEffect(()=> {
        if (user.permissions?.includes('view_countries')) {
            CountriesService.getCountries()
                .then(response => {

                    if (response.status === 200) {
                        console.log(response.data)
                        setCountriesState(response.data)
                        dispatch(fetchCountries(countries))
                    }
                    else {
                        console.error('Error fetching data')
                        toast.error('Error fetching countries', {
                            toastId: toastID
                        })
                    }
                })}
        else{
            toast.warning('You are not allowed to view countries', {
                toastId: toastID
            })
        }
    })
    return(
        <>
            <Header
            heading="List of countries"
            paragraph="Update profile instead?"
            linkName="Profile"
            linkUrl="/profile"
            />
            <CountriesList props={countriesState}/>
        </>
    )
}
