import { createSlice } from "@reduxjs/toolkit";

type usersliceProps = 
{
    id:string,
    name:string
}

const initialState:usersliceProps[] =[
    {
        id:"0",
        name:"Kavippiriyan"

    },
    {
        id:"1",
        name:"Keasavan"

    }
]

const userSlice = createSlice(
    {
        name:"users",
        initialState,
        reducers:{}
    }
)

export const  selectAllUsers = (state:{users:usersliceProps[]})=>state.users

export default userSlice.reducer