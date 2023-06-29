import React from 'react'
import styled from 'styled-components'


interface Props{
    nowDate: Date;
    setNowDate :React.Dispatch<React.SetStateAction<Date>>;
}

// 구조분해 할당으로 props를 받고 인터페이스로 Props받은거 type 설정 
const ControlDate = ({nowDate ,setNowDate}:Props) => {
    
    /* 연도 변경 로직  */
    const ChangeYear = (change: number) =>{
        const date = new Date(nowDate.getTime());
        date.setFullYear(date.getFullYear() + change)
        setNowDate(date)
    }

    /* 월 변경 로직  */
    const ChangeMonth = (change: number) =>{
        const date = new Date(nowDate.getTime());
        date.setMonth(date.getMonth() + change)
        setNowDate(date)
    }


  return (
    <ControlContainer>
        <ControlBtnBox>
            <button onClick={()=> ChangeYear(-1)}>{`<<`}</button>
            <button onClick={()=> ChangeMonth(-1)}>{`<`}</button>
        </ControlBtnBox>
        <h2>{`${nowDate.getFullYear()}.${nowDate.getMonth()+1}.${nowDate.getDate()}`} </h2>
        <ControlBtnBox>
            <button onClick={()=> ChangeMonth(1)}>{`>`}</button>
            <button onClick={()=> ChangeYear(1)}>{`>>`}</button>
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