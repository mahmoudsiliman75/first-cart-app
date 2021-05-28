import React , {Component, Fragment} from 'react';
import Joi from 'joi-browser';

class LoginForm extends Component {
  state={
    userName: '',
    password: '',
    errors: {},
  }

  schema = {
    userName: Joi.string().required(),
    password: Joi.string().required(),
  }
  
  // userName = createRef();
  
  handelValidation = () => {
    const errors = {};

    const clonedState = {...this.state};
    delete clonedState.errors;

    const res = Joi.validate(clonedState, this.schema, {abortEarly: false});
    console.log(res);

    if ( res.error === null ) {
      this.setState({errors: {}});
      return null;
    }

    for ( const error of res.error.details ) {
      errors[error.path] = error.message;
    }

    this.setState({errors});

    // if ( this.state.userName.trim() === '' ) {
    //   errors.userName = "User name Can't Be Empty"; 
    // }

    // if ( this.state.password.trim() === '' ) {
    //   errors.password = "Password Can't Be Empty"
    // } 

    // this.setState({
    //   errors: errors
    // });

    // return Object.keys(errors).length === 0 ? null : errors;
  }

  handelChange = (e) => {
    let clonedState = {...this.state};

    clonedState[e.currentTarget.name] = e.currentTarget.value;

    this.setState(clonedState);
  }

  handelSubmit = (e) => {
    e.preventDefault();

    const errors = this.handelValidation();

    if(errors) {
      return
    };

    console.log('submit');
  }

  
  render() {
    return(
      <Fragment>
        <h1 className="my-5"> Login Form </h1>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label htmlFor="user_name">User Name</label>
            <input onChange={this.handelChange} value={this.state.userName} name="userName" type="text" className="form-control" id="user_name" aria-describedby="emailHelp"/>
            
            { 
              this.state.errors.userName ? 
              <div className="alert alert-danger mt-2">
                {this.state.errors.userName}
              </div>
              :
              null
            }
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handelChange} value={this.state.password} name="password" type="password" className="form-control" id="password"/>
            { 
              this.state.errors.password ? 
              <div className="alert alert-danger mt-2">
                {this.state.errors.password}
              </div>
              :
              null
            }
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;