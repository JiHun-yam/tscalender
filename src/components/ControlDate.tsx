import React from 'react'
import styled from 'styled-components'


interface Props{
    nowDate: Date;
    setNowDate :React.Dispatch<React.SetStateAction<Date>>;
}

const ControlDate = ({nowDate}:Props) => {
  return (
    <ControlContainer>
        <ControlBtnBox>
            <button onClick={()=>{}}>{`<<`}</button>
            <button onClick={()=>{}}>{`<`}</button>
        </ControlBtnBox>
        <h2>{`${nowDate.getFullYear()}.${nowDate.getMonth()+1}.${nowDate.getDate()}`} </h2>
        <ControlBtnBox>`
            <button onClick={()=>{}}>{`>>`}</button>
            <button onClick={()=>{}}>{`>`}</button>
        </ControlBtnBox>
    </ControlContainer>
  )
}

export default ControlDate

const ControlContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%; 
`;

const ControlBtnBox = styled.div`
    > button {
        border: 0;
        margin: 0;
        background-color: white;
        width: 30px;
        margin: 10px;
        
        &:hover{
            background-color: gray;
        }
        &:active{
            background-color: red;
        }
    }
`