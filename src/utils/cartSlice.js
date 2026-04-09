import { createSlice } from "@reduxjs/toolkit"

 export const cartSlice = createSlice(
     {
   name:'cart',
   initialState:{
    items :[
    ]
   },
   reducers:{
    addItem: (state, action)=>{
        const existingItem = state.items.find(item => item.card?.info?.id === action.payload.card?.info?.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.items.push({ ...action.payload, quantity: 1 });
        }
    },
    removeItem: (state, action)=>{
        const existingItemIndex = state.items.findIndex(item => item.card?.info?.id === action.payload.card?.info?.id);
        if (existingItemIndex >= 0) {
            if (state.items[existingItemIndex].quantity > 1) {
                state.items[existingItemIndex].quantity -= 1;
            } else {
                state.items.splice(existingItemIndex, 1);
            }
        }
    },
    clearCart:(state)=>{
        state.items.length = 0;
    }
   }
}

) ;

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer
