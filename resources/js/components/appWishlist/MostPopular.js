import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CountProduct from "./Count/CountProduct.js";
class MostPopular extends Component {
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
        fetch('/wishlist/product_best')
        .then(response => response.json())
        .then(dataProducts => this.setState( prevState => { let state = {...prevState}; state.dataProducts = dataProducts; state.isPageLoaded = true; return state }));
        
    }
    render() {
        if(!this.state.isPageLoaded)
        return 'Loading...';
        var items = this.state.dataProducts;
      
        // var length = items.length;
        // this.props.Count(length);
        //console.log('count : ',this.state.dataProducts.length)
        return (
            <div className="col-sm-4">
                  <CountProduct></CountProduct>
            <div className="box">
            <table className="table table-striped table-bordered datatable dataTable">
                <thead>
                    <tr>
                        <th>Most Popular</th>
                    </tr>
                </thead>
                <tbody>
                    {items.slice(0, 6).map((item,index)=>
                        <tr key={index}> 
                      <Link to={`/byProduct/Detal/${item.id_product}`}>
                        <img src={item.imageProduct} width="100px"/>
                        {item.nameProduct}</Link>
                         ({item.soluong})</tr>
        
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )
    }
}

export default MostPopular