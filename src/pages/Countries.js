import Header from "../components/Header"
import CountriesList from "../components/CountriesList"

export default function CountriesPage(){
    return(
        <>
            <Header
            heading="List of countries"
            paragraph="Update profile instead?"
            linkName="Profile"
            linkUrl="/profile"
            />
            <CountriesList/>
        </>
    )
}
