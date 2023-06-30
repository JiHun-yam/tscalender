import React from 'react'
import styled from 'styled-components'
import WeekBox from './WeekBox'
import AllDay from './AllDay'

const mothList = (nowDate: Date) =>{
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();
  // 이번주가 몇번째 주인지 
  const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
  const dayLastWeek = new Date(nowYear, nowMonth+ 1,0).getDay();

  const result: Date[] = [];
  
  const prevMonthed = new Date(nowYear, nowMonth,0).getDate();
  const nowMonthed = new Date(nowYear, nowMonth+ 1,0).getDate();

  for(let i = dayOneWeek - 1; i>=0; i--){
    result.push(new Date(nowYear, nowMonth -1, prevMonthed - 1))
  };

  // 이번달 몇일까지 있는지 확인 및 반복문
  for(let i =1; i<=nowMonthed; i++){
    result.push(new Date(nowYear, nowMonth, i))
  }


  for(let i =1; i< 7 - dayLastWeek; i++){
    result.push(new Date(nowYear, nowMonth, i))
  }

  return result
};

interface Props{
  nowDate: Date,
  setNowDate :React.Dispatch<React.SetStateAction<Date>>,
  ClickedDate: Date | undefined,
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
}


const DateBox = ({nowDate ,setNowDate, ClickedDate, setClickedDate}:Props) => {

  const allDay = [] = mothList(nowDate);
  // console.log(allDay)
  const weeks = ['Sun',"Mon","Tue","Wed","Thu","Fri","Sat"]

  return (
    <DateBoxContainer>
      {/* 주 */}
      {weeks.map((week:string)=>{
        return <WeekBox weekName={week}></WeekBox>
      })}
      {/* 일 */}
      {allDay.map((day: Date)=>{
        return <AllDay 
                  day={day} 
                  nowDate={nowDate}
                  setNowDate={setNowDate} 
                  ClickedDate={ClickedDate} 
                  setClickedDate={setClickedDate}
                  />
      })}
    </DateBoxContainer>
  )
}

export default DateBox

const DateBoxContainer = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`