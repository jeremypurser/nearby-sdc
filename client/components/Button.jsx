import React from 'react';
const buttonDiv = {
  float: 'left',
  width: '100px',
  height: '500px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center'
};

const Button = (props) => {
  return (
    <div className='button' style={buttonDiv}>
      <button onClick={props.buttonClickHandler} value={props.value}>X</button>
    </div>
  )
}

export default Button;