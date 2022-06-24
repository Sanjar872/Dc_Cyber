import styled from "styled-components";
import rasm1 from "../S-image/zapis_img.png"

export const Container = styled.div`
    width:100%;
    height:50vh;
    background-image:url(${rasm1});
    background-repeat:no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: start;
    
    
    @media (max-width:391px) {
        text-align:center;
        width:100%;
        display:flex;
        justify-content:center;
    }



    h2 {
        color:white;
        width:65%;
        font-size: 36px;
        letter-spacing: 5px;
        font-weight: 700;


        @media (max-width:1056px) {
            font-size: 32px;
        }

        @media (max-width:834px) {
            font-size: 30px;
        }
        

        @media (max-width:820px) {
            text-align:center;
            display:flex;
            width:100% !important;
            justify-content:center;
        }

        }

        @media (max-width:517px) {
            text-align:center;
            /* height: 600px; */
            width:100% !important;
        }

        @media (max-width:391px) {
        text-align:center;
        width:100%;
        /* height:auto; */
        display:flex;
        /* padding:0 5%; */
        line-height: 30px;
        font-size: 24px;
        justify-content:center;

          

    }

`

export const BO = styled.div`
    width: 100%;
    height: auto;
    padding:0 5%;

    @media (max-width:600px) {
        font-size: 14px !important;
        width: 100%;
        height: auto;

        h2 {
            font-size: 20px;
        }
    }

    button {
        border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    margin-top: 20px;
    color: #fff;
    width: 171px;
    height: 45px;
    font-size: 22px;
    line-height: 42px;
    padding: 0;
    border: 0.3px dotted grey;
    /* background: #8F00FF; */

    &:hover{
        background: transparent;
        box-shadow:none;
    }

    &::before,::after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: linear-gradient(92.49deg, #AD00FF 14.3%, #00E0FF 100%);
        transition:400ms ease all;
    }

    &::after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }

    &:hover::before,:hover::after{
        width:100%;
        transition:800ms ease all;
    }
        
    }
`