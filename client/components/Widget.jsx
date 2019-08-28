import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class Widget extends React.Component {
  constructor() {
    super()
    this.state = {
      currentHouse: 1,
      view: false
    }
  }

  changeCurrentHouse(houseId) {
    this.setState({
      currentHouse: houseId
    });
    this.getNearbyHouses(houseId);
  }

  componentDidMount() {
    this.getNearbyHouses(1);
  }

  updateHouseList(houses) {
    this.setState({
      nearbyHouseList: houses
    })
  }

  getNearbyHouses(id) {
    axios.get(`/house/${id}`)
      .then((houses) => {
        this.updateHouseList(houses.data);
        this.setState({
          view: true
        });
      })
      .catch((error) => {
        console.log(`error getting houses ${error}`);
      })
  }

  render() {
    return (
      <div id='morePlaces'>
        <h2>More places to stay</h2>
        {this.state.view ? < Carousel key={this.state.currentHouse} changeCurrentHouse={this.changeCurrentHouse.bind(this)} nearbyHouseList={this.state.nearbyHouseList}/> : null}
      </div>
    )
  }
}

export default Widget;