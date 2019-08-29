import React from 'react';
import styled from 'styled-components'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';

const HeartButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 20%;
  width: 20%;
  background-color: #555;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`

class Heart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  heartClick() {
    let clickToggle = this.state.clicked ? false : true;
    this.setState({
      clicked: clickToggle
    })
  }

  render() {
    return (
    <HeartButton onClick={this.heartClick.bind(this)}>{this.state.clicked ? <FontAwesomeIcon icon={faHeart} size='2x'/> : <FontAwesomeIcon icon={farHeart} size='2x'/>}</HeartButton>
    )
  }
}

export default Heart;