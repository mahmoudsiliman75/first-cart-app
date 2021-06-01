import React, {Component, Fragment} from 'react';

class ProductForm extends Component {
  state= {
    name: '',
    price: ''
  }

  handelChange = (e) => {
    let clonedState = {...this.state};

    clonedState[e.currentTarget.name] = e.currentTarget.value;

    this.setState(clonedState);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  render() {
    return(
      <Fragment>
        <h1 className="my-5"> Fill Product Data </h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="product_name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handelChange} className="form-control" id="product_name"/>
          </div>

          <div className="form-group">
            <label htmlFor="product_price">Price</label>
            <input type="number" name="price" value={this.state.price} onChange={this.handelChange}  min="1" className="form-control" id="product_price"/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default ProductForm;