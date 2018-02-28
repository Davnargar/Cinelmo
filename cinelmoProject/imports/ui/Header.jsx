import React from 'react';

const Header = () => (
  <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">Cinelmo</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="/">Inicio</a></li>
        <li><a href="/">Listado</a></li>
        <li><a href="/insert">Insertar</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
);
{/* <ul classNameName="nav navbar-nav navbar-right">
  <li><a href="/signup"><span classNameName="glyphicon glyphicon-user"></span> Sign Up</a></li>
  <li><a href="/login"><span classNameName="glyphicon glyphicon-log-in"></span> Login</a></li>
</ul> */}
export default Header;
