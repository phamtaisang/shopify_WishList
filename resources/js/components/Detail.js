import React, {Component} from 'react';

class Detail extends Component {
    render() {
        
       var item = this.props.Detailprops
        return (
            <tbody>
                 <tr>
                        <td>{item.id}</td>
                        <td>{item.id_product}</td>
                        <td className="text-center">
                            <button type="button" className="btn btn-warning">
                               Delete
                            </button>
                            &nbsp;
                        </td>
                    </tr>
            </tbody>
                   
            
        )
    }
}

export default Detail