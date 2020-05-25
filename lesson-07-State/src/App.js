import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      products : [
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
      ],
      isActive: true
    };
    this.onSetState = this.onSetState.bind(this);
  }
  onClick(){
    console.log("this is app component");
  }
  onSetState(){
    // if(this.state.isActive === true){
    //   this.setState({
    //     isActive: false
    //   });
    // }else{
    //   this.setState({
    //     isActive: true
    //   })
    // }
    this.setState({
      isActive: !this.state.isActive
    });
  }
  render(){
    let elements = this.state.products.map((product, index) => {
      let result = '';
      if(product.status){
        result = <tr key={index}>
                  <td>{index}</td>
                  <td>{product.name}</td>
                  <td>
                    <span className="label label-success">{product.price} $</span>
                  </td>
                </tr>;
      }
        return result;
    });
    return (
      
      
      
      
      
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" >State</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="row">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Ten sp</th>
                  <th>Gia</th>
                </tr>
              </thead>
              <tbody>
                {elements}
              </tbody>
            </table>
            <button type="button" className="btn btn-primary" onClick={this.onSetState}>
              Active: {this.state.isActive?"Yes":"No"}
            </button>
            </div>
          </div>
        </div>
    </div>
    );
  }
  
}

export default App;
