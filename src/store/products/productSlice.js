import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  products:[],
};

const authSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //poner aqui los logins
    setProducts: (state, action) => {
     state.products = action.payload
      
    },
    addProduct:(state,action)=>{
      state.products = [...state.products,action.payload]
    }
  },
});



export const { setProducts,addProduct } = authSlice.actions;

export default authSlice.reducer;
