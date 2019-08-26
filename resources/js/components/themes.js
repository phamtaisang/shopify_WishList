import React, {Component} from 'react';
import NavBar from './backend.js';
class Themes extends Component {
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
        console.log('tag', '')
    }
    render() {
        if(!this.state.isPageLoaded)
            return 'Loading...';
        var items = this.state.dataThemes;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <NavBar></NavBar>
                    </div>
                    <div className="col-sm-8">
                        <form>
                            <div className="form-group">
                                    <label>Select Theme</label>
                                    <select className="form-control" id="">
                                    {items.themes ? items.themes.map((item,index)=>
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ):''}
                                    </select>
                                    <button onClick={this.onClick}>install </button>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Themes