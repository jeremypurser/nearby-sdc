import React from 'react';
import Stars from './Stars.jsx';

class House extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick() {
    this.props.changeCurrentHouse(this.props.house.nearbyNum);
  }

  render() {
    const imgStyle = {
      width: '250px',
      height: '200px'
    }
    const divStyle = {
      float: 'left',
      margin: '20px 20px 20px 20px'
    }

    return (
      <div className='house' style={divStyle} onClick={this.handleClick.bind(this)}>
        <div className='image'>
          <img style={imgStyle} src={this.props.house.imgUrl}></img>
        </div>
        <div className='layout'>
          <h5>{this.props.house.type}: {this.props.house.location}</h5>
        </div>
        <div className='description'>
          <h3>{this.props.house.title}</h3>
        </div>
        <div className='cost'>
          <h5>{this.props.house.cost}</h5>
        </div>
        <div className='stars'>
          <h5><Stars rating={this.props.house.stars} /> {this.props.house.reviewCount}</h5>
        </div>

      </div>
    )
  }
}

export default House;