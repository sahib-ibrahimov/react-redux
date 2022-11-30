import React, { PureComponent } from "react";
import CartItem from './CartItem';
import "../styles.css";

import {connect} from "react-redux";

import store from "../redux/store.js";
import {actionDelete} from "../redux/actions.js";

const mapState = (store) => ( {cart: store.cart} );
const mapDispatch = (dispatch) => ({
  deleteFromCard: (id) => dispatch( actionDelete(id) )
});

const connector = connect(mapState, mapDispatch);

class Cart extends PureComponent {
  // ==========================

  // componentDidMount() {
  //   store.subscribe(() => {
  //    const state = store.getState();
  //    this.setState({cartGoods: state.cart});
  //   });
  // }

  // ==========================

  getTotal() {
    const { cart } = this.props;
    return cart.reduce((acc, item) => acc + item.price, 0);
  }
  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { this.props.cart.length ?
          <ul className="cart__list">
            {this.props.cart.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem {...item} clicker={this.props.deleteFromCard} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }

        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

const NewCart = connector(Cart);
export default NewCart;
