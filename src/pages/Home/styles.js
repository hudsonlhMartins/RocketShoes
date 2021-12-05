import styled from "styled-components";


export const Container = styled.main`
    max-width: 1080px;
    margin: 0 auto;



    footer{
    display: flex;
    justify-content: center;
        
    }
`;

export const Content = styled.ul`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 2rem;
        gap: 2rem;

    li{
        display: flex;
        flex-direction: column;
        background: var(--shape);
        padding: 1rem 1.5rem;
        border-radius: 0.25rem;
    }

    img{
        width: 250px;
        height: 250px;
        object-fit: cover;
    }

    i{
        color: var(--background);
        font-size: 0.8rem;
    }
    strong{
        color: #171717;
        font-size: 1.2rem;
        margin-top: 0.1rem;
    }

    button{
        display: flex;
        align-items: center;
        margin-top: 1rem;
        overflow: hidden;
        

        background: var(--blue);
        border-radius: 0.25rem;
        color: #171717;
        font-weight: bold;
        text-transform: uppercase;
        gap: 1rem;

        div{
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0,0,0, 0.1);

            svg{
                margin-right: 5px;
            }
            
        }
    }
`;


export const Footer = styled.footer`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    padding: 4rem;

    background: rgba(0,0,0, 0.5);

    div{

        h2{
            color: var(--text-title);
        }
        p{
            color: var(--text-body);
            text-align: center;
        }
    }

`;