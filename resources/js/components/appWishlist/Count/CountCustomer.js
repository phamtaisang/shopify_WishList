import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class CountCustomer extends Component {
        constructor(props){
        super(props);
        this.state = {
            isPageLoaded: false,
            count : 0,
           dataProducts : [],
        }
    }
    componentDidMount(){
        this.fetchData();
        console.log('count_hi : ',this.state.dataProducts)
    }
    fetchData () {
        fetch('/wishlist/getCustomer')
        .then(response => response.json())
        .then(dataProducts => this.setState( prevState => { let state = {...prevState}; state.dataProducts = dataProducts; state.isPageLoaded = true; return state }));
        
    }
    render() {
        if(!this.state.isPageLoaded)
        return 'Loading...';
        var items = this.state.dataProducts;
      
        // var length = items.length;
        // this.props.Count(length);
        console.log('count : ',this.state.dataProducts)
        return (
        
                  <div className="box header">
                    <i className="fa fa-heart red" aria-hidden="true"></i>
                        <span><Link to='/byCustomer'>WISH CUSTOMER</Link></span> <span className="length">{items.length}</span>
                    </div>
    )
    }
}

export default CountCustomer