import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onSubmit(e){
        e.preventDefault();

    }
    onClick(){
        this.setState({ loading:true });
        setInterval(() => {
            this.setState({
                loading: false
            })
        }, 3500);
    }
    render(){
        const {loading} = this.state
        const style = {
            backgroundColor: "red"
        }
        return(
            <div className="App">
             <form className="App-header" onSubmit={this.onSubmit}>
                <h2>CONTACT US</h2>
               <input class="name" type="text" placeholder="First Name"/><br/>
               <input class="name" type="text" placeholder="Middle Name"/><br/>
               <input class="name" type="text" placeholder="Last Name"/><br/>
               <select>
                   <option>Choose Gender</option>
                   <option>male</option>
                   <option>Female</option>
               </select><br/>
               <input type="checkbox"/><p>I agree</p>
               <button style={style} onClick={this.onClick} class="btn"  disabled={loading}>
                   {loading? "Sending....": "SEND"}
               </button>
            </form>
            </div>
            
        )
    }
}
export default Header;