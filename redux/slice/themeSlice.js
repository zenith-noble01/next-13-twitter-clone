"use client"

import { createSlice } from "@reduxjs/toolkit";

const theme = JSON.parse(localStorage.getItem("theme")) || "light";

export const themeSlice = createSlice({
    name: "theme",
    initialState: theme ? theme : "light" || "dim" || "lightout",
    reducers: {
        toggleTheme: (state, action) => {
            localStorage.setItem(
                "theme",
                JSON.stringify(action.payload)
            );
            return action.payload
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;