import React , {Component, createRef, Fragment} from 'react';

class LoginForm extends Component {
  state={}
  
  userName = createRef();
  
  handelSubmit = (e) => {
    e.preventDefault();
    console.log(e, this.userName.current.value);
  }
  
  render() {
    return(
      <Fragment>
        <h1 className="my-5"> Login Form </h1>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label htmlFor="user_name">Email address</label>
            <input ref={this.userName} type="text" className="form-control" id="user_name" aria-describedby="emailHelp"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;