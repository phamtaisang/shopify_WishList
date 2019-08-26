import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class header extends Component {
    render() {
        return (
            <div>
            <div className="navbar">
                <div className="dropdown">
                    <div className="dropdown-content">
                       <Link to='/'>Home</Link>
                       <Link to='/byCustomer'>Manage Wishlist - by Customer</Link>
                       <Link to='/byProduct'>Manage Wishlist - by Product</Link>
                       <Link to='/integrate'>integrate Themes</Link>
                    </div>
                </div> 
            </div>
            </div>
    )
    }
}

export default header