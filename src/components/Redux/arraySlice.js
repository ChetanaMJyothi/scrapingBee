import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrayVar: [],
  arryUrl: [],
}

export const arraySlice = createSlice({
  name: 'resultarray',
  initialState,
  reducers: {
    copyArray: (state,action) => {
      
      state.arrayVar = action.payload
    },
    copyUrl: (state,action) => {
      
      state.arryUrl = action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {  copyArray ,copyUrl} = arraySlice.actions

export default arraySlice.reducer