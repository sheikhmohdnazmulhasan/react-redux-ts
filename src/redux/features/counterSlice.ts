import { createSlice } from '@reduxjs/toolkit';

interface TCounterState { count: number }

const initialState: TCounterState = { count: 0 };


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {}
});