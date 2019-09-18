import React from 'react';
import './App.css';
import InlineErrors from './InlineErrors';
import PropTypes from 'prop-types';

class LoginPage extends React.Component {
constructor(props){
    super(props);
    this.state = {
        errors: {},
        data: {
            name:'',
            password: ''
        },
        loading: false
        
    }
}

onChange = e => this.setState({ data: {...this.state.data}, [e.target.name]: e.target.value });
onSubmit = (e) =>{
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    
    if(Object.keys(errors).length === 0){
        const data = this.state.data
        this.props.submit(data);
    }

}
validate = (data) => {
const errors = {};
if(!data.name) errors.name = "Fill in your name";
if(!data.password) errors.password = "Fill in Your Password";
return errors;
}
render(){
    
    const{data,errors} = this.state;

    return(
        <div className="App">
            <p>LOG IN</p>
         <form onSubmit={this.onSubmit}>
          <input
          type="text" 
          name="name"
          id= "name"
          values={data.name}
          placeholder="Name"
          onChange={this.onChange}
          />
          {errors.name && <InlineErrors text={errors.name}/>}
          <br/>
          <input 
          type="password"
          name="password"
          id= "password"
          values={data.password}
          placeholder="Password"
          onChange={this.onChange}
          />
          {errors.password && <InlineErrors text={errors.password}/>}
          <br/>
          <button>SUBMIT</button>
         </form>
        </div>
    )
}
}

LoginPage.propTypes = {
 submit: PropTypes.func.isRequired
}
export default LoginPage;