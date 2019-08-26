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

  shiftDisplay(side) {
    if (side === 'right') {
      let newStart = this.state.startIndex - 1;
      let newEnd = this.state.endIndex - 1;
      this.setState({
        startIndex: newStart,
        endIndex: newEnd
      })
      this.getDisplayHouses(newStart, newEnd);
    } else if (side === 'left') {
      let newStart = this.state.startIndex + 1;
      let newEnd = this.state.endIndex + 1;
      this.setState({
        startIndex: newStart,
        endIndex: newEnd
      })
      this.getDisplayHouses(newStart, newEnd);
    }

  }

  changeCurrentHouse(houseId) {
    this.setState({
      currentHouse: houseId
    });
    this.getNearbyHouses(houseId);
  }

  componentDidMount() {
    this.getNearbyHouses(this.state.currentHouse);
  }

  updateHouseList(houses) {
    this.setState({
      nearbyHouseList: houses
    })
  }

  getDisplayHouses(start, end) {
    this.setState( {
      displayHouses: this.state.nearbyHouseList.slice(start, end)
    })
  }

  getNearbyHouses(id) {
    axios.get(`/house/${id}`)
      .then((houses) => {
        this.updateHouseList(houses.data);
        this.getDisplayHouses(0, 3);
      })
      .catch((error) => {
        console.log(`error getting houses ${error}`);
      })
  }

  render() {
    return (
      <div id='morePlaces'>
        <h2>More places to stay</h2>
        < Carousel shiftDisplay={this.shiftDisplay.bind(this)} changeCurrentHouse={this.changeCurrentHouse.bind(this)} displayHouses={this.state.displayHouses} start={this.state.startIndex} end={this.state.endIndex}/>
      </div>
    )
  }
}

export default Widget;