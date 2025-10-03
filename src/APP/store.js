import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage, savetoLocalStorage } from "../utils/localStorage";
import postReducer from '../Features/postSlice'

const preloadedState = {
    postFood : {
        foodList: loadFromLocalStorage("foodList") || []
    }
}
export const store = configureStore({
  reducer: {
    postFood: postReducer, 
  },
  preloadedState,
});
