import React from 'react';

class Product extends React.Component {
  constructor(props){
    super(props);
    this.onBuy = this.onBuy.bind(this);
  }
  onBuy(){
    alert(this.props.name);
    console.log(this.props.name);
  }
  onBuy2 = () => {
    alert(this.props.name);
    console.log(this.props.name);
  }
  render(){
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img alt={this.props.name} src={this.props.img}/>
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>
              {this.props.price} VNĐ
            </p>
            <p>
              <a className="btn btn-primary" onClick={ this.onBuy2y}>Mua</a>
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
}

export default Product;
