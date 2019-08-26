import React, {Component} from 'react';
import NavBar from './backend.js';
class Widgets extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPageLoaded: false,
           dataProduct : [],
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData () {
        fetch('/products')
        .then(response => response.json())
        .then(dataProduct => this.setState( prevState => { 
            let state = {...prevState};
            state.dataProduct = dataProduct;
            state.isPageLoaded = true;
            return state;
        }));
    }
    render() {
        if(!this.state.isPageLoaded)
            return 'Loading...';
        var items = this.state.dataProduct;
        console.log(items.products) 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <NavBar></NavBar>
                    </div>
                    <div className="col-sm-8">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">title</th>
                                <th scope="col">tags</th>
                                <th scope="col">image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.products ? items.products.map((item,index)=>
                                    <tr key={item.id} >
                                        <td>{item.title}</td>
                                        <td>{item.tags}</td>
                                        <td>
                                            <img src={item.image.src} width="150px"/>
                                        </td>
                                    </tr>
                                ):null}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
        )
    }
}

export default Widgets