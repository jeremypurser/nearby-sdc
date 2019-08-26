import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';

const starsStyle = {
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  display: 'inline',
  whiteSpace: 'nowrap'
};
const starContainer = {
  display: 'inline',
  whiteSpace: 'nowrap'
}

const Stars = (props) => {
  const starArr = [];
  for (var i = 0; i < props.rating; i++) {
    starArr.push(1);
  }
  for (var j = props.rating; j < 5; j++) {
    starArr.push(0);
  }

  return (
    <div className='star' style={starContainer}>
      {starArr.map( (star, index) => {
        return (
        <div key={index} style={starsStyle}>{(star === 1) ? <FontAwesomeIcon icon={faStar} /> : <FontAwesomeIcon icon={farStar} />}</div>
        )
      })}
    </div>
  )
}

export default Stars;