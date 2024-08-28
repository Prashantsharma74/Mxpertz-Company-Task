import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isSuccess: true,
    isError: false,
    isLoading: false,
    selectedProduct: null
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
            state.isError = false
        })
        builder.addCase(fetchData.rejected, state => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.products = null
        })
        builder.addCase(fetchDataById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchDataById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.selectedProduct = action.payload;
            state.isError = false;
        });
        builder.addCase(fetchDataById.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.selectedProduct = null;
        });
    }
})

export default productSlice.reducer

export const fetchData = createAsyncThunk('Fetch_Data', async () => {
    const res = await fetch(`https://mxpertztestapi.onrender.com/api/adventure`)
    const data = await res.json();
    return data;
});

export const fetchDataById = createAsyncThunk('fetchDataById', async (item) => {
    const res = await fetch(`https://mxpertztestapi.onrender.com/api/adventure/${item._id}`);
    const data = res.json();
    return data;
});
