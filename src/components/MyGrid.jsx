import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'

import { items } from './itemsList'
import { addItem } from '../features/cart/cartSlice'

const useStyles = makeStyles((theme) => ({
  myGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '20px',
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 300,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 'auto',
    padding: '0 20px',
  },
  content: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cover: {
    width: 220,
    overflow: 'hidden',
    backgroundPosition: 'center center',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}))

const MyGrid = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <div>
      <Container maxWidth='lg'>
        <h1>Shop</h1>

        <div className={classes.myGrid}>
          {items.map((item, index) => (
            <Card className={classes.root} key={index}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component='h5' variant='h5'>
                    {item.name}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    ${item.price}
                  </Typography>
                </CardContent>
                <Button
                  variant='outlined'
                  color='default'
                  onClick={() => dispatch(addItem(item))}
                >
                  Add to cart
                </Button>
              </div>
              <CardMedia
                className={classes.cover}
                image={item.imageUrl}
                title={item.name}
              />
            </Card>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default MyGrid
