import React from 'react'
import styled from 'styled-components'

interface Props{
  day: Date;
}

const AllDay = ({day}: Props) => {
  let date = new Date();
  let today = date.getDate();
  return (
    <AllDayContainer>
      {day.getDate() == today ? <span>2</span> : day.getDate()}
    </AllDayContainer>
  )
}

export default AllDay

const AllDayContainer= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;

  &:hover{
    background-color: gray ;
  }
  p{
    padding: 5px;
  }
  span{ 
    color: red;
  }
`;

