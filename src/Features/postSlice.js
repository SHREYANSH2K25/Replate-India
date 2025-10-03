import {createSlice, nanoid} from '@reduxjs/toolkit'
import { savetoLocalStorage } from '../utils/localStorage'

const initialState = {
    foodList :[],
}

export const postSlice = createSlice({
    name : 'postFood',
    initialState,
    reducers: {
        addFood : (state,action) => {
            const food = {
                id : nanoid(),
                ...action.payload,
                status: "Fresh"
            }
            state.foodList?.push(food)
            savetoLocalStorage("foodList",state.foodList)
        }
    }
})

export const {addFood} = postSlice.actions

export default postSlice.reducer