import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const ButtonStyle = styled.button`
//   background-color: transparent;
//   border: none;
//   overflow: hidden;
//   outline: none;
//   float: center;
//   left: 100%;
//   top: 130px;
//   padding: 0;
// `;

// const ButtonStyle = styled.div`
//   background-color: transparent;
//   border: none;
//   overflow: hidden;
//   outline: none;
//   float: center;
//   left: 100%;
//   top: 250px;
//   padding: 0;
//   text-align: center;
// `;

const ButtonStyle = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

// const Button = (props) => (
//       <ButtonStyle className='button' onClick={props.buttonClickHandler} value={props.value}> {props.value === 'right'
//         ? <FontAwesomeIcon onClick={props.buttonClickHandler} id='right' icon={faChevronLeft} size='2x'/>
//         : <FontAwesomeIcon onClick={props.buttonClickHandler} icon={faChevronRight} size='2x'/>}
//       </ButtonStyle>
// );

const Button = (props) => (
      <ButtonStyle className='button' value={props.value}> {props.value === 'right'
        ? <FontAwesomeIcon onClick={() => props.buttonClickHandler('right')} id='right' icon={faChevronLeft} size='2x'/>
        : <FontAwesomeIcon onClick={() => props.buttonClickHandler('left')} icon={faChevronRight} size='2x'/>}
      </ButtonStyle>
);

export default Button;
