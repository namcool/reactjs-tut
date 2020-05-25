import React from 'react';

class Product extends React.Component {
  render(){
    return (
      
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img data-src="#" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566960958082" alt=""/>
          <div className="caption">
            <h3>Iphone 11</h3>
            <p>
              32 củ
            </p>
            <p>
              <a className="btn btn-primary">Mua</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Product;
