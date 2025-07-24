import { configureStore } from "@reduxjs/toolkit";
import authreducer from '../features/slice/authslice'
export const store=configureStore({
    reducer:{
        auth: authreducer
    }
})