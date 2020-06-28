import React from 'react';
import data from './data.json';
import Products from './components/Products';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header><a href="/">React Shoping Cart</a></header>
        <main>
          <div className="content">
          <div className="main">
            <Products products={this.state.products}/>
          </div>
          <div className="sidebar">
            Cart Items
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
