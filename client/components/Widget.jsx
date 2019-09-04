import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Carousel from './Carousel.jsx';

const WidgetContainer = styled.div`
  font-family: 'Tajawal', sans-serif;
  color: #424949;
  padding-left: 100px;
  width: 1500px;
  height: 450px;
  object-fit: scale-down;
`;

class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      currentHouse: 1,
      view: false,
    };
  }

  changeCurrentHouse(houseId) {
    this.getNearbyHouses(houseId);
  }

  componentDidMount() {
    this.getNearbyHouses(1);
  }

  updateHouseList(houses) {
    this.setState({
      nearbyHouseList: houses,
    });
  }

  getNearbyHouses(id) {
    axios.get(`http://localhost:3003/house/${id}`)
      .then((houses) => {
        this.updateHouseList(houses.data);
        this.setState({
          view: true,
          currentHouse: id,
        });
      })
      .catch((error) => {
        console.log(`error getting houses ${error}`);
      });
  }

  render() {
    return (
      <WidgetContainer id='morePlaces'>
        <h2>More places to stay</h2>
        {this.state.view
          ? < Carousel
              key={this.state.currentHouse}
              changeCurrentHouse={this.changeCurrentHouse.bind(this)}
              nearbyHouseList={this.state.nearbyHouseList}/>
          : null}
      </WidgetContainer>
    );
  }
}

export default Widget;
