import React from 'react';
/*import data from './data.json';*/
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';


class App extends React.Component {

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
                  <Cart />
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
