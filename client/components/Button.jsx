import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const buttonDiv = {
  float: 'left',
  width: '100px',
  height: '500px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  outlineStyle: 'solid'
};
const buttonStyle = {
  backgroundColor: 'Transparent',
  border: 'none',
  overflow: 'hidden',
  outline: 'none',
  float: 'left'
};

const Button = (props) => {
  return (
    <button className='button' style={buttonStyle} onClick={props.buttonClickHandler} value={props.value}> {props.value === 'right' ?<FontAwesomeIcon id='right' icon={faChevronLeft} size='2x'/> : <FontAwesomeIcon icon={faChevronRight} size='2x'/>}</button>
  )
}

export default Button;
