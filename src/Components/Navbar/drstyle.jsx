import styled from "styled-components";


export const MenuBrend = styled.div`
    width: 100%;
    height: 95px    ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid grey ;
    
`

export const Brendimg = styled.img`
    width: 165px;
`

export const Localniset = styled.div`
    width: 100%;
    height: 55px;
    position: absolute;
    bottom: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        width: 100%;
        border-top: 2px solid grey;
        display: flex;
        padding-top: 7px;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    div img {
        width:25px ;
        /* transform: skew(-20deg); */
    }
`