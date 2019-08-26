import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import byCustomer from "./appWishlist/byCustomer.js";
import byProduct from "./appWishlist/byProduct.js";
import Home from "./appWishlist/Home.js";
import byCustomerDetal from "./appWishlist/byCustomerDetal.js";
import byProductDetal from "./appWishlist/byProductDetal.js";
// import Setting from "./setting.js";
 import Themes from "./appWishlist/setupTheme.js";
// import Widgets from './widgets';
class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                <Route exact path = '/' component ={Home}/>
                <Route exact path = '/byCustomer' component ={byCustomer}/>
                <Route exact path = '/byProduct' component ={byProduct}/>
                <Route exact path = '/byCustomer/Detal/:id' component ={byCustomerDetal}/>
                <Route exact path = '/byProduct/Detal/:id' component ={byProductDetal}/>
                <Route exact path = '/integrate' component ={Themes}/>
                    {/* <Route exact path = '/' component ={backend}/>
                    <Route exact path = '/setting' component ={Setting}/>
                    <Route exact path = '/themes' component ={Themes}/>
                    <Route exact path = '/widget' component ={Widgets}/> */}
                </Switch>
            </main>
        )
    }
}

export default RouterPath