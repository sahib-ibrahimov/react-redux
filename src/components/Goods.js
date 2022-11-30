import React, { PureComponent } from "react";
import GoodsItem from './GoodsItem';
import "../styles.css";

import {connect} from "react-redux";

import store from "../redux/store.js";
import {actionAdd} from "../redux/actions.js";

const mapState = (store) => ( {goods: store.goods} );
const mapDispatch = (dispatch) => ({
  addToCard: (id) => dispatch( actionAdd(id) )
})

const connector = connect(mapState, mapDispatch);

class Goods extends PureComponent {
  // state = {
  //   goods: []
  // }

  // ==========================

  // componentDidMount() {
  //   const state = store.getState();
  //   this.setState({goods: state.goods});
  // }

  // ==========================

  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.props.goods.map(item => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} clicker={this.props.addToCard} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const NewGoods = connector(Goods);
export default NewGoods;
