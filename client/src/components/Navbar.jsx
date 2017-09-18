import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">{props.name}</a>
      <div className="collapse navbar-collapse" id="navbarText">
        <span className="navbar-text">
          {props.userName}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
