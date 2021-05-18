import React, {Component, Fragment} from 'react';
import CartIcon from './../Ui/CartIcon/CartIcon';

class Menu extends Component {
  render() {
    const allProducts = this.props.products;
    const productsList = allProducts.map( (product) => {
      return(
        <tr key={product.id}>
          <td className="py-3">{product.name}</td>
          <td className="py-3">{product.price}</td>
          <th scope="row" className="py-3"> <CartIcon productId={product.id} atCart={product.atCart} onToggleStatus={this.props.OnToggleStatus}/> </th>
        </tr>
      );
    });

    return(
      <Fragment>
        <h1 className="my-5"> Menu </h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {productsList}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default Menu;