// resources/js/components/Example.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';
import RouterPath from './RouterPath';

export default class Index extends Component {
    render() {
        return (
         <HashRouter>
                    <div style={{ margin: '0px' }}><RouterPath/></div>
            </HashRouter >
        )
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(
        <Index/>,
        document.getElementById('index'));
}
