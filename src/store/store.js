import { configureStore } from "@reduxjs/toolkit";
import bookFormReducer from "../features/BookForm/bookFormSlice";

const store = configureStore({
    reducer: {
        bookForm: bookFormReducer,
    },
});
export default store;
