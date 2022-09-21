import React, { Component } from 'react'
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import alertify from 'alertifyjs';
import Navi from "../navi/Navi"


class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName+ " sepetten silindi.")
    }
    render() {
        return (
            <div>
                <Navi/>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ürün İsmi</th>
                            <th>Birim Fiyatı</th>
                            <th>Miktar</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color="danger"
                                        onClick={() => this.removeFromCart(cartItem.product)}>
                                        Kaldır
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to="/home">ürünler Sayfasına Geri Dön</Link>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)


