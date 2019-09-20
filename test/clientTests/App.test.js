import { shallow, mount } from 'enzyme';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Widget from '../../client/components/Widget.jsx';
import House from '../../client/components/House.jsx';
import Button from '../../client/components/Button.jsx';
import Carousel from '../../client/components/Carousel.jsx';
import Stars from '../../client/components/Stars.jsx';
import Heart from '../../client/components/Heart.jsx';

// Widget Component
describe('Test Widget component functionality', () => {
  const options = {
    disableLifecycleMethods: true,
  };

  it('should render correctly', () => {
    const component = shallow(<Widget/>, options);
    expect(component).toMatchSnapshot();
  });

  it('should call componentDidMount once', () => {
    const component = shallow(<Widget/>, options);
    component.instance().getNearbyHouses = jest.fn();
    component.update();
    const instance = component.instance();
    instance.componentDidMount();

    expect(instance.getNearbyHouses).toHaveBeenCalledTimes(1);
  });

  it('should render Carousel if state.view is true', () => {
    const component = shallow(<Widget />, options);
    component
      .setState({ view: true })
      .update();
    expect(component.find(Carousel)).toHaveLength(1);
  });

  // it('should change currentHouse state to the id changeCurrentHouse is called with', () => {
  //   const component = shallow(<Widget />, options);
  //   component.instance().getNearbyHouses = jest.fn();
  //   component
  //     .update()
  //     .instance()
  //     .changeCurrentHouse(4);
  //   expect(component.state('currentHouse')).toBe(4);
  // });

  it('should change update nearbyHouseList state to array of houses', () => {
    const houses = ['house1', 'house2', 'house3'];
    const component = shallow(<Widget />, options);
    component
      .instance()
      .updateHouseList(houses);
    expect(component.state('nearbyHouseList')).toBe(houses);
  });
});

// House Component testing
describe('Test House component functionality', () => {
  const clickFn = jest.fn();
  const props = {
    imgUrl: 'https://housemania.s3-us-west-1.amazonaws.com/annie-spratt-BmjlyHwV1S0-unsplash.jpg',
    cost: '$309/night',
    location: 'Saratoga',
    type: 'apartment',
    title: 'quaint house',
    stars: 4,
    reviewCount: 20,
  };

  it('should render correctly', () => {
    const component = shallow(<House house={props}/>);
    expect(component).toMatchSnapshot();
  });

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
    disableLifecycleMethods: true,
  };
  const clickFn = jest.fn();

  it('should render correctly', () => {
    const component = shallow(<Carousel />, options);
    expect(component).toMatchSnapshot();
  });

  it('renders <House /> one times', () => {
    const nearbyHouseList = [
      {
        cost: 336,
        id: 6891904,
        imgurl: 'sdcimg-203.jpg',
        location: 'Favianfurt',
        reviewcount: 127,
        stars: 3,
        title: 'Fugit Numquam Dicta',
        type: 'at',
        zip: 37600
      },
      {
        cost: 246,
        id: 6891905,
        imgurl: 'sdcimg-204.jpg',
        location: 'Harveychester',
        reviewcount: 120,
        stars: 5,
        title: 'Sequi Voluptatem Nihil',
        type: 'temporibus',
        zip: 15169
      }
    ];
    const component = shallow(<Carousel />, options);
    component.setState({
      displayHouses: [
        {
          id: 1,
          imgurl: 'https://housemania.s3-us-west-1.amazonaws.com/annie-spratt-BmjlyHwV1S0-unsplash.jpg',
          cost: '$309/night',
          location: 'Saratoga',
          type: 'apartment',
          title: 'quaint house',
          stars: 4,
          reviewcount: 20,
        },
      ],
    });
    expect(component.find(House)).toHaveLength(1);
  });

  it('renders <Button/> two times for normal display', () => {
    const component = shallow(<Carousel />, options);
    component.setState({
      endIndex: 5,
      startIndex: 2,
    });
    expect(component.find('.buttonDiv')).toHaveLength(2);
  });


  it('should increase state.startIndex by 1 when shiftDisplay called with left', () => {
    const component = shallow(<Carousel />, options);
    component.instance().getDisplayHouses = clickFn;
    component.update();
    expect(component.state('startIndex')).toBe(0);
    component
      .instance()
      .shiftDisplay('left');
    expect(component.state('startIndex')).toBe(1);
  });

  it('should decrease state.startIndex by 1 when shiftDisplay called with right', () => {
    const component = shallow(<Carousel />, options);
    component.instance().getDisplayHouses = clickFn;
    component.setState({
      startIndex: 2,
      endIndex: 5,
    });
    component.update();
    expect(component.state('startIndex')).toBe(2);
    component
      .instance()
      .shiftDisplay('right');
    expect(component.state('startIndex')).toBe(1);
  });

  it('should call shiftDisplay function with a side', () => {
    const component = shallow(<Carousel />, options);
    component.instance().shiftDisplay = clickFn;
    component
      .update()
      .instance()
      .shiftDisplay('left');
    expect(component.instance().shiftDisplay).toHaveBeenCalledWith('left');
  });

  it('should call getDisplayHouses function with a start and end index', () => {
    const component = shallow(<Carousel />, options);
    component.instance().getDisplayHouses = clickFn;
    component
      .update()
      .instance()
      .getDisplayHouses(1, 3);
    expect(component.instance().getDisplayHouses).toHaveBeenCalledWith(1, 3);
  });

  it('should call componentDidMount once', () => {
    const component = shallow(<Carousel/>, options);
    component.instance().getDisplayHouses = jest.fn();
    component.update();
    const instance = component.instance();
    instance.componentDidMount();

    expect(instance.getDisplayHouses).toHaveBeenCalledTimes(1);
  });

  it('should add index to heartArr if not on it already', () => {
    const component = shallow(<Carousel />, options);
    component
      .setState({
        heartArr: [2],
      })
      .instance()
      .heartHouseClicked(5);
    expect(component.state('heartArr')).toMatchObject([2, 5]);
  });
});

