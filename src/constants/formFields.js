const loginFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"text",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
]

const profileFields = [
    {
        labelText:"First Name",
        labelFor:"firstName",
        id:"firstName",
        name:"firstName",
        type:"text",
        autoComplete:"firstName",
        isRequired:true,
        placeholder:"First Name" 
    },
    {
        labelText:"Last Name",
        labelFor:"lastName",
        id:"lastName",
        name:"lastName",
        type:"text",
        autoComplete:"lastName",
        isRequired:true,
        placeholder:"Last Name" 
    },
    {
        labelText:"Date of Birth",
        labelFor:"dateOfBirth",
        id:"dateOfBirth",
        name:"dateOfBirth",
        type:"date",
        autoComplete:"dateOfBirth",
        isRequired:true,
        placeholder:"Date of Birth" 
    },
    {
        labelText:"Avatar",
        labelFor:"avatar",
        id:"avatar",
        name:"avatar",
        type:"text",
        autoComplete:"avatar",
        isRequired:true,
        placeholder:"Avatar" 
    }

]

export {loginFields, profileFields}