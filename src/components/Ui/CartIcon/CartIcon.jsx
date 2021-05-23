import React, {Component} from 'react';

import { MdAddShoppingCart } from "react-icons/md";

import './CartIcon.css';

class CartIcon extends Component {
  
    setClass = () => {
      return this.props.atCart === false ? "add_to_cart" : "add_to_cart added"
    };

    render() {
    return(
      <MdAddShoppingCart size="25px" className={this.setClass()} onClick={ () => this.props.onToggleStatus(this.props.productId)}/>
    );
  }
}

export default CartIcon;