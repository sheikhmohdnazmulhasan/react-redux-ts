import { createSlice } from '@reduxjs/toolkit';

// export interface TCounterState { count: number }
const initialState = { count: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        // increment the counter;
        increment: (state) => {
            state.count += 1;
        },

        // decrement the counter;
        decrement: (state) => {
            state.count -= 1;
        },

    }
});

export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;