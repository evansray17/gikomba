import React from 'react';
import { whileStatement } from 'babel-types';

class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
               <p style={{color: "#ffff", padding:"3px"}}>All rights reserved</p>
            </div>
        )
    }
}
export default Footer;