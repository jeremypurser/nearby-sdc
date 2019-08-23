import React from 'react';
import House from './House.jsx';



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 2,
      leftButton: false,
      rightButton: true
    }
  }


  render() {
    const buttonStyle = {
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center'
    };
    const buttonDiv = {
      float: 'left',
      width: '100px',
      height: '500px',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center'
    };
    const divStyle = {
      width: '1500px',
      height: '500px'
    }

    return (
      <div className='carousel' style={divStyle}>
        <div className='button' style={buttonDiv}>
          <button style={buttonStyle}>X</button>
        </div>
        < House />
        < House />
        < House />
        <div className='button' style={buttonDiv}>
          <button style={buttonStyle}>X</button>
        </div>
      </div>
    )
  }
}

export default Carousel;