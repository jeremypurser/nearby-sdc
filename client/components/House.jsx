import React from 'react';
import Stars from './Stars.jsx';
import styled from 'styled-components';
import Heart from './Heart.jsx';

const Image = styled.img`
  width: 300px;
  height: 225px;
`
const ImageContainer = styled.div`
  width: 300px;
  height: 225px;
  position: relative;
`
const HouseContainer = styled.div`
  float: left;
  margin: 8px 8px 8px 8px;
  width: 300px;
  height: 275x;
`
const Words = styled.div`
  font-weight: 300;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
`
const LightDescription = styled.div`
  line-height: 30%;
  color: #616A6B;
  font-size: 13px;
`

class House extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick() {
    this.props.changeCurrentHouse(this.props.house.nearbyNum);
  }

  render() {
    return (
      <HouseContainer className='house'>
        <ImageContainer>
          <Heart key={this.props.house._id} />
          <Image className='image' onClick={this.handleClick.bind(this)} src={this.props.house.imgUrl}></Image>
        </ImageContainer>
        <Words onClick={this.handleClick.bind(this)}>
          <LightDescription className='layout'>
            <h5>{this.props.house.type.toUpperCase()}: {this.props.house.location.toUpperCase()} </h5>
          </LightDescription>
          <div className='description'>
            <h3>{this.props.house.title} </h3>
          </div>
          <LightDescription className='cost'>
            <h5>{this.props.house.cost} </h5>
          </LightDescription>
          <div className='stars'>
            <h5><Stars key={this.props.house._id} rating={this.props.house.stars} /> {this.props.house.reviewCount} </h5>
          </div>
        </Words>
      </HouseContainer>
    )
  }
}

export default House;