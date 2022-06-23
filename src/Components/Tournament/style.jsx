import styled from "styled-components";

// image
import TurnirBgc from '../S-image/Turnir.bgc-img.png'

//Mui import 
import Button from '@mui/material/Button';

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
    /* border: 1px solid red; */
    display: flex;

    @media screen and (max-width:674px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 150px;

    }
`

export const NameText = styled.div`
    width: 35%;
    height: 100%;
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px  0px 0px 25px;

    @media screen and (max-width:650px){
        width: 100%;
    }
`

export const Name = styled.h1`
    color: white;


    @media screen and (max-width:1028px){
        font-size: 25px;
    }

    @media screen and (max-width:815px){
        font-size: 20px;
    }

    
`

export const ULdiv = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid yellow; */

    @media screen and (max-width:543px) {
        width: 100%;
    }
`


export const Ul = styled.ul`
    width: 600px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid white; */

    @media (max-width:413px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const LI = styled.li`
    width: 70px;
    height: 30px;
    /* border: 1px solid white; */
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

    @media screen and (max-width:363px) {
        font-size: 13px;
        width: 59px;
    }
   
`

//vs startt====================================================================

export const Comands = styled.div`
    width: 100%;
    height: 1000px;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;

    @media screen and (max-width:950px) {
        height: 1400px;
    }

`

export const Para = styled.div`
    width: 100%;
    height: 214px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;

    @media screen and (max-width:950px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 400px;
    }
`

export const Conteyner1 = styled.div`
    width: 750px;
    height: 100%;
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;



    @media screen and (max-width:753px){
        width: 650px;
    }

    @media screen and (max-width:652px){
        width: 600px;
    }

    @media screen and (max-width:607px) {
        padding: 0px 20px 0px 20px;
    }

    @media screen and (max-width:602px) {
        width:500px ;
    }

    @media screen and (max-width:503px) {
        width:450px;
    }

    @media screen and (max-width:454px) {
        width: 400px;
        height: 200px;
    }

    @media screen and (max-width:408px) {
        width:350px;
    }
`

export const Box1 = styled.div`
    width: 200px;
    /* height: 214px; */

    @media screen and (max-width:602px) {
        height: 190px;
    }

    @media screen and (max-width:503px) {
        height: 170px;
    }

    @media screen and (max-width:454px) {
        height: 150px;
    }

    @media screen and (max-width:408px) {
        height:130px;
    }
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

    @media screen and (max-width:599px) {
        width: 100px;
    }

    @media screen and (max-width:602px) {
        height: 190px;
    }

    @media screen and (max-width:503px) {
        height: 170px;
    }

    @media screen and (max-width:454px) {
        height: 150px;
    }

    @media screen and (max-width:408px) {
        height:130px;
    }
`

export const Box2 = styled.div`
    width: 200px;
    /* height: 214px; */

    @media screen and (max-width:602px) {
        height: 190px;
    }

    @media screen and (max-width:503px) {
        height: 170px;
    }

    @media screen and (max-width:454px) {
        height: 150px;
    }

    @media screen and (max-width:408px) {
        height:130px;
    }
    
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
    width: 750px;
    height: 100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width:950px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:753px){
        width: 650px;
    }

    @media screen and (max-width:652px){
        width: 600px;
    }

    @media screen and (max-width:604px) {
        width: 500px;
        height: 150px;
    }

    @media screen and (max-width:503px) {
        width:450px;
    }

    @media screen and (max-width:454px) {
        width: 400px;
        height: 120px;
    }

    @media screen and (max-width:408px) {
        width:350px;
    }

`

export const GroupName = styled.h1`
    color: white;
    font-weight: 300;

    @media screen and (max-width:604px) {
        font-size: 26px;
    }

    @media screen and (max-width:503px) {
        font-size: 23px;
    } 

    @media screen and (max-width:454px) {
        font-size: 20px;
    }

    @media screen and (max-width:408px) {
        font-size: 17px;
    }


`

export const Data = styled.p`
    color: gray;
`

export const ButtonDiv = styled.div`
    width: 100%;
    height: 40px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: flex-end;
    padding: 0px 80px 0px 0px;
`

export const MuiButton = styled(Button)`
    color: white !important;
    font-weight: 500 !important;
    opacity: 0.89 !important;
    border: 2px solid !important;
    border-image-slice: 1 !important;
    border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1)) !important;
`

///======== Photo albom ================================================================================================

export const PhotoAlbum = styled.div`
    width: 100%;
    height: 850px;
    border: 1px solid white;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const CardText = styled.div`
    width: 100%;
    height: 70px;
    border: 1px solid yellow; 
    color: white;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 0px 0px 107px;
    

    @media (max-width:1376px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
`

export const AllPhotoDiv = styled.div`
    width: 1300px;
    height: auto;
    opacity: 0.89;
    border: 3px solid ;
    border-image-slice: 1;
    border-radius: 8px;
    border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));


    @media  (max-width:1420px) {
        transform: scale(0.9);

    }

    @media (max-width:1280px) {
        transform: scale(0.8);
    }

    @media (max-width:1113px) {
        transform: scale(0.7);
    }

    @media (max-width:993px) {
        transform: scale(0.6);
    }

    @media (max-width:785px) {
        display: none;
    }
`

export const ForstDiv = styled.div`
    width: 100%;
    height: 50%;
    border: 1px solid red;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Card1 = styled.div`
    width: 401px;
    height: 383px;
    /* border: 1px solid black; */
