import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

export default (props) => {
  return(
      <button className="largeButtons" onClick={props.onClick}> {props.name}
      </button>
  )
}

