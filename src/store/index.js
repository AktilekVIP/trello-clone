import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./todoSlice";


const store = configureStore({
    reducer:{
        lists: listSlice.reducer,

    }
})
export default store