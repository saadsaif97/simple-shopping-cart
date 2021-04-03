import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload

      // if item already in state
      //    increase its quantity and don't add to cart
      // else
      //    set its quantity equal to 1 and add to cart

      const itemAlreadyInCart = state.items.some(
        (item) => item.id === newItem.id
      )

      if (itemAlreadyInCart) {
        state.items.map((item) =>
          item.id === newItem.id ? (item.quantity += 1) : null
        )
      } else {
        state.items = [...state.items, { ...newItem, quantity: 1 }]
      }
    },
    removeItem: (state, action) => {
      console.log('removed')
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    increaseAmount: (state, action) => {
      console.log('increase')
      state.items.map((item) =>
        item.id === action.payload.id ? (item.quantity += 1) : null
      )
    },
    decreaseAmount: (state, action) => {
      console.log('decrease')

      // if quantity greater than 1, decrease the amount else if amount is 1 delete the item

      state.items.filter((item) => {
        if (item.id === action.payload.id && item.quantity > 1) {
          console.log('decrease count')
          item.quantity -= 1
        } else if (item.id === action.payload.id && item.quantity === 1) {
          console.log('delete')
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          )
        }
      })
    },
    emptyTheCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addItem,
  removeItem,
  increaseAmount,
  decreaseAmount,
  emptyTheCart,
} = cartSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.cart

export default cartSlice.reducer
