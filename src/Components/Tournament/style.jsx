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

    @media  (max-width:650px){
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
    padding: 0px 0px 0px 80px;

    @media (max-width:779px) {
        padding: 0px;
    }

    @media screen and (max-width:543px) {
        width: 100%;
    }
`


export const Ul = styled.ul`
    width: 600px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid red; */

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
    position: relative;

   
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0px;
        height: 2px;
        background: linear-gradient(92.49deg, #AD00FF 14.3%, #00E0FF 100%);
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }

    @media (hover: hover) and (pointer: fine) {
        :hover::before{
            left: 0;
            right: 0;
            width: 100%;
        }
    }

    
    

    @media screen and (max-width:363px) {
        font-size: 13px;
        width: 59px;
    }
   
`

//vs startt====================================================================

export const Comands = styled.div`
    width: 100%;
    height: auto;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;

    @media screen and (max-width:950px) {
        /* height: 1400px; */
    }

`

export const Para = styled.div`
    width: 100%;
    height: 214px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;

    @media screen and (max-width:1157px) {
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

    @media screen and (max-width:666px){
        width: 100%;
    }

    /* @media screen and (max-width:607px) {
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

    @media screen and (max-width:339px) {
        width:200px;
    } */
`



export const Box1 = styled.div`
    width: 200px;
    /* height: 180px; */

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

    @media (max-width:547px) {
        object-fit: contain;
    }
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

    @media (max-width:1150px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:950px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:753px){
        width: 650px;
    }

    @media screen and (max-width:666px) {
        width:100%;
    }
    /* @media screen and (max-width:652px){
        width: 600px;
    }

    @media screen and (max-width:604px) {
        width: 500px;
        height: 150px;
    } */


    /* @media screen and (max-width:454px) {
        width: 400px;
        height: 120px;
    }

    @media screen and (max-width:408px) {
        width:350px;
    } */

`

export const GroupName = styled.div`
    width: 600px;
    height: 60px;
    color: white;
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid red; */

    @media screen and (max-width:604px) {
        font-size: 15px;
        width: 500px;
    }

    @media screen and (max-width:507px) {
        font-size: 10px;
        width: 400px;
    } 

    @media screen and (max-width:454px) {
        font-size: 10px;
    }

    @media screen and (max-width:408px) {
        font-size: 10px;
        width: 380px;
    }

    @media screen and (max-width:380px) {
        width: 350px;
    }

    @media screen and (max-width:350px) {
        width: 300px;
    }


`

export const H2 = styled.h1`
    font-weight: 400;
`

export const HR = styled.hr`
    width: 20px;
    height: 2px;
    background-color: white;
`

export const Data = styled.p`
    color: gray;
    margin: 0px 0px 0px 27px;
`

export const ButtonDiv = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: end;
    /* padding: 0px 80px 0px 0px; */
    @media (max-width:591px) {
        display: flex;
        width: 100%;
        justify-content: center;
    }
`

export const MuiButton = styled(Button)`
    width: 185px !important;
    height: 45px !important;
    font-size: 18px !important;
    color: white !important;
    font-weight: 500 !important;
    border-radius: 5px !important;
    background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box !important;
    border: 3px solid transparent !important;
    backdrop-filter: blur(40px) !important;
    text-transform: capitalize !important;
`

///======== Photo albom ================================================================================================

export const PhotoAlbum = styled.div`
    width: 100%;
    height: auto;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const CardText = styled.div`
    width: 100%;
    height: 70px;
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
    border-radius: 20px !important;
    background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box;
    border: 3px solid transparent;
    backdrop-filter: blur(40px);


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

    @media (max-width:796px) {
        display: none;
    }

    

`

export const ForstDiv = styled.div`
    width: 100%;
    height: 50%;
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
    border-radius: 20px 0px 0px 0px;
    
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
    /* border-radius: 30px 0px 0px 0px; */
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
    border-radius: 0px 20px 0px 0px;
`
export const CardImg22 = styled.img`
    width: 100%;
    height: 100%;
`

// Second div start ======================================


export const SecondDiv = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 0px 0px 14px 14px;
    display: flex;
`

export const CardDiv1 = styled.div`
    width: 370px;
    height: 383px;
    /* border: 1px solid blue; */
`

export const CardDivIn1 = styled.div`
    width: 100%;
    height: 50%;
`

export const CardDivIn2 = styled.div`
    width: 100%;
    height: 50%;
`

export const CardDivInImg1 = styled.img`
    width: 100%;
    height: 100%;
`

export const CardDivInImg2 = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 0px 14px;
`

//========================

export const CardDiv2 = styled.div`
    width: 600px;
    height: 382px;
`

export const CardDivImg2 = styled.img`
    width: 100%;
    height: 100%;
`

// ==========================

export const CardDiv3 = styled.div`
    width:325px;
    height: 382px;
    `

export const CardDivImg3 = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 14px 0px;
`

// CardDiv start ================================================

export const Square = styled.div`
    width: 100%;
    height: auto;
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:0px 40px;
`

export const Boxs = styled.div`
    width: 335px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 40px 0px;
    border-radius: 15px !important;
    background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box;
    border: 3px solid transparent;
    backdrop-filter: blur(40px);

    @media (max-width:1420px) {
        margin: 20px 0px ;
    }
    

    @media (max-width:396px) {
        width: 400px ;
        height: 250px;
    }
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
    height: auto;
    /* border: 1px solid white; */
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`

export const InputDiv = styled.div`
    width: 1160px;
    height: 100%;
    display: flex;
    border-radius: 20px !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 18px !important;
    background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box;
    border: 3px solid transparent;
    backdrop-filter: blur(40px);

    @media (max-width:589px) {
        width: 100%;
    }
`

export const TopDIv = styled.div`
    width: 100%;
    height: 200px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin: 0px 0px 40px 0px;
`


export const RegisterText = styled.div`
    width: 100%;
    height: 100px;
    /* border: 1px solid blue; */
    text-align: center;
    color: white;
    font-size: 33px;
    font-weight: 600;
    padding-top: 20px;
`

export const ButonsDiv = styled.div`
    width: 85%;
    height: 60px;
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MuiButtons1 = styled.button`
    width: 230px !important;
    height: 60px !important;
    color: white !important;
    font-size: 23px !important;
    cursor: pointer;
    font-weight: 600 !important;
    border-radius: 8px !important;
    /* background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box !important; */
    border: 3px solid transparent !important;
    backdrop-filter: blur(40px) !important;
    

    
    @media (max-width:468px) {
        font-size: 18px !important;
    }

    @media (max-width:393px) {
        font-size: 15px !important;
    }
`
export const MuiButtons2 = styled.button`
     width: 230px !important;
    height: 60px !important;
    color: white !important;
    cursor: pointer;
    font-size: 23px !important;
    font-weight: 600 !important;
    border-radius: 8px !important;
    /* background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box !important; */
    border: 3px solid transparent !important;
    backdrop-filter: blur(40px) !important;

    
    @media (max-width:468px) {
        font-size: 18px !important;
    }

    @media (max-width:393px) {
        font-size: 15px !important;
    }
`

export const BotomDIv = styled.div`
    width: 85%;
    height: calc(100% - 172px);
    /* height: auto; */
    /* border: 1px solid brown; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width:564px) {
       width: 95%;
    }
`

export const OneVSTwoDIv = styled.div`
    width: 100%;
    height: 430px;
    display: flex;
    justify-content: space-between;

    @media (max-width:929px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: auto ;
    }
`


export const OneInpDiv = styled.div`
    width: 50%;
    height: 430px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    @media (max-width:929px) {
        width: 80%;
    }

    @media (max-width:700px) {
        width: 100%;
    }
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
    color: #aaaaaa;
    font-size: 19px;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 3px solid white;
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
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    @media (max-width:929px) {
        width: 80%;
    }    

    @media (max-width:700px) {
        width: 100%;
    }
    
`


export const TwoInputDiv = styled.div`
    width: 100%;
    height: 80px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    
`

export const ForstInpDiv = styled.div`
    width: 48%;
    height: 100%;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`



export const SecondInpDiv = styled.div`
    width: 48%;
    height: 100%;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const SendButtonDiv = styled.div`
    width: 100%;
    height: calc(100% - 430px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 100px;

` 

export const SendButton = styled(Button)`
    width: 304px !important;
    height: 52px !important;
    font-size: 18px !important;
    font-weight: 500 !important;
    background-color:#8F00FF !important;


    &:hover{
        background-color:#7000E0 !important;
    }
`

export const Select1 = styled.select`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 3px solid white;
    transition: 3s;

    cursor: pointer;
    color: gray;
    ::placeholder {
            color: red;
        }


    option {
       background-color: #3A156B;
       color: white;
       transition: 3s;
    }


`

// Send Image start ==================================================================================

export const  Edit__img = styled.div`
    height: 140px;
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: space-between;
    grid-gap: 50px;
    margin-bottom: 40px;
    /* border: 1px solid red; */


    @media (max-width:764px) {
        display: flex;
        flex-direction: column;
        /* margin: 0px 0px 40px 0px; */
        height: auto;
    }
  `
  export const Img_preview = styled.div`
    padding: 5px;
    background: #AD00FF;
    border-radius: 6.35338px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 140px;
    img{
      border-radius: 50%;
      width: 125px;
      height: 125px;
      /* filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15)) */
    }
`
export const Img__drop = styled.label`
border: 3px dashed #02B6EB;
border-radius: 5px;
flex-grow: 1;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
padding: 0px 50px 0px 30px;

@media (max-width:764px) {
    width: 100%;
    height: 100px;
}

@media (max-width:541px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}


span{
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #808191;


  @media (max-width:541px) {
    display: none;
  }
}
p{
  font-style: normal;
  font-weight: 400;
  font-size: 16.8578px;
  line-height: 21px;
  color: #FFFFFF;
  border: none;
  outline: none;
  /* background: linear-gradient(180deg, #03F5FF 0%, #02B6EB 100%); */
  border-radius: 5px;
  padding: 10px 30px;
  background-color:
#8F00FF ;
}

`

