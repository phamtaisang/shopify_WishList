import React, {Component} from 'react';
import Header from "./header.js";
import { Link } from 'react-router-dom';
class byProduct extends Component {
        constructor(props){
        super(props);
        this.state = {
            isPageLoaded: false,
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
    delete(id_product){
        fetch('/wishlist/DelProduct_serve/'+id_product, {
        })
        this.fetchData();
    }
    render() {
        if(!this.state.isPageLoaded)
        return 'Loading...';
        var items = this.state.dataProducts;
        return (
            <div>
            <Header></Header>
            <div className="container">
            <h5>Manage Wishlist - by Product</h5> <br></br>        
            <table className="table table-striped table-bordered datatable dataTable">
                <thead>
                <tr role="row">
                    <th className="sorting_disabled">imgages</th>
                    <th className="sorting_asc">product name</th>
                    <th>in wishlist</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item,index)=>
                                    <tr key={index}>
                                        <td>
                                            <img src={item.imageProduct} width="50px"/>
                                        </td>
                                        <td>{item.nameProduct}</td>
                                        <td>{item.soluong}</td>
                                        <td>
                                        <button  className="btn btn-link"><Link to={`/byProduct/Detal/${item.id_product}`}><i class="fa fa-user" aria-hidden="true"></i>View</Link></button>  
                                            <button  className="btn btn-link" onClick={this.delete.bind(this,item.id_product)}><Link><i className="fa fa-trash-o" aria-hidden="true"></i>Remove</Link></button>
                                           
                                        </td>
                                       
                                    </tr>
                                )}
                </tbody>
            </table>
            </div>
            </div>
            

    )
    }
}

export default byProduct