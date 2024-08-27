import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productsSlice"

const store = configureStore({
    reducer: {
        products: productReducer
    }
})

export default store