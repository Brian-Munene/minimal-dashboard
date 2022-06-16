import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ requestPath, redirectPath='/login', children }) => {

    if (!checkAuth(requestPath)) {
        return <Navigate to={redirectPath} replace />;
    }
    
    return children ? children : <Outlet/>;
};

export default ProtectedRoute;




const checkAuth=(routeName)=>{
    const user = JSON.parse(localStorage.getItem('user'))

    if(routeName === '/'){
        return !!user && user.permissions?.includes('view_countries')
    }
    else if (routeName === '/profile') {
        return !!user
    }

}