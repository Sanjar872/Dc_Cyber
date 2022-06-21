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
    border: none;
    cursor: pointer;

    &:active{
        opacity: 0.89;
        border-bottom: 3px solid ;
        border-image-slice: 1;
        border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));
    }
   
`

//vs startt====================================================================

export const Comands = styled.div`
    width: 100%;
    height: 1000px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;

`

export const Para = styled.div`
    width: 100%;
    height: 214px;
    border: 1px solid red;
    display: flex;
`

export const Conteyner1 = styled.div`
    width: 50%;
    height: 100%;
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box1 = styled.div`
    width: 216px;
    height: 214px;
    /* border: 1px solid yellow; */
`

export const VS = styled.div`
    width: 150px;
    height: 100%;
    /* border: 2px solid red; */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 700;
`

export const Box2 = styled.div`
    width: 216px;
    height: 214px;
    /* border: 1px solid yellow; */
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
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const GroupName = styled.h1`
    color: white;
    font-weight: 300;
`

export const Data = styled.p`
    color: gray;
`

