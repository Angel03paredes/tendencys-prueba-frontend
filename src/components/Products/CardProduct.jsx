import React, { useEffect, useState } from 'react'
import {Card,CardContent,Typography,Button,CardActions} from "@mui/material"
import NewProduct from './NewProduct';

const CardProduct = ({products=[],addProduct}) => {

  function parsePrice(priceString) {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
}

function parseQuantity(quantityString) {
  return parseInt(quantityString, 10);
}

  const [total,setTotal] = useState("0.00")
  useEffect(()=>{
    const totalPrice = products.reduce((acc, obj) => {
      const price = parsePrice(obj?.price);
      const quantity = parseQuantity(obj?.quantity)
      return acc + (price * quantity);
  }, 0);
  setTotal(totalPrice)
  },[products])

  const [open,setOpen]=useState(false)

  const handleClose = ()=>{
    setOpen(false)
  }

  const handleOpen = ()=>{
    setOpen(true)
  }

  return (
   <>
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Total :
      </Typography>
      <Typography variant="h5" component="div">
        $ {total}
      </Typography>
     
    </CardContent>
    <CardActions >
      <div className='d-flex flex-column w-100'>
      <Button variant='contained' disableElevation className='w-100 mb-2' >Pagar</Button>
      <Button variant='outlined' disableElevation className='w-100' onClick={handleOpen}>Agregar Producto</Button>
      </div>
      
    </CardActions>
  </Card>
  <NewProduct open={open} addProduct={addProduct} handleClose={handleClose} />
   </>
  )
}

export default CardProduct