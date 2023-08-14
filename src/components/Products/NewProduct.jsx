import React, { useState } from 'react'
import {Dialog,DialogTitle,DialogContent,DialogContentText,TextField,Button,DialogActions} from "@mui/material"

const initialstate = {
    sku:{value:"",error:false},
    name:{value:"",error:false},
    quantity:{value:"",error:false},
    price:{value:"",error:false}
}

const NewProduct = ({open,handleClose,addProduct}) => {

    const [form,setform] = useState(initialstate)

    const handleChange = ({target})=>{
        const {name,value} = target
        setform({...form,[name]:{value}})
    }

    const handleAdd = ()=>{
        const sku = form?.sku?.value;
        const name = form?.name?.value;
        const price = form?.price?.value;
        const quantity = form?.quantity?.value;
        sku == "" ? setform({...form,sku:{error:true}}) : setform({...form,sku:{error:false}})
        name == "" ? setform({...form,name:{error:true}}) : setform({...form,name:{error:false}})
        quantity == "" ? setform({...form,quantity:{error:true}}) : setform({...form,quantity:{error:false}})
        price == "" ? setform({...form,price:{error:true}}) : setform({...form,price:{error:false}})

        if(sku == "" || name =="" || price =="" || quantity == "")
            return

        addProduct({sku,name,price,quantity})
        setform(initialstate)
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
            error={form?.sku?.error}
            helperText={form?.sku?.error ?`Este campo es obligatorio`:""}
            margin="dense"
            value={form?.sku?.value}
            onChange={handleChange}
            id="sku"
            name="sku"
            label="Sku"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            error={form?.name?.error}
            helperText={form?.name?.error ?`Este campo es obligatorio`:""}
            id="name"
            name="name"
            label="Name"
            value={form?.name?.value}
            onChange={handleChange}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="quantity"
            error={form?.quantity?.error}
            helperText={form?.quantity?.error ?`Este campo es obligatorio`:""}
            value={form?.quantity?.value}
            onChange={handleChange}
            name="quantity"
            label="Quantity"
            type="number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="price"
            error={form?.price?.error}
            helperText={form?.price?.error ?`Este campo es obligatorio`:""}
            value={form?.price?.value}
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