import React, {Component} from 'react';
import NavBar from './backend.js';
class Setting extends Component {
 constructor(props) {
        super(props);
     
        this.state = {
        Button: ""
        };
      }
     
      handleSubmitForm(event) {
        alert(this.state.Button);
        event.preventDefault();
      }
     
      handleChange(event) {
        var value = event.target.value;
        this.setState({
        Button: value
        });
      }
      render() {
        return (
        <div className="container">
                <div className="row">
                        <div className="col-sm-4">
                            <NavBar></NavBar>
                        </div>
                        <div className="col-sm-8">
                              <form onSubmit={event => this.handleSubmitForm(event)}>
                                  <p>Button color</p>
                                  <p><input
                                    type="color"
                                    value={this.state.Button}
                                    onChange={event => this.handleChange(event)}/></p>
                                <p>{this.state.Button}</p>    
                                <p><input type="submit" value="Save" /></p>
                                   
                              </form>
                        </div>
                    </div>
                    </div>
        );
      }
    }
     
export default Setting