import styled from "styled-components";

// import mui
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';

//bgc img
import Bgcimg from './../F-image/Bgc-img.jpg'
import { IconButton } from "@mui/material";

export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;  
    /* border: 1px solid red; */
    background-image: url(${Bgcimg});
    background-size: cover;
    display: flex;
    flex-direction: column;
     box-shadow: 0px 1px 10px #999;
    @media (max-width:390px) {
        height: 60vh;
        width: 100% !important;
    }
`

export const Buttons = styled.button`
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    color: #fff;
    width: 171px;
    height: 45px;
    font-size: 22px;
    line-height: 42px;
    padding: 0;
    border: none;
    background: #8F00FF;

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



`



export const NavbarDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 85px;
    position: fixed;
    z-index: 999;


    @media screen and (max-width:1044px) {
        padding: 0px 40px;
    }

    @media (max-width:391px) {
        
        width: 100% !important;
    }
`

export const LogoDiv = styled.div`
    width: 195px;
    height: 45px;
    /* border: 1px solid yellow; */
    @media (max-width:391px) {
       width :150px ;
       height: 35px;
       margin-left: -20px;
       
    }
`

export const LogoImg = styled.img`
    width: 100%;
    height: 100%;
`

export const Contener = styled.div`
    width: 550px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    @media screen and (max-width:835px) {
        display:none ;
    }
`

export const UL = styled.ul`
    width: 380px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const LI = styled.li`
    width: 80px;
    height: 30px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: white;

    &:hover{
        cursor: pointer;
        /* transition: 1s; */
        opacity: 0.89;
        border-bottom: 3px solid ;
        border-image-slice: 1;
        border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));
    }
`

export const MuiButton = styled(Button)`
    background-color: #8F00FF !important;
    


    &:hover{
        background-color:#7000E0 !important;
    }
`


export const Btnwrap = styled.div`
    display: none;
    
    @media (max-width:835px){
        display: block;
    }
`

    export const MenuBtn = styled(IconButton)`
        color: white !important;
        font-size: 40px !important;
    `


export const CenterText = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextDiv = styled.div`
    width: 72%;
    height: 270px;
    box-sizing: border-box;
    display: flex;
    align-items: center;


    @media (max-width:390px) {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 50px !important;
    }
`
export const Text = styled.h1`
    color: white;
    font-size: 60px;
    text-align: center;

    @media screen and (max-width:1033px) {
        /* font-size: 50px; */
    }

    @media screen and (max-width:832px) {
        font-size: 40px;
    }

    @media screen and (max-width:665px) {
        font-size: 35px;
    }

    @media screen and (max-width:598px) {
        font-size: 30px;
    }

    @media screen and (max-width:517px) {
        font-size: 25px;
    }
    @media screen and (max-width:390px) {
        font-size: 25px !important;
        width: 90% !important;
    }
`
export const SpanText = styled.span`
    color: #8F00FF;
`