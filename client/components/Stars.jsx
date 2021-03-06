import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarContainer = styled.div`
  display: inline;
  whiteSpace: nowrap;
  padding: 0px;
  margin: 0px;
`;
const Star = styled.div`
  display: flex;
  textAlign: center;
  justifyContent: center;
  display: inline;
  whiteSpace: nowrap;
`;

const Stars = (props) => {
  const starArr = [];
  for (let i = 0; i < props.rating; i += 1) {
    starArr.push(1);
  }
  for (let j = props.rating; j < 5; j += 1) {
    starArr.push(0);
  }

  return (
    <StarContainer className='star'>
      {starArr.map((star, index) => (
        <Star key={index}>{(star === 1)
          ? <FontAwesomeIcon icon={faStar} />
          : <FontAwesomeIcon icon={farStar} />}
        </Star>))}
    </StarContainer>
  );
};

export default Stars;
