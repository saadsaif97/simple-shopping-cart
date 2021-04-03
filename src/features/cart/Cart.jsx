import React from 'react'
import Container from '@material-ui/core/Container'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCart,
  increaseAmount,
  decreaseAmount,
  removeItem,
  emptyTheCart,
} from './cartSlice'

const Cart = () => {
  const { items } = useSelector(selectCart)
  const dispatch = useDispatch()
  console.log(items)

  let totalPrice = 0
  items.map((item) => (totalPrice += item.quantity * item.price))

  return (
    <Container maxWidth='lg'>
      <h1>Cart</h1>
      {items.length > 0 ? (
        <button onClick={() => dispatch(emptyTheCart())}>Empty the cart</button>
      ) : null}
      {items.length ? (
        items.map((item, index) => (
          <span
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '500px',
            }}
          >
            <button
              onClick={() => dispatch(removeItem(item))}
              style={{ marginRight: '5px' }}
            >
              x
            </button>
            <h3>{item.name}</h3>
            <button
              style={{ marginLeft: 'auto' }}
              onClick={() => dispatch(increaseAmount(item))}
            >
              +
            </button>
            <h3 style={{ margin: '0 5px' }}>{item.quantity}</h3>
            <button onClick={() => dispatch(decreaseAmount(item))}>-</button>
            <p style={{ marginLeft: '5px' }}>
              Amount: {item.quantity} X ${item.price} ={' '}
              {item.quantity * item.price}
            </p>
          </span>
        ))
      ) : (
        <h3>No item found</h3>
      )}

      <h2>Total: ${totalPrice}</h2>
    </Container>
  )
}

export default Cart
