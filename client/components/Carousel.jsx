import React from 'react';



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
    const style = {
      float: 'left',
      width: '100px'
    };

    return (
      <div className='carousel'>
        <div className='button' style={style}>
          <button>X</button>
        </div>

        <h1 style={style}>house1</h1>
        <h1 style={style}>house2</h1>
        <h1 style={style}>house3</h1>

        <div className='button' style={style}>
          <button>X</button>
        </div>
      </div>
    )
  }
}

export default Carousel;