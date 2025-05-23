import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice(
   { name:"student",
    initialState: null, 
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:()=>null,
    }}
    
)

export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;