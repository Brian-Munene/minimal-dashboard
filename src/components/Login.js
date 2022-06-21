import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {saveToken} from "../redux/authslice";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import AuthService from "../services/auth.service";
import { toast } from 'react-toastify';

//FIXME: Toast message after login has a wierd error
const fields = loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const {isAuthenticated} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }
    const toastMessage = ''
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
        console.log('here', authenticateUser())
        if (isAuthenticated ===true){
            navigate("/")
            toast.success("Welcome back");
        }
        else{
            toast.error(authenticateUser());
        }
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
        let loginFields={
                username:loginState['username'],
                password:loginState['password'],
                clientType: "web"
        };

        AuthService.login(loginFields)
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user',JSON.stringify(response.data.user))
                    localStorage.setItem('token', response.data.token)
                    dispatch(saveToken(response.data.user))
                    return response
                }
                if (response.status === 400) {
                    console.log("here")
                    console.error(response.data.errors[0].message)
                    toastMessage = response.data.errors[0].message
                }
                // return response
        })
    }
    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field=>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                        />
                    )
                }
            </div>
            <FormExtra/>
            <FormAction handleSubmit={handleSubmit} text="Login"/>
        </form>
    )
}
