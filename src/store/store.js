import { configureStore } from "@reduxjs/toolkit"
import { CounterSlices } from "./CounterSlice/CounterSlices"

export const store = configureStore({
    reducer: {
        // Counter: CounterSlices,
    },
})