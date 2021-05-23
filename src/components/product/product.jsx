import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './product.css';

import { FaTrashAlt } from "react-icons/fa";

class Products extends Component {

  getClasses() {
    return this.props.product.count === 0 ? "badge bg-warning text-white p-2 m-2" : "badge bg-primary text-white p-2 m-2"
  }

  render() {     
    return(
      <div className="row my-3">
        <div className="col-1">
          <Link to={`/products/${this.props.product.id}`} className="product_name"> {this.props.product.name} </Link>
        </div>

        <div className="col">
          <button onClick={ () => this.props.onSubstract(this.props.product) } className="btn btn-danger mx-1"> - </button>
          <span className={this.getClasses()}> {this.props.product.count} </span>
          <button onClick={ () => this.props.onAdd(this.props.product) } className="btn btn-success mx-1"> + </button>
          <button onClick={ () => this.props.onDelete(this.props.product) } className="btn btn-danger mx-1"> <FaTrashAlt /> </button>
        </div>
      </div>
    )
  }
}

export default Products;