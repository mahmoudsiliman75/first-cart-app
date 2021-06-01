import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Ui/NavBar/NavBar';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import LoginForm from './LoginForm/LoginForm';
import Menu from './Menu/Menu';

class App extends Component { 
  state = {
    products: [
      // {id: 1, name: 'Burger', price: 40, count: 0, atCart: false},
      // {id: 2, name: 'Pizza', price: 30, count: 0, atCart: false},
      // {id: 3, name: 'Fries',  price: 20, count: 0, atCart: false},
      // {id: 4, name: 'Cola',  price: 10, count: 0, atCart: false},
    ],
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

          <Route path="/login" component={LoginForm}/>
        </main>
      </div>
    );
  }
}

export default App;
