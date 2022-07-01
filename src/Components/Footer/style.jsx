import styled from "styled-components";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { FacebookOutlined } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const  Container = styled.div`
    width:100%;
    height:auto;
    background-color:black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width:820px) {
        flex-direction: column;
        display: flex;
        height: auto;
    }
`
export const Box = styled.div`
    width: 90%;
    height: 300px;
    display: flex;
    height: auto;
    justify-content:space-evenly;
    color: white;
    align-items: center;

    @media (max-width:1250px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
export const Brendlar = styled.div`
    width: 35%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    :nth-child(1) {
        width: 100%;
    }
    :nth-child(2){
        transform: skew(-25deg);
    }
    @media (max-width:1250px) {
        width: 100%;
        gap: 20px;
    }
    
    @media (max-width:390px) {
        
    }
    div {
        width: 60%;
        height: auto;
        display: flex;
        justify-content: center;
        gap: 25px;
    }

`
export const Div1 = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;

    @media (max-width:1250px) {
        display: flex;
        justify-content: center;
    }
`
export const O_nas = styled.div`
    width: 25%;
    line-height:40px;
    font-weight:500;
    /* margin-left: 20px; */
    margin-bottom: 55px;
    flex-wrap: wrap !important;

    li:hover {
        color: gold;
    cursor: pointer;
    transform: scale(1.1);


    }

    li {
    list-style: none;
    text-align: center;

    }
`

export const Dota = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    line-height: 30px;
    font-weight:550;
    li:hover {
        color: gold;
    cursor: pointer;
    transform: scale(1.1);

    }

    @media (max-width:1250px) {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center!important;
        flex-direction: column;
    }

    li{
        list-style: none;

    }
`
export const Con = styled.div`
    display: flex;

  @media (max-width:1250px) {
        display: flex;
        align-items: center !important;
        justify-content: center !important;
        flex-direction: column;
    } 

`

export const Input = styled.div`
    display: flex;
    height: auto;
    justify-content: center;
    flex-direction: column;
    line-height: 30px;
    font-weight:450;
    margin-bottom: 20px;
    @media (max-width:1250px) {
        width: 100%;
        display: flex;
        margin-top: 3rem;
        justify-content: center !important;
        flex-direction: column;
        
     }

    h3 {
        margin-bottom: 20px;
    }
 
    p{
         @media (max-width:1250px) {
        /* width: 100%; */
     }
    }
    span {
        text-decoration:underline;
        cursor: pointer;
    }

    div :nth-child(1){

        @media (max-width:1250px) {
        /* display: flex;
        justify-content: center;
        align-items: center; */
     }
    }

   
`

export const Input2 = styled.input`
    width: 20px;
    height: 20px;
`
export const Input1 = styled.input`
    height: 40px;
    width: 50%;
    padding-left: 7px;
    transform:skew(-25deg);
    border: white 1px dotted;
    border-right-style: none;
    color: white;
    letter-spacing:1px;
    font-size: 16px;
    outline: none;
    background-color: transparent;
    /* margin-top: 15px; */

    ::placeholder {
        color: white;
    }
`


export const Checkbo = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    gap: 20px;
    margin-top: 15px;
@media (max-width:1250px) {
    width: 100%;
    display: flex;
    justify-content: center;
}

    p:nth-child(2){
    font-weight:450;
        
    }
`

export const MyEmailOutlinedIcon = styled(EmailOutlinedIcon)`
    /* position: absolute; */
    background-color:#40007D;
    background: linear-gradient(90deg, #434174 33%, rgba(111,0,255,1) 66%);
    height: 40px !important;
    width: 10% !important;
    border: 1px dotted white;
    font-weight: 200 !important;
    border-left-style: none;

    cursor: pointer;
    transform: skew(-25deg);

`

export const Fut = styled.div`
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 400;
    opacity: 0.3;
    cursor: pointer;
    text-decoration: underline;
    margin-bottom: 20px;

`

