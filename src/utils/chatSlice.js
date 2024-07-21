import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        message: []
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.message.length > OFFSET_LIVE_CHAT) {
                state.message.shift();
            }

            state.message.push(action.payload);
        },
    }
});

export const { addMessage, removeMessage } = chatSlice.actions;
export default chatSlice.reducer; 