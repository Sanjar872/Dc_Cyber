import styled from "styled-components";

//image
import BgcImg from '../S-image/Bgc-Image.png'
import InfoCardimg from './../S-image/Subtract.png'

import SSS from './../F-image/Subtract.svg'


export const MainDiv = styled.div`
    width: 100%;
    height: auto;
    background-image: url(${BgcImg});
    display: flex;
    background-size: cover;
    flex-direction: column;
`

export const TextDiv = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0px 0px 0px;

    @media screen and (max-width:900px) {
        padding: 0px 20px 0px 20px;
    }
`

export const Bio = styled.h1`
    width: 900px;
    height: 200px;
    color: white;
    text-align: center;
    /* letter-spacing: 3px; */


    @media screen and (max-width:700px) {
        font-size: 30px;
    }

    @media screen and (max-width:597px) {
        font-size: 26px;
    }

    @media screen and (max-width:488px) {
        font-size: 23px;
    }

    @media screen and (max-width:428px) {
        font-size: 20px;
    }
`

export const CardDiv = styled.div`
    width: 100%;
    /* height: 500px;    */
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    
`

export const InfoCard = styled.div`
    width: 400px;
    height: 300px;
    border-radius: 20px !important;
    box-shadow: 0px 0px 20px rgb(60, 60, 175);
    background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box;
    border: 3px solid transparent;
    backdrop-filter: blur(40px);


        @media (max-width:1202px) {
            margin: 50px 0px;
        }
        
        @media (max-width:620px) {
            margin: 50px 0px;
        }

        @media (max-width:500px) {
            width: 350px;
            height: 266px;
        }
        

        @media (max-width:446px) {
            width: 420px;
        }

        @media (max-width:441px) {
            width:300px ;
        }

        @media (max-width:406px) {
            width: 270px;
            height: 270px;
        }

        @media (max-width:373px) {
            height: 250px;
            width:290px;
        }
`

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    left: 125px;
    bottom: 65px;
    border: 1px solid white;

    @media (max-width:506px) {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        position: relative;
        bottom: 50px;
        left:117px;
    }

    @media (max-width:441px) {
        position: relative;
        left: 90px;
    }

    @media (max-width:406px) {
        width: 100px;
        height: 100px;
        position: relative;
        left: 85px;
    }

    @media (max-width:373px) {
        
    }

    /* @media screen and (max-width:500px) {
        width: 120px;
        height: 120px;
        position: relative;
        top: -45px;
    }

    @media screen and (max-width:467px) {
        position: relative;
        left: 150px;
    } */
`

export const Name = styled.h2`
    text-align: center;
    color: white;
    font-weight: 600;
    position: relative;
    bottom: 36px;
`

export const Paragraf = styled.p`
    color: white;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 1px;


    @media  (max-width:376px) {
        font-size: 18px;
    }
    
`


