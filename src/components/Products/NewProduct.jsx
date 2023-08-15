import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Button, DialogActions } from "@mui/material"
import Swal from "sweetalert2"

const initialstate = {
    sku: "",
    name: "",
    quantity: "",
    price: ""
}

const initialstateError = {
    sku: false,
    name: false,
    quantity: false,
    price: false
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

const NewProduct = ({ open, handleClose, addProduct }) => {

    const [form, setform] = useState(initialstate)
    const [error, setError] = useState(initialstateError)

    const handleChange = ({ target }) => {
        const { name, value } = target
        setform({ ...form, [name]: value })
    }

    const handleAdd = () => {
        const sku = form?.sku;
        const name = form?.name;
        const price = form?.price;
        const quantity = form?.quantity;

        setError({
            sku:sku == "" ? true:false,
            name:name == "" ? true:false,
            price:price == "" ? true:false,
            quantity:quantity == "" ? true:false
        })

       

        if (sku == "" || name == "" || price == "" || quantity == "")
            return

        addProduct({ sku, name, price, quantity })
        setform(initialstate)
        setError(initialstateError)
      
          
          Toast.fire({
            icon: 'success',
            title: 'Producto agregado'
          })
        handleClose()
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Producto</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <TextField
                        autoFocus
                        error={error?.sku}
                        helperText={error?.sku ? `Este campo es obligatorio` : ""}
                        margin="dense"
                        value={form?.sku}
                        onChange={handleChange}
                        id="sku"
                        name="sku"
                        label="Sku"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        error={error?.name}
                        helperText={error?.name ? `Este campo es obligatorio` : ""}
                        id="name"
                        name="name"
                        label="Name"
                        value={form?.name}
                        onChange={handleChange}
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="quantity"
                        error={error?.quantity}
                        helperText={error?.quantity ? `Este campo es obligatorio` : ""}
                        value={form?.quantity}
                        onChange={handleChange}
                        name="quantity"
                        label="Quantity"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="price"
                        error={error?.price}
                        helperText={error?.price ? `Este campo es obligatorio` : ""}
                        value={form?.price}
                        onChange={handleChange}
                        name="price"
                        label="Price"
                        type="number"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd}>Agregar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default NewProduct