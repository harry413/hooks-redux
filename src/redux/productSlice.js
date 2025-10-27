import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name :"product",
    initialState: {
        items: [
            { id: 1, name: "Gold Necklace", price: 50000, category: "Gold" },
      { id: 2, name: "Diamond Ring", price: 90000, category: "Diamond" },
      { id: 3, name: "Silver Bracelet", price: 2000, category: "Silver" },
        ]
    },
    reducers: {
        addProducts:(state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;