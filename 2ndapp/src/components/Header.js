import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Component</a>
          <ul className="nav navbar-nav">
              <li className="active">
                  <a>Trang chủ</a>
              </li>
              <li>
                  <a>Danh mục</a>
              </li>
          </ul>
      </nav>
      
    );
  }
  
}

export default Header;
