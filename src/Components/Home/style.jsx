import styled from "styled-components";

//image
import BgcImg from '../S-image/Bgc-Image.png'
import InfoCardimg from './../S-image/Subtract.png'

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
    border: 1px solid yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0px 0px 0px;
`

export const Bio = styled.h1`
    width: 900px;
    height: 200px;
    border: 1px solid white;
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
    border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    
`

export const InfoCard = styled.div`
    width: 400px;
    height: 300px;
    background-image: url(${InfoCardimg});
    background-size: cover;
    border: 1px solid red;
    background-repeat: no-repeat;


    @media (max-width:1202px) {
        margin: 50px;
    }
    
    @media (max-width:620px) {
        margin: 50px;
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

    @media screen and (max-width:500px) {
        width: 120px;
        height: 120px;
        position: relative;
        top: -45px;
    }

    @media screen and (max-width:467px) {
        position: relative;
        left: 150px;
    }
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
    
`


