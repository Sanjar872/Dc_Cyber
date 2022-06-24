import styled from "styled-components";

export const MainDiv = styled.div`
    width: 100%;
    height: auto;
    /* background-color: transparent; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: none;

    @media (max-width:768px) {
        display: block;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const CardDiv = styled.div`
    width: 80%;
    height: auto;
    opacity: 0.89;
    border: 2px solid ;
    border-image-slice: 1;
    border-image-source: linear-gradient( to left, rgba(219, 0, 255, 1), rgba(0, 224, 255, 1));    
`

export const Image = styled.img`
    width: 100%;
    height: auto;
`