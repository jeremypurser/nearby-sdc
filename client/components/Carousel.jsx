import React from 'react';
import styled from 'styled-components';
import House from './House.jsx';
import Button from './Button.jsx';

const CarouselContainer = styled.div`
  width: 1500px;
  height: 450px;
`;

const ButtonContainer = styled.div`
  float: left;
  left: 40%;
  right: 30%;
  width: 25px;
  height: 300px;
  display: flex;
  textAlign: center;
  justifyContent: center;
`;


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 3,
      heartHouses: [],
    };
  }

  getDisplayHouses(start, end) {
    this.setState({
      displayHouses: this.props.nearbyHouseList.slice(start, end),
    });
  }

  heartHouseClicked(index) {
    const heartArr = this.state.heartHouses;
    heartArr.push(index);
    this.setState({
      heartHouses: heartArr,
    });
  }

  componentDidMount() {
    this.getDisplayHouses(this.state.startIndex, this.state.endIndex);
  }

  buttonClickHandler(event) {
    this.shiftDisplay(event.target.value);
  }

  shiftDisplay(side) {
    if (side === 'right') {
      const newStart = this.state.startIndex - 1;
      const newEnd = this.state.endIndex - 1;
      this.setState({
        startIndex: newStart,
        endIndex: newEnd,
      });
      this.getDisplayHouses(newStart, newEnd);
    } else if (side === 'left') {
      const newStart = this.state.startIndex + 1;
      const newEnd = this.state.endIndex + 1;
      this.setState({
        startIndex: newStart,
        endIndex: newEnd,
      });
      this.getDisplayHouses(newStart, newEnd);
    }
  }

  render() {
    return (
      <CarouselContainer className='carousel'>
        <ButtonContainer className='buttonDiv'>
          {this.state.startIndex === 0
            ? <ButtonContainer></ButtonContainer>
            : <Button
                value='right'
                buttonClickHandler={this.buttonClickHandler.bind(this)}
              />}
        </ButtonContainer>
        <div className='houseDisplay'>
          {this.state.displayHouses ? this.state.displayHouses.map((house) => (
            <House
              changeCurrentHouse={this.props.changeCurrentHouse}
              heartHouses={this.heartHouses}
              heartHouseClicked={this.heartHouseClicked.bind(this)}
              house={house}
              key={house._id}
            />
          ))
            : null}
        </div>
        <ButtonContainer className='buttonDiv'>
          {this.state.endIndex === 12
            ? <ButtonContainer></ButtonContainer>
            : <Button
                value='left'
                buttonClickHandler={this.buttonClickHandler.bind(this)}
              />}
        </ButtonContainer>
      </CarouselContainer>
    );
  }
}

export default Carousel;
