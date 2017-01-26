import React, { Component } from 'react';

const siteHeader = {
  background: '#1A237E',
  color: 'white',
  display: 'flex',
}
const titleStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#E8EAF6',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '0.8rem',
  padding: '12px',
}
const siteNavUl = {
  margin: '0',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
}
const siteNavUlLiA = {
  color: '#E8EAF6',
  textDecoration: 'none',
  padding: '18px',
  display: 'inline-block',
}
const siteNavUlLiAactive = {
  color: '#E3F2FD',
  background: '#2196F3',
  textDecoration: 'none',
  fontWeight: 'bold',
  padding: '18px',
  display: 'inline-block',
}

class Header extends Component {
  render() {
    return (
      <header style={siteHeader}>
        <a href="#0" style={titleStyle}>Recipe Book!</a>
        <nav>
          <ul style={siteNavUl}>
            <li><a style={siteNavUlLiAactive} href="#">Recipes</a></li>
            <li><a style={siteNavUlLiA} href="#">Pantry</a></li>
            <li><a style={siteNavUlLiA} href="#">Cookware</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
