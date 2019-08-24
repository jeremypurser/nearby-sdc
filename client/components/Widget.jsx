import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class Widget extends React.Component {
  constructor() {
    super()
    this.state = {
      currentHouse: 1
    }
  }

  componentDidMount() {
    this.getNearbyHouses(this.state.currentHouse);
  }

  changeHouses(houses) {
    this.setState({
      houses: houses
    })
  }

  getNearbyHouses(id) {
    axios.get(`/house/${id}`)
      .then((houses) => {
        this.changeHouses(houses.data);
      })
      .catch((error) => {
        console.log(`error getting houses ${error}`);
      })
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