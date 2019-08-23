import React from 'react';
import Carousel from './Carousel.jsx';

class Widget extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id='morePlaces'>
        <h2>More places to stay</h2>
        < Carousel />
      </div>
    )
  }
}

export default Widget;