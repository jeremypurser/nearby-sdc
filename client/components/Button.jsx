import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  overflow: hidden;
  outline: none;
  float: center;
  left: 100%;
  top: 130px;
  padding: 0;
`;

const Button = (props) => (
      <ButtonStyle className='button' onClick={props.buttonClickHandler} value={props.value}> {props.value === 'right'
        ? <FontAwesomeIcon id='right' icon={faChevronLeft} size='2x'/>
        : <FontAwesomeIcon icon={faChevronRight} size='2x'/>}
      </ButtonStyle>
);

export default Button;
