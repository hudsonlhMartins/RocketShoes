import { FiShoppingCart } from 'react-icons/fi'

import {Container, Content, Footer} from './styles'
import Header from '../../components/Header'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../hooks/useCart'
import { api } from '../../services/api'

export default function Home(){

    const {addProduct, cart} = useContext(CartContext)
    const [products, setProducts] = useState([])

 



    useEffect(()=>{

        const loadApi = async ()=>{
            const res = await api.get('/products')
            setProducts(res.data)
        }   

        loadApi()
        

    },[])


    const handleAddProduct = (id)=>{
        addProduct(id)
    }


    const createItensAmount = cart.reduce((sumAmount, item)=>{
        const newSumAmount = {...sumAmount}
        newSumAmount[item.id] = item.amount

        return newSumAmount
    },{})


    return(
        <>

        <Header/>

        <Container>

            <Content>
                {products.map(item =>(
                    <li key={item.id}>
                        <img src={item.image} />
                        <i>{item.title}</i>
                        <strong>
                            {new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(item.price)}
                           </strong>

                        <button type='button'
                            onClick={()=> handleAddProduct(item.id)}
                        >

                            <div>
                                <FiShoppingCart size={16} color='#000'/>
                                {createItensAmount[item.id] || 0}
                            </div>

                            <span>Adicionar no carrinho</span>
                        </button>
                </li>
                ))}
                


            </Content>

        </Container>
            <Footer>
                <div>
                    <h2>Criando por hudson martins</h2>
                    <p>Inspirado no desfio da Rockeset</p>
                </div>
            </Footer>
        </>
    )
}