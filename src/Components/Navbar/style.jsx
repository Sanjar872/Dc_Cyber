import styled from "styled-components";

// import mui
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';

//bgc img
import Bgcimg from './../F-image/Navbar-bgc-img.png'
import { IconButton } from "@mui/material";

export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid red;
    background-image: url(${Bgcimg});
    background-size: cover;
    display: flex;
    flex-direction: column;
`

export const NavbarDiv = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 85px;

    @media screen and (max-width:1044px) {
        padding: 0px 40px;
    }
`

export const LogoDiv = styled.div`
    width: 195px;
    height: 45px;
    border: 1px solid yellow;
    
`

export const LogoImg = styled.img`
    width: 100%;
    height: 100%;
`

export const Contener = styled.div`
    width: 550px;
    height: 80px;
    border: 1px solid gray;
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
    border: 1px solid blue;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const LI = styled.li`
    width: 80px;
    height: 30px;
    border: 1px solid blueviolet;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: white;
`

export const MuiButton = styled(Button)`
    
`


export const Btnwrap = styled.div`
    display: none;
    
    @media (max-width:835px){
        display: block;
    }
`

    export const MenuBtn = styled(IconButton)`
        color: red !important;
        font-size: 40px !important;
    `


export const CenterText = styled.div`
    width: 100%;
    height: 300px;
    border: 2px solid blue;
`