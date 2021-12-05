import { createContext, useEffect, useState } from "react";
import {api} from '../services/api'
export const CartContext = createContext([])


export default function CartProvider ({children}){

    const [cart, setCart] = useState([])



    const addProduct = async (idItem)=>{


        try{

           const updattedCart = [...cart]
           const productsExists = updattedCart.find(item => item.id === idItem)


           const stock = await api.get(`stock/${idItem}`)
           const stockAmount = stock.data.amount
           const currentAmount = productsExists ? productsExists.amount : 0
           const amount = currentAmount +1

           if(amount > stockAmount){
               alert('error')
               return
           }

           if(productsExists){
            productsExists.amount = amount
           }
           else{
            const product = await api.get(`/products/${idItem}`)


            const newProduct = {
                ...product.data,
                amount: 1
            }
            updattedCart.push(newProduct)

           }

           setCart(updattedCart)
           localStorage.setItem('@Rocketseat:cart', JSON.stringify(updattedCart))

        }catch(err){
            
        }
    }

    const updateProductAmount = async (id, amount)=>{

        try{

            if(amount < 0 ){
                return
            }

            const stock = await api.get(`/stock/${id}`)
            const stockAmount = stock.data.amount

            if(amount > stockAmount){
                alert('error')
                return
            }
            const updattedCart = [...cart]

            const productsExists = updattedCart.find(item => item.id === id)

            if(productsExists){
                productsExists.amount = amount
                // pega a visão, esta pegando o amount do cart mas com o find, que retunr o item correto
                setCart(updattedCart)
                localStorage.setItem('@Rocketseat:cart', JSON.stringify(updattedCart))
            }else{
                throw Error()
            }

        }catch{
            alert('error doido')
        }
    }



    return(
        <CartContext.Provider value={{addProduct, cart, setCart, updateProductAmount}}>
            {children}
        </CartContext.Provider>
    )
}