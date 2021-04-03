import React from 'react'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { makeStyles, Badge } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../features/cart/cartSlice'

const useStyles = makeStyles({
  root: {
    '& a': {
      textDecoration: 'none',
      color: 'white',
    },
  },

  active: {
    borderBottom: '1px solid white',
  },

  link: {
    marginRight: '20px',
  },
})

const Header = () => {
  const classes = useStyles()
  const cart = useSelector(selectCart)

  return (
    <AppBar position='fixed' color='primary' className={classes.root}>
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography variant='h6' style={{ marginRight: 'auto' }}>
            Shopping Cart
          </Typography>
          <Typography className={classes.link}>
            <NavLink to='/'>Shop</NavLink>
          </Typography>
          <Typography className={classes.link}>
            <NavLink to='/cart'>Cart</NavLink>
          </Typography>
          {cart.items.length > 0 ? (
            <NavLink to='/cart'>
              <Badge badgeContent={cart.items.length} color='secondary'>
                <ShoppingCartIcon />
              </Badge>
            </NavLink>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
