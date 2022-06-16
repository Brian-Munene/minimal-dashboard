import {Link, useNavigate} from 'react-router-dom';
import AuthService from "../services/auth.service";

export default function Header({
    heading,
    paragraph,
    linkUrl,
    linkName
    }){
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))

    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                    src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"/>
            </div>
            <h2 className="mt-6 mb-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            { user ?
                <div className="flex justify-evenly">
                    <Link to="/" className="font-medium text-purple-600 hover:text-purple-500">Countries</Link>
                    <Link to="/profile" className="font-medium text-purple-600 hover:text-purple-500">Update Profile</Link>
                    <p className="font-medium text-purple-600 hover:text-purple-500 cursor-pointer" onClick={() => {
                        AuthService.logout()
                        navigate('/login')
                    }} >Logout</p>
                </div>
                : 
                <div className="flex justify-center">
                    {paragraph}
                    <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500 ml-2">{linkName}</Link>
                </div>
            }

        </div>
    )
}
