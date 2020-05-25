import React from 'react';
import './App.css';

class App extends React.Component {
  showInfoProduct(product){
    if(product.status)
    {
      return <h3>ID: {product.id} <br/>
                Name: {product.name} <br/>
                Price: {product.price}$ <br/>
                Status: {product.status?'Stock':'Out of stock'}
              </h3>
    }
  }
  render() {
    var a = 5;
    var b = 2;
    var name = "Nam Le";
    var product ={
      id: 1,
      name: 'Iphone 11 Pro Max',
      price : 1500,
      status: true
    };
    var users = [
      {
        id: 1,
        name: 'Nguyen Van A',
        age: 18
      },
      {
        id: 2,
        name: 'Le Van C',
        age: 20
      },
      {
        id: 3,
        name: 'Nguyen Thi D',
        age: 21
      },
    ];
    var elements = users.map((user,index) => {
      return <div key={user.id}>
                <h2>Name: {user.name}</h2>
                <p>Age: {user.age}</p>
            </div>
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </nav>
        <div className="ml-30">
          <h1>Name : {name}</h1>
          {this.showInfoProduct(product)}
          <br/>
          <hr/>
          {elements}
        </div>
      </div>
    );
  }
}

export default App;
