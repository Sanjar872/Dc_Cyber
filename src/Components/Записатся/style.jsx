import styled from "styled-components";
import rasm1 from "../S-image/zapis_img.png"

export const Container = styled.div`
    width:100%;
    height:50vh;
    border:1px solid red;
    background-image:url(${rasm1});
    background-position:center;
    background-repeat:no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: start;
    

    h2 {
        color:white;
        width:65%;
        border:1px solid red;
        /* height:200px; */
        font-size: 36px;
        letter-spacing: 5px;
        font-weight: 400;
        /* font-family: 'Russo One'; */

    }

`

export const BO = styled.div`
    width: 100%;
    height: auto;
    height: 280px;
    border: 1px solid green;
    padding-left:4%;

    button {
        height:40px;
        width: 150px;
        background:none;
        margin-top:50px;
        font-weight: 500;
        color: white;
        opacity: 0.89;
        border: 2px solid ;
        border-image-slice: 1;
        border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));
        
    }
`