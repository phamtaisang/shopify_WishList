import React, {Component} from 'react';
import CountCustomer from "./Count/CountCustomer.js";
import { Link } from 'react-router-dom';
class RecentlyAdded extends Component {
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
        console.log('count : ',this.state.dataProducts)
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
        console.log('count : ',this.state.dataProducts)
        return (
            <div className="col-sm-4">
                  <CountCustomer></CountCustomer>
            <div className="box">
            <table className="table table-striped table-bordered datatable dataTable">
                <thead>
                    <tr>
                        <th>Recently Added</th>
                    </tr>
                </thead>
                <tbody>
                    {items.slice(0, 6).map((item,index)=>
                        <tr key={index}> 
                        <Link to={`/byProduct/Detal/${item.id_product}`}>
                        <img src={item.imageProduct} width="100px"/>
                        {item.nameProduct}</Link>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )
    }
}

export default RecentlyAdded