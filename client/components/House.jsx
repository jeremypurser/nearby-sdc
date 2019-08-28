import React from 'react';
import Stars from './Stars.jsx';
import styled from 'styled-components';

const Image = styled.img`
  width: 250px;
  height: 200px;
`
const HouseContainer = styled.div`
  float: left;
  margin: 20px 20px 20px 20px;
`

class House extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick() {
    this.props.changeCurrentHouse(this.props.house.nearbyNum);
  }

  render() {
    // const imgStyle = {
    //   width: '250px',
    //   height: '200px'
    // }
    // const divStyle = {
    //   float: 'left',
    //   margin: '20px 20px 20px 20px'
    // }

    return (
      <HouseContainer className='house' onClick={this.handleClick.bind(this)}>
        <div className='image'>
          <Image src={this.props.house.imgUrl}></Image>
        </div>
        <div className='layout'>
          <h5>{this.props.house.type}: {this.props.house.location} </h5>
        </div>
        <div className='description'>
          <h3>{this.props.house.title} </h3>
        </div>
        <div className='cost'>
          <h5>{this.props.house.cost} </h5>
        </div>
        <div className='stars'>
          <h5><Stars key={this.props.house._id} rating={this.props.house.stars} /> {this.props.house.reviewCount} </h5>
        </div>
      </HouseContainer>
    )
  }
}

export default House;