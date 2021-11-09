import {configureStore} from '@reduxjs/toolkit';
import {todoConfigSlice} from './todoConfig'
const store = configureStore({
  reducer: {
    todoConfig: todoConfigSlice.reducer
  }
})

export { store }