export const Text = styled.div`
    display: flex;
    width: 41%;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    gap: -50px;

    @media (max-width:1250px) {
        /* justify-content: center!important;
        flex-direction: column; */
        flex-direction: column;
        display: flex;
    }

    @media (max-width:600px) {
        width: 100%;
    }
`


export const Text2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    @media (max-width:1250px) {
        display: flex;
        /* align-items: center;
        justify-content: center!important; */
        flex-direction: column;

    }
`
export const Sign = styled.div`
    display: flex;
    justify-content: center;
    /* text-align: center; */
    flex-direction: column;
    @media (max-width:1250px) {
        text-align:center;
    }
    @media (max-width:1250px) {
        p{
        width: 100%;
        padding: 0 15%;
        display: flex;
        /* justify-content: center; */
        /* text-align: center !important; */
    }
    }
    p{
        width: 100%;
        /* padding: 0 15%; */
        display: flex;
        /* justify-content: center; */
        /* text-align: center !important; */
    }

`
export const IMglar = styled.div`
    width: 100%;
    img:nth-child(1) {
        transform: skew(-25deg);
        
    }
    img:nth-child(2) {
        transform: skew(-25deg);
        
    }
    img:nth-child(3) {
        transform: skew(-25deg);
        
    }
    img:nth-child(4) {
        transform: skew(-25deg);
        
    }

    img:hover {
            transform: scale(1.5);
            cursor: pointer;
    }
`


export const FacebookOutlined1 = styled(FacebookOutlined)`
    width: 50px !important;
    height: 50px !important;
    &:hover {
        color: #4267b2 ;
    }
    
`
export const Facebodiv = styled.div`
    width: 50px !important;
    height: 50px !important;
    background-color:#4267b2 ;
    border-radius: 50%;
    border: 4px solid white !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;

    &:hover {
        background-color: white;
        transform: scale(1.2);
        transition: 1s;
        cursor: pointer;

    }
`
export const TelegraDiv = styled.div`
        width: 50px !important;
    height: 50px !important;
    background-color:white ;
    border-radius: 50%;
    display: flex !important;
    border: 4px solid white !important;

    justify-content: center !important;
    align-items: center !important;


    &:hover {
        background-color: #28a1da;
        transform: scale(1.2);
        transition: 1s;
        cursor: pointer;

    }
`

export const Telegram1 = styled(TelegramIcon)`
      width: 50px !important;
    height: 50px !important;
    /* border: 1px solid #4267b2  !important; */
    border-radius: 50%;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding-right: 5px !important;

    color: #28a1da;
    &:hover {
        color: white ;
    }
`

export const IntagramDiv = styled.div`
        width: 50px !important;
    height: 50px !important;
    background-color:white ;
    border-radius: 50%;
    display: flex !important;
    /* border: 4px solid white !important; */
    justify-content: center !important;
    align-items: center !important;


    &:hover {
        background-color: #D93F7D;
        transform: scale(1.2);
        transition: 1s;
        cursor: pointer;

    }
`

export const IntagramIcons1 = styled(InstagramIcon)`
        width: 50px !important;
    height: 50px !important;
    border: 1px solid #4267b2  !important;
    border-radius: 50%;
    display: flex !important;
    color:  #D93F7D;
    justify-content: center !important;
    align-items: center !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
    border: 4px solid white !important;


    &:hover {
        color: white ;
    }
`

export const YoutubeDiv = styled.div`
         width: 50px !important;
    height: 50px !important;
    background-color:white ;
    border-radius: 50%;
    display: flex !important;
    /* border: 4px solid white !important; */
    justify-content: center !important;
    align-items: center !important;

    &:hover {
        background-color: #F70000;
        transform: scale(1.2);
        transition: 1s;
        cursor: pointer;

    }
`

export const YouTubeIcon1 = styled(YouTubeIcon)`
        width: 50px !important;
    height: 50px !important;
    border: 1px solid #4267b2  !important;
    border-radius: 50%;
    display: flex !important;
    color:  #F70000;
    justify-content: center !important;
    align-items: center !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
    border: 4px solid white !important;


    &:hover {
        color: white ;
    }
`