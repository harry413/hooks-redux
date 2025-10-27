import { createSlice } from "@reduxjs/toolkit"

const goldSlice = createSlice({
    name :"gold",
    initialState: { rate: 0 },
    reducers: {
        updateGoldRate:(state, action) => {
            state.rate = action.payload
        }
    }
})

export const { updateGoldRate } = goldSlice.actions;
export default goldSlice.reducer;