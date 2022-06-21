import styled from "styled-components";

// image
import BgcCalash from '../S-image/Calash.png'

export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color:#160448;
    padding: 30px 0px;
    position: relative;
`

export const BgcCalashDiv = styled.div`
    width:600px;
    height: 200px;
    /* border: 1px solid green; */
    background-image: url(${BgcCalash});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    

`

export const NavbarDiv = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid red;
    display: flex;
`

export const NameText = styled.div`
    width: 35%;
    height: 100%;
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Name = styled.h1`
    color: white;
`

export const ULdiv = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid yellow;
`


export const Ul = styled.ul`
    width: 600px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid white;
`

export const LI = styled.li`
    width: 70px;
    height: 30px;
    border: 1px solid white;
    color: white;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    opacity: 0.89;
    border-bottom: 3px solid ;
    border-image-slice: 1;
    border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));
`

