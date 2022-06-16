import { useState } from 'react';
import { profileFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import {useSelector, useDispatch} from "react-redux";
import AuthService from '../services/auth.service';
import {saveToken} from "../redux/authslice";

const fields = profileFields;
let fieldsState = {};

export default function UserProfile(){
    const dispatch = useDispatch()
    const [profileState,setprofileState]=useState(fieldsState);
    const user = useSelector((state) => state.auth.data)

    fields.forEach(field=>{
        Object.keys(user).forEach(function(key) {
            if (key === field.id) {
                console.log(key, user[key]);
                if(user[key] === null || user[key] === ''){
                    fieldsState[field.value] = ''
                }
                else{
                    fieldsState[field.value]= user[key]
                }
            }
        });
    });
    const handleChange=(e)=>{
        setprofileState({...profileState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        updateProfile();
    }

    //Handle Login API Integration here
    const updateProfile = () =>{
        let profileFields={
                firstName:profileState['firstName'],
                lastName:profileState['lastName'],
                dateOfBirth:profileState['dateOfBirth'],
                avatar:profileState['avatar']
        };
        // console.log(profileFields)
        AuthService.updateProfile(profileFields)
        .then(response => {
            if (response.data) {
                dispatch(saveToken(response))
            }
            else {
                console.error('Login error')
            }
            return response
        })
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={profileState[field.id]}
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
            {/* <div className="-space-y-px">
                <label id="firstName" htmlFor="firstName" className="sr-only">First Name</label>
                <input className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                       onChange={handleChange}
                    value={user?.firstName}
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                />
            </div>
            <div className="-space-y-px">
                <label id="lastName" htmlFor="lastName" className="sr-only">First Name</label>
                <input className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                       onChange={handleChange}
                       value={user?.lastName}
                       id="firstName"
                       name="firstName"
                       type="text"
                       placeholder="Last Name"
                />
            </div>
            <div className="flex justify-between">
                <label id="dob" htmlFor="dob" className="sr-only">First Name</label>
                <input className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                       onChange={handleChange}
                       value={user?.dateOfBirth}
                       id="dob"
                       name="dob"
                       type="date"
                       placeholder="Date of Birth"
                />
            </div>
            <div className="-space-y-px">
                <label id="avatar" htmlFor="avatar" className="sr-only">Avatar</label>
                <input className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                       onChange={handleChange}
                       value={user?.avatar}
                       id="avatar"
                       name="avatar"
                       type="text"
                       placeholder="Avatar"
                />
            </div> */}
            <FormAction handleSubmit={handleSubmit} text="Submit"/>
        </form>
    )
}
