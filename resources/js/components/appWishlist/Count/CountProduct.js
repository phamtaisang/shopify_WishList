import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class CountProduct extends Component {
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
    }
    fetchData () {
        fetch('/wishlist/Recently_Added')
        .then(response => response.json())
        .then(dataProducts => this.setState( prevState => { let state = {...prevState}; state.dataProducts = dataProducts; state.isPageLoaded = true; return state }));
        
    }
    render() {
        if(!this.state.isPageLoaded)
        return 'Loading...';
        var items = this.state.dataProducts;
      
        // var length = items.length;
        // this.props.Count(length);
        return (
        
                  <div className="box header">
                    <i className="fa fa-heart blue" aria-hidden="true"></i>
                        <span><Link to='/byProduct'>PRODUCTS IN WISHLIST</Link></span> <span className="length">{items.length}</span>
                    </div>
    )
    }
}

export default CountProduct