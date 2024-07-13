import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpened: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpened = !state.isMenuOpened;
        },
        closeMenu: (state) => {
            state.isMenuOpened = false
        }
    }
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;