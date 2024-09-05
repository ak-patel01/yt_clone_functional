import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        add: (state, action) => {
            return action.payload;   // action.payload - input parameter you send - post
        },
        // remove: (state) => {
        //     return "";  // returning an empty string to reset the state
        // }
    },
});

export const LiveSlice = createSlice({
    name: 'live',
    initialState: [],
    reducers: {
        liveAdd: (state, action) => {
            state.push(action.payload);
        },
        liveRemove: (state) => {
            state.shift();
            return state; 
        }
    },
});

export const { add, remove } = SearchSlice.actions;
export const { liveAdd, liveRemove } = LiveSlice.actions;

// Export the reducers with named exports
export const searchReducer = SearchSlice.reducer;
export const liveReducer = LiveSlice.reducer;
