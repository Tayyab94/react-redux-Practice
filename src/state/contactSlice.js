import {createSlice} from "@reduxjs/toolkit"


const initialState={
    contact:null,
    toshow:false
}



export const ContactSlice=createSlice({
    name:'contactus',
    initialState:initialState,
    reducers:{
        saveContact:(state,action)=>{
            const newuser= action.payload
            return {
                contact:  newuser
            }
        },
        removeContact:(state, action)=>{
            state.contact= null
        }
    }
})

export const {saveContact, removeContact}= ContactSlice.actions

export default ContactSlice.reducer