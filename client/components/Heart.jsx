import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const HeartButton = styled.div`
  position: absolute;
  top: 5%;
  right: 0;
  height: 20%;
  width: 15%;
  background-color: transparent;
  color: white;
  border: none;
  float: right;
`;

class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  checkArrForRender() {
    if (this.props.heartArr.indexOf(this.props.arrIndex) === -1) {
      this.setState({
        clicked: false,
      })
    } else {
      this.setState({
        clicked: true,
      })
    }
  }

  componentDidMount() {
    this.checkArrForRender();
  }

  heartClick() {
    if (this.props.heartArr.indexOf(this.props.arrIndex) === -1) {
      this.setState({
        clicked: true,
      })
    } else {
      this.setState({
        clicked: false,
      })
    }
    this.props.heartHouseClicked(this.props.arrIndex);
  }

  render() {
    return (
    <HeartButton>{this.state.clicked
      ? <FontAwesomeIcon
          id='fullHeart'
          icon={faHeart} size='2x'
          onClick={this.heartClick.bind(this)}
        />
      : <FontAwesomeIcon
          id='emptyHeart'
          icon={farHeart}
          size='2x'
          onClick={this.heartClick.bind(this)}
        /> }
    </HeartButton>
    );
  }
}

export default Heart;
