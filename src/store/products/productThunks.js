import { addProduct,setProducts} from "./productSlice";

export const addProductsThunk = (products)=>{
    return async (dispatch)=>{
        // aqui dee de start el axios o fetch
        dispatch(setProducts(products));

    }
}

export const addOneProductThunk = (product)=>{
    return async (dispatch)=>{
        // aqui dee de start el axios o fetch
        dispatch((addProduct(product)));

    }
}

