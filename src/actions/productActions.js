import {FETCH_PRODUCTS} from "../types";

export const fetchProducts = () => async (dispatch) => {

   const res =  await fetch("/api/products", {
       headers : {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
       }
   });
   const data = await res.json();
   dispatch({
       type: FETCH_PRODUCTS,
       payload: data,
   })
}