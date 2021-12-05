import { useContext, useState } from 'react';
import {FiTrash, FiMinusCircle, FiPlusCircle} from 'react-icons/fi'
import Header from '../../components/Header'
import { CartContext } from '../../hooks/useCart';
import { Container, ProductTable, Total, DIV } from "./styles";


export default function Cart(){

    const {cart, setCart, updateProductAmount} = useContext(CartContext)

    const handleProductDecrement = (product)=>{
        updateProductAmount(product.id, product.amount-1)
    }


    const handleProductIncrement = (product)=>{
        updateProductAmount(product.id, product.amount+1)
    }


    const handleProductRemove = (id)=>{

        const dado = cart.filter(item =>{
             return item.id !== id
             
        })

        setCart(dado)
        localStorage.setItem('@Rocketseat:cart', JSON.stringify(dado))

    }


    const cartFormated = cart.map(item =>({
        ...item,
        subTotal: item.price * item.amount
    }))

    const total = cart.reduce((sumTotal, item)=>{
        return sumTotal + item.price * item.amount
    },0)

    return(
        <>
        <Header/>
        <Container>

            {cart == ''&&(
                <h1>Vc não tem item no carrinho</h1>
            )}

            <ProductTable>
                <thead>
                    <tr>
                        <th aria-label="product image" />
                        <th>Produto</th>
                        <th>QTD</th>
                        <th>Subtotal</th>
                        <th aria-label="delete icon" />
                    </tr>
                </thead>

                <tbody>

                    {cartFormated.map(item =>(

                        <tr key={item.id}>
                        <td>
                            <img src={item.image} />
                        </td>

                        <td>
                            <strong>{item.title}</strong>
                            <span> {new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(item.price)} </span>
                        </td>

                        <td>
                            <DIV>
                                <button
                                    onClick={()=>handleProductDecrement(item)}
                                >
                                    <FiMinusCircle size={18}/>
                                    
                                </button>

                                <input type='number' value={item.amount} />

                                <button
                                    onClick={()=> handleProductIncrement(item) }
                                >
                                    <FiPlusCircle size={18}/>
                                </button>
                            </DIV>
                        </td>

                        <td>
                            <strong>{new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(item.subTotal)}</strong>
                        </td>

                        <td>
                            <button
                                onClick={()=>{handleProductRemove(item.id)}}
                            >
                                <FiTrash size={18} color='#53B3CB'/>
                            </button>
                        </td>
                        </tr>


                    ))}

                </tbody>
            </ProductTable>


            <footer>
                <button>Finalizar Pedido</button>

                <Total>
                    <span>Total</span>
                    <strong>{new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(total)}</strong>
                </Total>
            </footer>


        </Container>
        </>
    )
}