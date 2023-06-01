import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("theme")) || "light";

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            localStorage.setItem("theme", JSON.stringify(action.payload));
            return action.payload;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;