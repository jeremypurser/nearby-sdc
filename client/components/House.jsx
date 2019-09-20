import styled from 'styled-components';

import React from 'react';
import Stars from './Stars.jsx';
import Heart from './Heart.jsx';

const ImageHouse = styled.img`
  width: 300px;
  height: 225px;
`;
const ImageContainer = styled.div`
  width: 300px;
  height: 225px;
  position: relative;
`;
const HouseContainer = styled.div`
  float: left;
  margin: 8px;
  width: 300px;
  height: 275px;
`;
const Words = styled.div`
  font-weight: 300;
  padding: 0;
  margin: 0;
`;
const LightDescription = styled.div`
  line-height: 30%;
  color: #616A6B;
  font-size: 13px;
`;

class House extends React.Component {
  handleClick() {
    this.props.changeCurrentHouse(this.props.house.id);
  }

  render() {
    const preUrl = 'https://hrr40-sdc2-jp.s3.us-east-2.amazonaws.com/';
    return (
      <HouseContainer className='house'>
        <ImageContainer>
          <Heart heartArr={this.props.heartArr} arrIndex={this.props.arrIndex}
            heartHouseClicked={this.props.heartHouseClicked} />
          <ImageHouse
            className='image'
            onClick={this.handleClick.bind(this)}
            src={preUrl + this.props.house.imgurl}>
          </ImageHouse>
        </ImageContainer>
        <Words onClick={this.handleClick.bind(this)}>
          <LightDescription className='layout'>
            <h5>
              {this.props.house.type.toUpperCase()}: {this.props.house.location.toUpperCase()}
            </h5>
          </LightDescription>
          <div className='description'>
            <h3>{this.props.house.title} </h3>
          </div>
          <LightDescription className='cost'>
            <h5>{`$${this.props.house.cost}/night`} </h5>
          </LightDescription>
          <div className='stars'>
            <h5>
              <Stars
                key={this.props.house.id}
                rating={this.props.house.stars}
              />
              {` ${this.props.house.reviewcount}`}
            </h5>
          </div>
        </Words>
      </HouseContainer>
    );
  }
}

export default House;
