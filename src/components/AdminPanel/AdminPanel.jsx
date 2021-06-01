import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import { GoTrashcan } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { HiPlusSm } from "react-icons/hi";

class AdminPanel extends Component {
  render() {
    const onRemove = this.props.onRemove;
    const allProducts = this.props.products;
    const productsList = allProducts.map( (product) => {
      return (
        <tr key={product.id}>
          <td> {product.name} </td>
          <td> {product.price} </td>
          <td> 
            <Link to={"/productForm/"+product.id}  className="btn btn-lg text-warning"> 
              <FiEdit/> 
            </Link> 
          </td>
          <td> 
            <button onClick={() => onRemove(product)} className="btn btn-lg text-danger"> 
              <GoTrashcan/> 
            </button> 
          </td>
        </tr>
      );
    });

    return(
      <Fragment>
        <h1 className="mt-4"> AdminPanel </h1>

        <Link to="/productForm/new" className="btn btn-success mb-4">
          <HiPlusSm/>
          Add New Product
        </Link>

        <table className="table ">
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