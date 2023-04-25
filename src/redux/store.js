import { configureStore } from "@reduxjs/toolkit";
import audioSlice from "./musicReducer";

const store = configureStore({
    reducer: {
        counter: audioSlice,
    },
});

export default store;
