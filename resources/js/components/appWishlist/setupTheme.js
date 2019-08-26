import React, {Component} from 'react';
import Header from "./header.js";
import { Link } from 'react-router-dom';
class setupTheme extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPageLoaded: false,
           dataThemes : [],
        }
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData () {
        fetch('/themes')
        .then(response => response.json())
        .then(dataThemes => this.setState( prevState => { let state = {...prevState}; state.dataThemes = dataThemes; state.isPageLoaded = true; return state }));
    }
    onClick(){
        console.log(this.state.dataThemes)
    }
    render() {
        if(!this.state.isPageLoaded)
            return 'Loading...';
        var items = this.state.dataThemes;
        return (
            <div>
            <Header></Header>
            <div className="container">
            
            <div className="col-sm-8">
                        <form>
                            <div className="form-group theme">
                                    <label>Select Theme</label>
                                    <select className="form-control" id="">
                                    {items.themes ? items.themes.map((item,index)=>
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ):''}
                                    </select>
                                    <button className="btn btn-danger text-sm-left" onClick={this.onClick}>Uninstall Wishlist </button>
                                    <button className="btn btn-primary float-right" onClick={this.onClick}>Install Wishlist</button>
                            </div>    
                        </form>
                    </div>
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

export default setupTheme