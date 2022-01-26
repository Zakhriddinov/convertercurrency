import { configureStore } from "@reduxjs/toolkit";
import convertedReducer from './convertedReducer'
export default configureStore({
   reducer: {
      converter: convertedReducer
   }
})