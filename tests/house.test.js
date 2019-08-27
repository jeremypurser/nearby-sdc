import { mount, shallow, render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import House from '../client/components/House.jsx';
import Button from '../client/components/Button.jsx';
import Carousel from '../client/components/Button.jsx';




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

  it('button click call handleClick to run changeCurrentHouse', () => {
    const component = shallow(<House changeCurrentHouse={clickFn} house={props}/>);
    component
      .find('.house')
      .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});

describe('Test Carousel component functionality', () => {
  const clickFn = jest.fn();
  const propsCar = {
    shiftDisplay: clickFn,
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
    ],
    end: 4,
    start: 1
  }; 

  it('should render correctly', () => {
    const component = renderer.create(<Carousel/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('does not break with empty displayHouses array', () => {
    const component = shallow(<Carousel displayHouses={[]}/>);
    expect(component).toMatchSnapshot();
  })

  it('returns null if no houses to map through', () => {
    const component = shallow(<Carousel/>);
    expect(component).toMatchSnapshot();
  })

  // it('renders <House /> one times', () => {
  //   const component = shallow(<Carousel displayHouses={propsCar.displayHouses}/>);
  //   expect(component.find(House)).to.have.lengthOf(1);
  // })

});

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