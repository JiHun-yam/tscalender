import React from 'react'
import styled from 'styled-components';

interface Props{
  weekName: String; 
}

const WeekBox = ({weekName}: Props) => {
   

  return (
    <WeekBoxContianer>
      <p>{weekName}</p>
    </WeekBoxContianer>
  )
}

export default WeekBox

const WeekBoxContianer= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5555;
`