import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    max-width: 1080px;
    margin: 0 auto;
`;

export const Content = styled.div`
    padding: 4rem 0 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Cart = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;


    div{
        display: flex;
        flex-direction: column;

        span{
            align-self: flex-end;
            color: var(--text-title);
        }
    }
`;

export const LINK = styled(Link)`

    text-decoration: none;
    strong{
        color: #fff;
    }

`