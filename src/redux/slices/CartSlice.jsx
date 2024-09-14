import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:{value:[],
                update: true},
    reducers:{
        add:(state,action) => {
            state.value.push(action.payload);
            
        },
        remove:(state,action) => {
            state.value =  state.value.filter((item) => item.id !== action.payload);
        },
        updatered :(state,action)=>{
            state.update = action.payload;
        }
    }
});

export const {add, remove,updatered} = CartSlice.actions;
export default CartSlice.reducer;
