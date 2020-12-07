import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {logout} from '../../actions/auth';
import logo from '../../img/logo2.png'


export const Navbar = ({ auth: {isAuthenticated, loading}, logout}) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
        People</Link> 
      </li>
      <li>
        <Link to='/posts'>
        Projects</Link> 
      </li>
      <li>
        <Link to='/dashboard'>
        <i className="fas fa-user"/>{''}
        <span className="hide-sm">Dashboard</span></Link> 
           
        </li>
        <li><a onClick ={logout} href="#!">
        <i className="fas fa-sign-out-alt"/>{''}
        <span className="hide-sm">Logout</span></a></li>
        
    </ul>
  ); 
  const guestLinks = (
    <ul>
        <li><Link to="/profiles">People</Link></li>
        <li>
        <Link to='/register'>Register</Link>    
        </li>
        <li>
        <Link to='/login'>Login</Link>
        </li>
      </ul>
  );
  
  return (
        <nav className="navbar bg-dark">
      <h1>
          <Link to='/'>
          <div style = {{display : "inline-block"}}>
           <img style = {{width:40, display : "inline-block"}} src = {logo} alt="logo"/> SparKonnect
           </div>
        </Link>
      </h1>
  {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </nav>
    )
}

Navbar.propTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout}) (Navbar);