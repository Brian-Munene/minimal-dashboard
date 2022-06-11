import { useState } from 'react';
import { profileFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = profileFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function UserProfile(){
    const [profileState,setprofileState]=useState(fieldsState);

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
        console.log(profileFields)
        const endpoint=`https://gateway-service-5qoj75li4a-uc.a.run.app/api/v1/auth/login`;
        fetch(endpoint,
            {
            method:'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(profileFields)
            }).then(response=>response.json())
            .then(res=>{

                console.log(res)
            })
            .catch(error=>console.log(error))
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
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
            </div>
            <FormAction handleSubmit={handleSubmit} text="Submit"/>
        </form>
    )
}