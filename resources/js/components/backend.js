import React, {Component} from 'react';
import Themes from "./themes.js";
import { Link } from 'react-router-dom';
class backend extends Component {
    render() {
        return ( 
            <div>
                <ul className="list-group">
                    <li className="list-group-item"><Link to='/widget'>Widgets</Link></li>
                    <li className="list-group-item"><Link to='/themes'>Themes</Link></li>
                    <li className="list-group-item"><Link to='/setting'>Settings</Link></li>
                </ul>
            </div>
    )
    }
}

export default backend