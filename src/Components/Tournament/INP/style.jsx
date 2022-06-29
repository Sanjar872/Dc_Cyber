import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    height: 160px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AvatarDiv = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(138.08deg, #3632EF 2.94%, #AD00FF 77.78%);
    border-radius: 6.35338px;
`

export const AvatarImg = styled.img`
    width: 99px;
    height:99px;
    border-radius: 100%;
    border: 1px solid white;
`

export const Infile = styled.div`
    width: 75%;
    height: 100%;
    color: rgba(0,0,0,0);
    border: 3px dashed grey;   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px 0px 20px;
`

export const Text = styled.h3`
    color: gray;
    font-weight: 500;
`

export const ChangeButton = styled.button`
    width: 180px;
    height: 40px;
    background: #8F00FF;
    color: white;
    border: none;
    border-radius: 5px;
`
