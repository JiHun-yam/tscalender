import React ,{useState}from 'react'
import ControlDate from './ControlDate'
import DateBox from './DateBox'
import styled from 'styled-components'

const Main = () => {
    const [ nowDate, setNowDate ]= useState<Date>(new Date());
    const [ ClickedDate, setClickedDate ]= useState<Date>();
    
    console.log(nowDate)
  return (
    <MainContainer>
        <ControlDate nowDate={nowDate} setNowDate={setNowDate}/>
        <DateBox/>
    </MainContainer>
  )
}

export default Main

const MainContainer= styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    width: 50rem;
    height: 31.25rem;
    
`;