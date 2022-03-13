import styled from 'styled-components'


export const Card = styled.div`
    margin: auto;
    padding: 20px;
    text-align: center;
    width: 400px;
    border-radius: 6px;
    & > img {
        width: 300px;
    }
    & > div {
        background-color: #FFCB04;   
        border-radius: 6px;
        display: flex;
        box-shadow: 1px 1px 5px #395CA8;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        padding: 10px;
        & > h3{
            margin: 0;
            color: #395CA8;
        }
    }
`


export const CardInfo = styled.div`
    max-width: 500px;
    margin: 50px auto;
    text-align: center;
    
`

export const Circle = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: ${({bgcolor}) => bgcolor};
    display: flex;
    justify-content: center;
    & > img {
        width: 60%; 
    }
`