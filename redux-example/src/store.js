import counterReducer from './reducers/counterReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store