import React, {Component, Fragment} from 'react';
import Products from './../product/product';

import { AiOutlineReload } from "react-icons/ai";

class ShoppingCart extends Component {
  render() {
    const allProducts = this.props.products;
    const productsList = allProducts.map( (product) => {
      return (
        <Products 
          key={product.id}
          product={product}
          onDelete={this.props.onDelete}
          onAdd={this.props.onAdd}
          onSubstract={this.props.onSubstract}
        />
      ); 
    });

    return(
      <Fragment>
        <h1> Shopping Cart </h1>

        <button onClick={this.props.onReset} className="btn btn-secondary my-3"> Reset <AiOutlineReload /> </button>

        {productsList}
      </Fragment>
    )
  }
}

export default ShoppingCart;
