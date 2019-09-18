import React from 'react';
import './App.css';
import LoginPage from './LoginPage.js'

class App extends React.Component {

 submit= data =>{
    console.log(data);
 }   
render(){
    return(
        <div className="App">
          <LoginPage submit={this.submit}/>
        </div>
    )
}
}
export default App;