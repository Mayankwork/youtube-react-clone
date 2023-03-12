import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            console.log(LIVE_CHAT_COUNT)
            state.messages.splice(LIVE_CHAT_COUNT,1);
            state.messages.push(action.payload)
        }
    }

})
export const {addMessage} = chatSlice.actions
export default chatSlice.reducer