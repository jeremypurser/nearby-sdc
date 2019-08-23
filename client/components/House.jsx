import React from 'react';

class House extends React.Component {
  constructor(){
    super()
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
      <div className='house' style={divStyle}>
        <div className='image'>
          <img style={imgStyle} src="https://housemania.s3-us-west-1.amazonaws.com/annie-spratt-BmjlyHwV1S0-unsplash.jpg"></img>
        </div>
        <div className='layout'>
          <h5>entire apartment: Port Omariton</h5>
        </div>
        <div className='description'>
          <h3>studio 15min walk to train</h3>
        </div>
        <div className='price'>
          <h5>$75/night</h5>
        </div>
        <div className='stars'>
          <h5>5 stars</h5>
        </div>

      </div>
    )
  }
}

export default House;