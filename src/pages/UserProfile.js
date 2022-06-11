import Header from "../components/Header"
import UserProfile from "../components/UserProfile"

export default function UserProfilePage(){
    return(
        <>
            <Header
            heading="List of countries"
            paragraph="View Countries?"
            linkName="Countries"
            linkUrl="/"
            />
            <UserProfile/>
        </>
    )
}