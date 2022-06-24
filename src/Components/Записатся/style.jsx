import styled from "styled-components";
import rasm1 from "../S-image/zapis_img.png"

export const Container = styled.div`
    width:100%;
    height:50vh;
    background-image:url(${rasm1});
    background-repeat:no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: start;
    
  

    @media (max-width:391px) {
        text-align:center;
        width:100%;
        display:flex;
        justify-content:center;
    }

    h2 {
        color:white;
        width:65%;
        font-size: 36px;
        letter-spacing: 5px;
        font-weight: 700;
        

        @media (max-width:820px) {
            text-align:center;
            display:flex;
            width:100% !important;
            justify-content:center;
        }
        }

        @media (max-width:517px) {
            text-align:center;
            /* height: 600px; */
            width:100% !important;
        }

        @media (max-width:391px) {
        text-align:center;
        width:100%;
        /* height:auto; */
        display:flex;
        /* padding:0 5%; */
        line-height: 30px;
        font-size: 24px;
        justify-content:center;

          

    }

`

export const BO = styled.div`
    width: 100%;
    height: auto;
    padding:0 5%;

    @media (max-width:600px) {
        font-size: 14px !important;
        width: 100%;
        height: auto;

        h2 {
            font-size: 20px;
        }
    }

    button {
        height:40px;
        width: 150px;
        background:none;
        margin-top:30px;
        font-weight: 500;
        color: white;
        opacity: 0.89;
        border-image-slice: 1;
        border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));
        
    }
`