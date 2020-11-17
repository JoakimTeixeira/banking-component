import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, dispatch }) => {
  const handleButtonSubmit = () => {
    dispatch();
  };

  return (
    <button onClick={handleButtonSubmit} type="submit" className="btn btn-primary mb-2 ml-2">{text}</button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
