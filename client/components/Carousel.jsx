import React from 'react';
import House from './House.jsx';
import Button from './Button.jsx';



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 3,
    }
  }

  getDisplayHouses(start, end) {
    this.setState( {
      displayHouses: this.props.nearbyHouseList.slice(start, end)
    }) 
  }

  componentDidMount() {
    this.getDisplayHouses(this.state.startIndex, this.state.endIndex);
  }

  buttonClickHandler(event) {
    this.shiftDisplay(event.target.value);
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
        <div className='buttonDiv' style={buttonDiv}>
          {this.state.startIndex === 0 ? <div style={buttonDiv}></div> : <Button value='right' buttonClickHandler={this.buttonClickHandler.bind(this)}/>}
        </div>
        <div className='houseDisplay'>
          {this.state.displayHouses ? this.state.displayHouses.map((house) => {
            return <House changeCurrentHouse={this.props.changeCurrentHouse} house={house} key={house._id}/>
          }): null}
        </div>
        <div className='buttonDiv' style={buttonDiv}>
          {this.state.endIndex === 12 ? <div style={buttonDiv}></div> : <Button value='left' buttonClickHandler={this.buttonClickHandler.bind(this)}/>}
        </div>
      </div>
    )
  }
}

export default Carousel;