
'use client'
import { configureStore } from '@reduxjs/toolkit'
import carAddedProduct from './featuers/cartSlice'

const store = configureStore({
  reducer: {
    cartAdded:carAddedProduct,
  },
})

export default store