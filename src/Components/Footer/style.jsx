import styled from "styled-components";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

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
    width: 30%;
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
    width: 30%;
    line-height:40px;
    font-weight:500;
    margin-bottom: 50px;
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
    border: none;
    outline: none;
    /* margin-top: 15px; */
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
    
    font-weight: 200 !important;
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
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    gap: 40px;

    @media (max-width:1250px) {
        /* justify-content: center!important;
        flex-direction: column; */
        display: flex;
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