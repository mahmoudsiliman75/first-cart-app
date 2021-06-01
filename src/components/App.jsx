import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Ui/NavBar/NavBar';
import Menu from './Menu/Menu';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import AdminPanel from './AdminPanel/AdminPanel';
import LoginForm from './LoginForm/LoginForm';
import ProductForm from './ProductForm/ProductForm';

class App extends Component { 
  state = {
    products: [],
  }

  toggleAtCartStatus = (id) => {
    let selectedProduct = this.state.products.find( (product) => product.id === id );
    selectedProduct.atCart = !selectedProduct.atCart;
    selectedProduct.count = 1;

    this.setState({
      count: selectedProduct,
      atCart: selectedProduct
    }) 
  }

  handelDelete = (product) => {
    let allProducts = this.state.products;
    let selectedProduct = allProducts.find( (el) => el.id === product.id );
    selectedProduct.atCart = false;

    this.setState({
      atCart: selectedProduct
    });
  }

  handleRemoveItem = (product) => {
    console.log('delete');
    console.log(product);
  }

  handelReset = () => {
    let products = [...this.state.products];

    products = products.map( (el) => {
      el.count = 0
      return el;
    });

    this.setState({
      products
    })

    console.log(products);
  }

  handelAddBtn = (product) => {
    const products = [...this.state.products];
    let targetProduct = products.find( (el) => el.id === product.id );
    this.setState({
      count: targetProduct.count++,
    })
  }

  handelsubstractBtn = (product) => {
    const products = [...this.state.products];
    let targetProduct = products.find( el => el.id === product.id );

    if ( targetProduct.count > 0 ) {
      this.setState({
        count: targetProduct.count--,
      }); 
    }

    this.setState({
      count: 0,
    }); 
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products/')
    .then( data => this.setState({
      products:  data.data
    }))
  }

  render() {
    return (
      <div className="App">
        <NavBar cartLength={this.state.products.filter( (product) => product.atCart !== false && product.count > 0 ).length}/>

        <main className="container">
          <Route exact path="/" render={ () => (
            <Menu 
              products={this.state.products}
              OnToggleStatus={this.toggleAtCartStatus}
              />
            )}
          />

          <Route path="/cart" render={ (props) => (
            <ShoppingCart
              products={this.state.products.filter( (product) => product.atCart !== false )}
              onDelete={this.handelDelete}
              onReset={this.handelReset}
              onAdd={this.handelAddBtn}
              onSubstract={this.handelsubstractBtn}
              {...props}
              /> 
            )}
          />

          <Route path="/admin" render={ () => (
            <AdminPanel
              products={this.state.products}
              onRemove={this.state.handleRemoveItem}
            />
          )}
          />

          <Route path="/productForm/:id" component={ProductForm}/>

          <Route path="/login" component={LoginForm}/>
        </main>
      </div>
    );
  }
}

export default App;
