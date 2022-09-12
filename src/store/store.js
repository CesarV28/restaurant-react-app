import { configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './index'

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
  },
})