import React from 'react';
import styled from 'styled-components'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


// const buttonDiv = {
//   float: 'left',
//   width: '100px',
//   height: '500px',
//   display: 'flex',
//   textAlign: 'center',
//   justifyContent: 'center',
//   backgroundColor: 'transparent',
//   outlineStyle: 'solid'
// };

const ButtonStyle = styled.div`
  background-color: transparent;
  border: none;
  overflow: hidden;
  outline: none;
  float: left;
`
// const buttonStyle = {
//   backgroundColor: 'Transparent',
//   border: 'none',
//   overflow: 'hidden',
//   outline: 'none',
//   float: 'left'
// };

const Button = (props) => {
  return (
    <ButtonStyle>
      <button className='button' onClick={props.buttonClickHandler} value={props.value}> {props.value === 'right' ?<FontAwesomeIcon id='right' icon={faChevronLeft} size='2x'/> : <FontAwesomeIcon icon={faChevronRight} size='2x'/>}</button>
    </ButtonStyle>
  )
}

export default Button;
