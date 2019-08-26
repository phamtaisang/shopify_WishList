import React, {Component} from 'react';

class List_Customer extends Component {

    detail(id_user){
    this.props.onDetail(id_user);
    }
    render() {
        var item = this.props.List;
        return (
            <tbody>
                <tr>
                    <td>{item.id}</td>
                    <td>{
                        item.id_user==0 ?'not login': item.id_user
                    
                    }</td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning"
                            onClick={this.detail.bind(this,item.id_user)}
                        >
                        Detail
                        </button>
                        &nbsp;
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default List_Customer