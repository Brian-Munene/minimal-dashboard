import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";

const authSlice = createSlice({
    name: "authentication",
    initialState: {
        isAuthenticated: false,
        data: {
            user:{},
            access_token:''
        }
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false
            state.data = {}
        },
        login: (state, action) => {
            state.isAuthenticated = true
            state.data = action.payload
        },
        updateDataState: (state, action) => {
            state.data = action.payload
        }
    }
})

export const AUTH_ACTIONS = authSlice.actions

export const saveToken = (data) => {
    return async (dispatch) => {
        dispatch(AUTH_ACTIONS.login(data))
    }
}

export const deleteToken = () => {
    return async (dispatch) => {
        AuthService.logout()
        dispatch(AUTH_ACTIONS.logout())
    }
}

export const saveUpdateUserDataState = (data) => {
    return  (dispatch) => {
        AuthService.updateProfile(data)
            .then( response => {
                console.log(response)
                dispatch(AUTH_ACTIONS.updateDataState(data))
            })
            .catch(error => {
                console.error(error.response)
            })
    }
}

export default authSlice.reducer
