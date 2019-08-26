import React, {Component} from 'react';
import Header from "./header.js";
import { Link } from 'react-router-dom';
class byCustomer extends Component {
        constructor(props){
        super(props);
        this.state = {
            isPageLoaded: false,
           dataCustomes : [],
        }
    }
    componentDidMount(){
        this.fetchData(); 
    }
    fetchData () {
        fetch('/wishlist/getCustomer')
        .then(response => response.json())
        .then(dataCustomes => this.setState( prevState => { let state = {...prevState}; state.dataCustomes = dataCustomes; state.isPageLoaded = true; return state }));
    }
    render() {
        if(!this.state.isPageLoaded)
        return 'Loading...';
        var items = this.state.dataCustomes;
        return (
            <div>
            <Header></Header>
            <div className="container">
            <h5>Manage Wishlist - by Customer</h5> <br></br>        
            <table className="table table-striped table-bordered datatable dataTable">
                <thead>
                <tr>
                    <th>Customer name</th>
                    <th>Email id </th>
                    <th>No . of Product</th>
                    <th colSpan="2">action</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item,index)=>
                    <tr key={index} >
                        <td>
                            {item.customerName}
                        </td>
                        <td>{item.customerEmail}</td>
                        <td>{item.soluong}</td>
                        <td><button  className="btn btn-link"> <Link to={`/byCustomer/Detal/${item.id_user}`}>Manage Wishlist - by Product</Link> </button></td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
            </div>
            

    )
    }
}

export default byCustomer