// Test Button Component
describe('Button component functionality', () => {
  const clickFn = jest.fn();
  const props = {
    buttonClickHandler: jest.fn(),
    value: 'right',
  };

  it('should render correctly', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });

  it('button value should be right', () => {
    const component = shallow(<Button value={'right'}/>);
    expect(component.prop('value')).toEqual('right');
  });


  it('button click call handleClick to run shift the display', () => {
    const component = shallow(<Button buttonClickHandler={clickFn}/>);
    component
      .find(FontAwesomeIcon)
      .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});

// Test Stars Component
describe('Stars component functionality', () => {
  it('should render correctly', () => {
    const component = shallow(<Stars />);
    expect(component).toMatchSnapshot();
  });

  it('renders <FontAwesomIcon /> five times for every rating', () => {
    const component = shallow(<Stars />);
    component.setProps({
      rating: 4,
    });
    expect(component.find(FontAwesomeIcon)).toHaveLength(5);
  });
});

// Test Heart Component
describe('Heart component functionality', () => {
  const options = {
    disableLifecycleMethods: true,
  };

  it('should render correctly', () => {
    const component = shallow(<Heart />, options);
    expect(component).toMatchSnapshot();
  });

  it('should call componentDidMount once', () => {
    const component = shallow(<Heart/>, options);
    component.instance().checkArrForRender = jest.fn();
    component.update();
    const instance = component.instance();
    instance.componentDidMount();

    expect(instance.checkArrForRender).toHaveBeenCalledTimes(1);
  });

  it('should change clicked state to false if not in heartArr with checkArrForRender', () => {
    const component = shallow(<Heart />, options);
    component
      .setProps({
        heartArr: [1],
        arrIndex: 2,
      })
      .instance()
      .checkArrForRender();
    expect(component.state('clicked')).toBe(false);
  });

  it('should toggle state clicked when the heart is clicked', () => {
    const component = shallow(<Heart />, options);
    component
      .setProps({
        heartArr: [1],
        arrIndex: 2,
        heartHouseClicked: jest.fn(),
      })
      .find('#emptyHeart')
      .simulate('click');
    expect(component.state('clicked')).toBe(true);
  });
});
