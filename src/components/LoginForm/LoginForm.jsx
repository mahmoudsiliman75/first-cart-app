import React , {Component, Fragment} from 'react';

class LoginForm extends Component {
  state={
    userName: '',
    password: '',
  }
  
  // userName = createRef();
  
  handelValidation = () => {
    console.log('Validate');
  }

  handelChange = (e) => {
    let clonedState = {...this.state};

    clonedState[e.currentTarget.name] = e.currentTarget.value;

    this.setState(clonedState);
  }

  handelSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    
    this.handelValidation();
  }

  
  render() {
    return(
      <Fragment>
        <h1 className="my-5"> Login Form </h1>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label htmlFor="user_name">User Name</label>
            <input onChange={this.handelChange} value={this.state.userName} name="userName" type="text" className="form-control" id="user_name" aria-describedby="emailHelp"/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handelChange} value={this.state.password} name="password" type="password" className="form-control" id="password"/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;