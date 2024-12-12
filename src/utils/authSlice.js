import { createSlice } from "@reduxjs/toolkit";
import { getToken,setToken,removeToken } from "./authServices";

const gToken = async()=>{
    const getTok= await getToken()
   
    return getTok

}
const initialState = { 
    token:gToken || null,
     user: null,
     };

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setAuthToken:(state,action)=>{
            state.token=action.payload;
        
            setToken(action.payload)


        },
        setUser: (state, action) => { state.user = action.payload;},
        removeUser:(state,action)=>{
            removeToken()
            state.token=null
            state.user=null
            return state
        }

        


        


    }
})

export const {setAuthToken,setUser,removeUser}=authSlice.actions
export default authSlice.reducer