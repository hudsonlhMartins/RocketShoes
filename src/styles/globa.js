import {createGlobalStyle} from 'styled-components'
import BackgoundImg from '../assets/background.svg'

export const GlobalStyled = createGlobalStyle`

    :root{
        --background: #0C090D;
        --shape: #fff;
        --blue: #53B3CB;
        --text-title: #4C4B4E;

    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        background:  #191920 url(${BackgoundImg}) no-repeat top;
        --webkit-font-smooth: antialiased;
        color: var(--shape);
        
    }

    html{
        @media (max-width: 1080px){
        font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 85.5%;
        }
    }
    
    button{
        cursor: pointer;
        border: 0;
    }

    body, input, button{
        font-family: 'Roboto', sans-serif;
    }


`;