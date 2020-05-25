import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

class App extends React.Component {
  render(){
    var products = [
      {
        id: 1,
        name: "Iphone 11 Pro Max",
        price: 25000000,
        img: "https://johnlewis.scene7.com/is/image/JohnLewis/238349189alt4?$rsp-pdp-port-1440$",
        status: true
      },
      {
        id: 2,
        name: "Samsung note 10",
        price: 21000000,
        img: "https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-600x600.jpg",
        status: true
      },
      {
        id: 3,
        name: "Samsung note 10+",
        price: 23000000,
        img: "https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-600x600.jpg",
        status: true
      }
    ];
    let elements = products.map((product, index) => {
      let result = '';
      if(product.status){
        result = <Product key={product.id}
        name = {product.name}
        price = {product.price}
        img = {product.img}      
      />;
      }
        return result;
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" >Props</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>
          </div>
        </div>
    </div>
    );
  }
  
}

export default App;
