import React, {Component} from 'react';

class List_product extends Component {
    render() {
       let item = this.props.product;
       console.log(item, '')
        return (
            <tbody>
                 <tr>
                    <td>{item.id}</td>
                    <td>{item.id_product} 
                     <p> {item.soluong} <i class="fa fa-heart" aria-hidden="true"></i></p>
                    </td>
                    <td className="text-center">
                      
                        <button type="button" className="btn btn-warning">
                            Xóa
                        </button>
                        &nbsp;
                    </td>
                    </tr>
            </tbody>
                   
            
        )
    }
}

export default List_product