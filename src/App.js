import React from 'react';
/*import data from './data.json';*/
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): [],
    }
  }

    createOrder = (order) => {
      alert('New to save' + order.name);
    }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x => x._id !== product._id)
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems.filter(x => x._id !== product._id))
    );
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({...product, count: 1})
    }
    this.setState({cartItems});
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  render() {
    return (
          <div className="grid-container">
            <header><a href="/">React Shoping Cart</a></header>
            <main>
              <div className="content">
              <div className="main">
                <Filter/>
                <Products />
              </div>
              <div className="sidebar">
                <Cart
                    cartItems={this.state.cartItems}
                    removeFromCart={this.removeFromCart}
                    createOrder={this.createOrder}
                />

              </div>
              </div>
            </main>
            <footer>
              footer
            </footer>
          </div>
    );
  }

}

export default App;
