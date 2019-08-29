import { mount, shallow, render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Widget from '../../client/components/Widget.jsx';
import House from '../../client/components/House.jsx';
import Button from '../../client/components/Button.jsx';
import Carousel from '../../client/components/Carousel.jsx';
import Stars from '../../client/components/Stars.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Widget Component 
describe('Test Widget component functionality', () => {
  const options = {
    disableLifecycleMethods: true
  }

  it('should render correctly', () => {
    const component = shallow(<Widget />, options);
    expect(component).toMatchSnapshot();
  })

  it('should call componentDidMount once',  () => {
    const componentFunc = jest.fn();
    const component = shallow(<Widget/>, options);
    component.instance().getNearbyHouses = componentFunc;
    component.update();
    const instance = component.instance();
    instance.componentDidMount();
    
    expect(instance.getNearbyHouses).toHaveBeenCalledTimes(1);
  })

  it('should render Carousel if state.view is true',  () => { // this one 
    const component = shallow(<Widget />, options);
    component.setState({view: true});
    component.update();
    expect(component.find(Carousel)).toHaveLength(1);
  })

  it('should change currentHouse state to the id changeCurrentHouse is called with',  () => {
    const component = shallow(<Widget />, options);
    component.instance().getNearbyHouses = jest.fn();
    component.update();
    const instance = component.instance();
    instance.changeCurrentHouse(4);
    expect(component.state('currentHouse')).toBe(4);
  })

  it('should change update nearbyHouseList state to array of houses',  () => {
    const houses = ['house1', 'house2', 'house3'];
    const component = shallow(<Widget />, options);
    const instance = component.instance();
    instance.updateHouseList(houses);
    expect(component.state('nearbyHouseList')).toBe(houses);
  })
});

// House Component testing 
describe('Test House component functionality', () => {
  const clickFn = jest.fn();
  const props = {
    imgUrl: "https://housemania.s3-us-west-1.amazonaws.com/annie-spratt-BmjlyHwV1S0-unsplash.jpg",
    cost: '$309/night',
    location: 'Saratoga',
    type: 'apartment',
    title: 'quaint house',
    stars: 4,
    reviewCount: 20
  }; 

  it('should render correctly', () => {
    const component = renderer.create(<House house={props}></House>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('house button click call handleClick to run changeCurrentHouse', () => {
    const component = shallow(<House changeCurrentHouse={clickFn} house={props}/>);
    component
      .find('.image')
      .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});

// Test Carousel Component 
describe('Test Carousel component functionality', () => {
  const options = {
    disableLifecycleMethods: true
  };
  const clickFn = jest.fn();
  
  it('should render correctly', () => {
    const component = shallow(<Carousel />, options);
    expect(component).toMatchSnapshot();
  })

  it('renders <House /> one times', () => {
    const component = shallow(<Carousel />, options);
    component.setState({
      displayHouses: [
        {
          imgUrl: "https://housemania.s3-us-west-1.amazonaws.com/annie-spratt-BmjlyHwV1S0-unsplash.jpg",
          cost: '$309/night',
          location: 'Saratoga',
          type: 'apartment',
          title: 'quaint house',
          stars: 4,
          reviewCount: 20
        }
      ]
    })
    expect(component.find(House)).toHaveLength(1);
  })

  it('renders <Button /> two times for normal display', () => {
    const component = shallow(<Carousel />, options);
    component.setState({
      endIndex: 5,
      startIndex: 2
    })
    expect(component.find('.buttonDiv')).toHaveLength(2);
  })

  it('should increase state.startIndex by 1 when shiftDisplay called with left',  () => {
    const component = shallow(<Carousel />, options);
    component.instance().getDisplayHouses = clickFn;
    component.update();
    const instance = component.instance();
    expect(component.state('startIndex')).toBe(0);
    instance.shiftDisplay('left');
    expect(component.state('startIndex')).toBe(1);
  })

  it('should call shiftDisplay function with a side',  () => {
    const component = shallow(<Carousel />, options);
    component.instance().shiftDisplay = clickFn;
    component.update();
    component.instance().shiftDisplay('left');
    expect(component.instance().shiftDisplay).toHaveBeenCalledWith('left');
  })

  it('should call getDisplayHouses function with a start and end index',  () => {
    const component = shallow(<Carousel />, options);
    component.instance().getDisplayHouses = clickFn;
    component.update();
    component.instance().getDisplayHouses(1, 3);
    expect(component.instance().getDisplayHouses).toHaveBeenCalledWith(1,3);
  })

  it('should call componentDidMount once',  () => {
    const componentFunc = jest.fn();
    const component = shallow(<Carousel/>, options);
    component.instance().getDisplayHouses = componentFunc;
    component.update();
    const instance = component.instance();
    instance.componentDidMount();
    
    expect(instance.getDisplayHouses).toHaveBeenCalledTimes(1);
  })

});


// Test Button Component 
describe('Button component functionality', () => {
  const clickFn = jest.fn();
  const props = {
    buttonClickHandler: jest.fn(),
    value: 'right'
  }

  it('should render correctly', () => {
    const component = renderer.create(<Button props={props}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('button value should be right', () => { 
    const component = shallow(<Button value={'right'}/>);
    component
    expect(component.prop('value')).toEqual('right');
  });

  it('button click call handleClick to run shift the display', () => {
    const component = shallow(<Button buttonClickHandler={clickFn}/>);
    component
      .find('.button')
      .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});

// Test Stars Component
describe('Stars component functionality', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Stars/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders <FontAwesomIcon /> five times for every rating', () => {
    const component = shallow(<Stars />);
    component.setProps({
      rating: 4
    })
    expect(component.find(FontAwesomeIcon)).toHaveLength(5);
  })
});