import React from 'react'
import styled, { css } from "styled-components";

interface ContainerProps{
  sameMonth: boolean;
  sameDay: boolean;
  clickDay: boolean;
  // isHoliday: boolean;
}


interface Props{
  day: Date;
  nowDate: Date;
  setNowDate :React.Dispatch<React.SetStateAction<Date>>;
  ClickedDate: Date | undefined;
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const AllDay = ({day ,nowDate,  setNowDate, ClickedDate, setClickedDate}: Props) => {

  const nowTime = new Date();

  const sameMonth = nowDate.getMonth() === day.getMonth();

  // 오늘 구하기 
  const sameDay =
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate();

  const clickDay: boolean = ClickedDate
    ? ClickedDate.getFullYear() === day.getFullYear() &&
      ClickedDate.getMonth() === day.getMonth() &&
      ClickedDate.getDate() === day.getDate()
    : false;

    const clickDate = () => {
      setClickedDate(day);
    };


  return (
    <AllDayContainer
    onClick={() => clickDate()}
    sameMonth={sameMonth}
    sameDay={sameDay}
    clickDay={clickDay}>
    <p>{day.getDate()}</p>  
      {/* {day == date ? <span>2</span> : day.getDate()} */}
    </AllDayContainer>
  )
}

export default AllDay

const AllDayContainer= styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;

  &:hover{
    background-color: gray ;
  }
  p {
    padding: 5px;
    font-weight: ${({ sameMonth }) => (sameMonth ? `700` : `300`)};

    ${({ sameDay }) =>
      sameDay
        ? css`
            color: white;
            background-color: blue;
            border-radius: 20px;
          `
        : css``}

    ${({ clickDay }) =>
      clickDay
        ? css`
            border: 1px solid skyblue;
          `
        : css``}

  }
`;
