import React, {Component} from 'react';
import Header from "./header.js";
import { Link } from 'react-router-dom';
import ByCustomer from "./byCustomer.js";
class byProductDetal extends Component {
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
        var id_product =  this.props.match.params.id;
        fetch('/wishlist/detailPro/'+id_product)
        .then(response => response.json())
        .then(dataProducts => this.setState( prevState => { let state = {...prevState}; state.dataProducts = dataProducts; state.isPageLoaded = true; return state }));
        console.log('tag',this.props.match.params.id);
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
                    <th className="sorting_disabled">product name</th>
                    <th>customer Name</th>
                    <th>Email id </th>
                    <th>View/manage</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item,index)=>
               
                                    <tr key={index}>
                                        <td>
                                            <img src={item.imageProduct} width="100px"/>
                                        </td>
                                        <td>{item.nameProduct}</td>
                                        <td>{item.customerName}</td>
                                        <td>{item.customerEmail}</td>
                                        <td> Manage Product</td>
                                        <td>
                                            <button  className="btn btn-warning" onClick={this.delete.bind(this,item.id_product)}>
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>Delete
                                            </button>
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

export default byProductDetal