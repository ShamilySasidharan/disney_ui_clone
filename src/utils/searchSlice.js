import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        showSearchPage : false,
    },
    reducers : {
        toggleSearchPage:(state)=>{
        state.showSearchPage = !state.showSearchPage
        }
    }

})
export const{toggleSearchPage} = searchSlice.actions
export default searchSlice.reducer