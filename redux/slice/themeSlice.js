"use client"

import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: "light",
    reducers: {
        toggleTheme: (state, action) => {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem("theme", action.payload);
                return action.payload;
            } else {
                return state;
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;