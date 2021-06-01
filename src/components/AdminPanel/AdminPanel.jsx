import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import { GoTrashcan } from "react-icons/go";
import { FiEdit } from "react-icons/fi";

class AdminPanel extends Component {
  render() {

    const allProducts = this.props.products;
    const productsList = allProducts.map( (product) => {
      return (
        <tr>
          <td> {product.name} </td>
          <td> {product.price} </td>
          <td> 
            <Link to="/" className="btn btn-lg text-warning"> 
              <FiEdit/> 
            </Link> 
          </td>
          <td> 
            <Link to="/" className="btn btn-lg text-danger"> 
              <GoTrashcan/> 
            </Link> 
          </td>
        </tr>
      );
    });


    return(
      <Fragment>
        <h1 className="my-5"> AdminPanel </h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {productsList}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default AdminPanel;