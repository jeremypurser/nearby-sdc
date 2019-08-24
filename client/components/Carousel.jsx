import React from 'react';
import House from './House.jsx';
import Button from './Button.jsx';



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftButton: false,
      rightButton: true,
    }
  }

  buttonClickHandler(event) {
    this.props.shiftDisplay(event.target.value);
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

         {this.props.start === 0 ? <div style={buttonDiv}></div> : <Button value='right' buttonClickHandler={this.buttonClickHandler.bind(this)}/>}

        <div className='houseDisplay'>
          {this.props.displayHouses ? this.props.displayHouses.map((house) => {
            return <House changeCurrentHouse={this.props.changeCurrentHouse} house={house} key={house._id}/>
          }): null}
        </div>
        {this.props.end === 12 ? <div style={buttonDiv}></div> : <Button value='left' buttonClickHandler={this.buttonClickHandler.bind(this)}/>}
      </div>
    )
  }
}

export default Carousel;