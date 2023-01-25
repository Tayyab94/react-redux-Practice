import {createSlice} from "@reduxjs/toolkit"


const initialState={
    counterNo :1
}

export const customSlice= createSlice({
    name:"custom",
    initialState: initialState,
    reducers:{
        increment:(state, action)=>{
            state.counterNo +=1
        },decrement:(state, action)=>{
            state.counterNo -=1
        }
    }
})

export const {increment,decrement} = customSlice.actions

export default customSlice.reducer