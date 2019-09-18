import React from 'react';

class Post extends React.Component {
    render(){
        return(
            <div className="App container">
            <li>
            {this.props.id}<br/>
            {this.props.body}
            </li><br/>
            <button onClick={this.props.delete}>Delete</button>
            <hr/>
            </div>
        )
    }
}
export default Post;