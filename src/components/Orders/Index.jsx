import React, { useEffect } from 'react'
import NavBar from '../Layout/NavBar'
import OrdersHooks from "./../../hooks/OrdersHooks"
import ListOrders from './ListOrders'
import { useSelector,useDispatch } from 'react-redux'
import {addProductsThunk} from "./../../store/products/productThunks"
import { useNavigate } from 'react-router-dom'

const Index = () => {

  const dispatch = useDispatch()
   
    const product = useSelector(state=>state.products)
    const {getOrders,orders,loading} = OrdersHooks()


    const navigate = useNavigate()

    const handleOrderClick = (items)=>{
      dispatch(addProductsThunk(items))
      navigate("/products");
    }

    useEffect(()=>{
      getOrders();
    },[])

  return (
    <>
        <NavBar></NavBar>
        <div className="container mt-4 p-2">
        <ListOrders orders={orders} loading={loading} handleOrderClick={handleOrderClick} />
        </div>
    </>
  )
}

export default Index