`
export const CardImg = styled.img`
    width: 100%;
    height: 100%;
`

//====
export const Card2 = styled.div`
    width: 401px;
    height: 383px;
    /* border: 1px solid red; */
`

export const CardIn1 = styled.div`
    width: 100%;
    height: 50%;
    /* border: 1px solid white; */
`
export const CardIn2 = styled.div`
    width: 100%;
    height: 50%;
    /* border: 1px solid white; */
`

export const CardImgIn1 = styled.img`
    width: 100%;
    height: 100%;
`

export const CardImgIn2 = styled.img`
    width: 100%;
    height: 100%;
`

//============

export const Card3 = styled.div`
    width: 278px;
    height: 382px;
    /* border: 1px solid gray; */
`
export const CardImg3 = styled.img`
    width: 100%;
    height: 100%;
`

//===============

export const Card4 = styled.div`
    width: 320px;
    height: 382px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
`

export const CardIn11 = styled.div`
    width: 100%;
    height: 50%;
    /* border: 1px solid white; */
`


export const CardIn22 = styled.div`
    width: 100%;
    height: 50%;
    /* border: 1px solid black; */
`
export const CardImg11 = styled.img`
    width: 100%;
    height: 100%;
`
export const CardImg22 = styled.img`
    width: 100%;
    height: 100%;
`

// Second div start ======================================


export const SecondDiv = styled.div`
    width: 100%;
    height: 50%;
    border: 1px solid gray;
    display: flex;
    flex-wrap: wrap;
`

export const CardDiv1 = styled.div`
    width: 370px;
    height: 383px;
    border: 1px solid blue;
`

export const CardDivIn1 = styled.div`
    width: 100%;
    height: 50%;
    border: 1px solid yellow;
`

export const CardDivIn2 = styled.div`
    width: 100%;
    height: 50%;
    border: 1px solid red;
`

export const CardDivInImg1 = styled.img`
    width: 100%;
    height: 100%;
`

export const CardDivInImg2 = styled.img`
    width: 100%;
    height: 100%;
`

//========================

export const CardDiv2 = styled.div`
    width: 600px;
    height: 382px;
    border: 1px solid green;
`
export const CardDivImg2 = styled.img`
    width: 100%;
    height: 100%;
`

// ==========================

export const CardDiv3 = styled.div`
    width:320px;
    height: 382px;
    border: 1px solid blue;
`

export const CardDivImg3 = styled.img`
    width: 100%;
    height: 100%;
`

// CardDiv start ================================================

export const Square = styled.div`
    width: 100%;
    height: 300px;
    border: 2px solid green;
    margin-top: 150px;
    display: flex;
    justify-content: space-around;
    padding:0px 40px;
`

export const Boxs = styled.div`
    width: 335px;
    height: 100%;
    opacity: 0.89;
    border: 3px solid ;
    border-image-slice: 1;
    border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 40px 0px;
`


export const Number = styled.h1`
    color: white;
    font-size: 50px;
`

export const GameNaem = styled.h2`
    color: white;
    font-size: 25px;
    font-weight: 500;
`


// Start Input registr page

export const InpDiv = styled.div`
    width: 100%;
    height: 800px;
    border: 1px solid white;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputDiv = styled.div`
    width: 1160px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.89;
    border: 3px solid ;
    border-image-slice: 1;
    border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(44px);
`

export const TopDIv = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`


export const RegisterText = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid blue;
    text-align: center;
    color: white;
    font-size: 33px;
    font-weight: 600;
    padding-top: 20px;
`

export const ButonsDiv = styled.div`
    width: 85%;
    height: 60px;
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MuiButtons1 = styled(Button)`
    width: 220px !important;
    height: 60px !important;
    color: white !important;
    font-size: 23px !important;
    font-weight: 600 !important;
    opacity: 0.89 !important;
    border: 3px solid !important ;
    border-image-slice: 1 !important;
    border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1)) !important;
`
export const MuiButtons2 = styled(Button)`
    width: 236px !important;
    height: 70px !important;
    font-size: 23px !important;
    font-weight: 600 !important;
    color: white !important;
`

export const BotomDIv = styled.div`
    width: 85%;
    height: calc(100% - 172px);
    border: 1px solid brown;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const OneVSTwoDIv = styled.div`
    width: 100%;
    height: 430px;
    display: flex;
    justify-content: space-between;
`


export const OneInpDiv = styled.div`
    width: 50%;
    height: 430px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`


export const LabelVSInputDiv = styled.div`
    width: 100%;
    height: 80px;
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const LabelText = styled.label`
    color: gray;
    font-size: 19px;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    outline: none;
    padding: 10px;
    color: white;
    font-size: 20px;
`

//Two Inp Div start

export const TwoInpDiv = styled.div`
    width: 48%;
    height: 430px;
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    
`


export const TwoInputDiv = styled.div`
    width: 100%;
    height: 80px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    
`

export const ForstInpDiv = styled.div`
    width: 48%;
    height: 100%;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`



export const SecondInpDiv = styled.div`
    width: 48%;
    height: 100%;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const SendButtonDiv = styled.div`
    width: 100%;
    height: calc(100% - 430px);
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const SendButton = styled(Button)`
    width: 304px !important;
    height: 52px !important;
    font-size: 18px !important;
    font-weight: 500 !important;

`








