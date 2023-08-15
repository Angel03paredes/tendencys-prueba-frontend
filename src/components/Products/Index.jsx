import React from 'react'
import NavBar from '../Layout/NavBar'
import Tabla from './Tabla'
import { useSelector, useDispatch } from 'react-redux'
import { addProductsThunk ,addOneProductThunk} from "./../../store/products/productThunks"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Typography } from "@mui/material"
import CardProduct from './CardProduct'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Index = () => {
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch();

  const addProduct = (product)=>{
    dispatch(addOneProductThunk(product))
  }

  const navigate = useNavigate();
  return (
    <>
      <NavBar></NavBar>
      <div className="container mt-4">
       <div className="row">
       <div className="col-12 col-md-12 mb-1">
          <Button variant="text" color='inherit' startIcon={<ArrowBackIcon />} onClick={() => navigate("/orders")} >Regresar</Button>
        </div>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Productos
          </Typography>
        <div className="col-md-8 col-12 mb-2">
          
          <Tabla rows={products} ></Tabla>
        </div>
        <div className="col-md-4 col-12">
          <CardProduct products={products} addProduct={addProduct} />
        </div>
       </div>
      </div>
    </>
  )
}

export default Index