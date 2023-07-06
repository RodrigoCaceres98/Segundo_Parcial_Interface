import { createSlice } from '@reduxjs/toolkit'

const CounterSlices = createSlice({
    name: 'counter',
    initialState: {
        counter: 10,
    },
    reducers: {
        increment: (state, actions) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
              state.counter += 1
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment } = CounterSlices.actions

export default  CounterSlices.reducer

