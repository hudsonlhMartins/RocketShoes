import LogoImg from '../../assets/logo.svg'
import {FiShoppingCart} from 'react-icons/fi'
import {Link} from 'react-router-dom'


import { Container, Content, Cart, LINK } from "./styles";
import { useContext } from 'react';
import { CartContext } from '../../hooks/useCart';




export default function Header (){

    const {cart} = useContext(CartContext)

    const cartSize = cart.length


    return(
        <Container>

            <Content>

                <Link to='/'>
                    <img src={LogoImg} alt='imagem logo' />
                </Link>

                <LINK to ='/cart'>
                <Cart>
                    
                    <div>
                        <strong>Meu carrinho</strong>
                        <span>
                            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
                        </span>
                    </div>

                    <FiShoppingCart color='#fff' size={24} />
                    
                </Cart>
                </LINK>
            </Content>


        </Container>
    )
}