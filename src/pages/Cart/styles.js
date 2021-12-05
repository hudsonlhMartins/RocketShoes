import styled from 'styled-components'
import {darken} from 'polished'


export const Container = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    padding: 2rem;
    background: #fff;
    border-radius: 0.25rem;
    margin-top: 2rem;

    h1{
        color: #000;
    }

    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 3rem;


        button {
            background: #53B3CB;
            color: #fff;
            border: 0;
            border-radius: 0.25rem;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.06, '#53B3CB')};
            }
        }
    }

`;

export const ProductTable = styled.table`

    width: 100%;
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;
    border-spacing: 1rem;

    th{
        color: #999;
        text-align: left;
        padding: 12px;
    }
    tbody{
        padding: 12px;


        tr{
            padding: 1rem;
            
            border: 1px solid #000 ;
        }
    }


    img{
        width: 100px;
    }

    strong{
        display: block;
        margin-top: 5px;
        font-size: 1rem;
        font-weight: 400;
        color: #000;
    }

    td button{
        background: transparent;
        border: 0;
        outline: none;

        svg{
            color: #53B3CB;
            transition: color 0.2s;


            &:hover{
                color: ${darken(0.1, '#53B3CB')};
            }
        }
    }
    td{
        span{
            color: #000;
            display: inline-block;
            margin-top: 0.3rem;
            font-size: 1.3rem;
            font-weight: bold;
            
        }
    }

`;


export const DIV = styled.div`
        display: flex;
        align-items: center;
        gap: 0.5rem;

        input{
            border: 1px solid #ddd;
            border-radius: 0.25rem;
            color: #666;
            padding: 0.3rem;
            width: 50px;
            text-align: center ;
        }

        svg{
            color: #53B3CB;
            transition: color 0.2s;


            &:hover{
                color: ${darken(0.1, '#53B3CB')};
            }
        }
        button{
            background: transparent;
            border: 0;
            outline: none;
        }
`;

export const Total = styled.div`

    span{
        font-size: 13px;
        color: var(--text-title);
        margin-right: 0.3rem;
        text-transform: uppercase;
    }
    strong{
        font-size: 1.5rem;
        color: #000;
    }



`;