import React,{Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

import { RiShoppingCartLine } from "react-icons/ri";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact className="nav-link" aria-current="page" to="/">Menu</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            </ul>
          </div>

          <span className="badge bg-primary text-white"> <RiShoppingCartLine size="20px"/> {this.props.cartLength} </span>
        </div>
      </nav>
    )
  }
}

export default NavBar;