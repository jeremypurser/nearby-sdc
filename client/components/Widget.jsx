import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class Widget extends React.Component {
  constructor() {
    super()
    this.state = {
      currentHouse: 1,
      startIndex: 0,
      endIndex: 3,
    }
  }

  componentDidMount() {
    this.getNearbyHouses(this.state.currentHouse);
  }

  updateHouseList(houses) {
    this.setState({
      nearbyHouseList: houses
    })
  }

  getDisplayHouses() {
    const start = this.state.startIndex;
    const end = this.state.endIndex;
    this.setState( {
      displayHouses: this.state.nearbyHouseList.slice(start, end)
    })
  }

  getNearbyHouses(id) {
    axios.get(`/house/${id}`)
      .then((houses) => {
        this.updateHouseList(houses.data);
        this.getDisplayHouses();
      })
      .catch((error) => {
        console.log(`error getting houses ${error}`);
      })
  }

  render() {
    return (
      <div id='morePlaces'>
        <h2>More places to stay</h2>
        < Carousel houses={this.state.houses}/>
      </div>
    )
  }
}

export default Widget;