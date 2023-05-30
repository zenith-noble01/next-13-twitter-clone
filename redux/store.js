"use client"

import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./slice/CounterSlice"

export const store = configureStore({
    reducer: {
        count: CounterSlice
    }
})