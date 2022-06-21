import styled from "styled-components";

// image
import TurnirBgc from '../S-image/Turnir.bgc-img.png'

export const MainDiv = styled.div`
    width: 100%;
    height: auto;
    background-image: url(${TurnirBgc});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 30px 0px;
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
    /* font-weight: 300; */
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
    /* font-weight:; */
    border: none;
    /* font-family: 'Montserrat' !important; */
    opacity: 0.89;
    border-bottom: 3px solid ;
    border-image-slice: 1;
    border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));
`

//vs startt

export const Para = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid black;
    margin-top: 160px;
    display: flex;
`

export const Conteyner1 = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box1 = styled.div`
    width: 216px;
    height: 100%;
    border: 1px solid yellow;
`

export const VS = styled.div`
    width: 150px;
    height: 100%;
    border: 2px solid red;
`

export const Box2 = styled.div`
    width: 216px;
    height: 100%;
    border: 1px solid yellow;
`

export const BoxImg1 = styled.img`
    width: 100%;
    height: 100%;
`
export const BoxImg2 = styled.img`
    width: 100%;
    height: 100%;
`






















export const Conteyner2 = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid blue;
`

