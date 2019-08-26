import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from "./header.js";
import MostPopular from "./MostPopular.js";
import RecentlyAdded from "./RecentlyAdded.js";
class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isPageLoaded: false,
            count : 0,
           dataProducts : [],
        }
        this.Count = this.Count.bind(this);
    }
    Count(length){
       console.log('count_props',length)
    //    this.setState({
    //         count : length
    //    });
    }
    render() {
        return (
            <div className="container">
                <Header></Header>
                <div className="row bot mt-2">
                <RecentlyAdded></RecentlyAdded>
                    <MostPopular Count = {this.Count} />
                    <div className="col-sm-4">
                    <button type="button" className="btn btn-primary">FREE Setup !</button>
                    <button type="button" className="btn btn-default">Frequently Asked Questions</button>
                        <ul className="box">
                            <li>  <i className="fa fa-heart red" aria-hidden="true"></i><Link to='/byProduct'><h5>Manage Wishlist <p>- by Product</p></h5></Link></li>
                            <li>  <i className="fa fa-heart blue" aria-hidden="true"></i><Link to='/byCustomer'><h5>Manage Wishlist <p>- by Customer</p></h5></Link></li>
                            <li>  <i className="fa fa-heart " aria-hidden="true"></i><Link to='/integrate'><h5>Theme Integrate</h5></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            

    )
    }
}

export default Home