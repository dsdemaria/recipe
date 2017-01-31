import React from 'react';
import Radium from 'radium';

const styles = {
  header: {
    background: 'black',
    color: 'white',
    display: 'flex',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    padding: '12px',
  },
  navUl: {
    margin: '0',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  navLi: {
    color: 'white',
    textDecoration: 'none',
    padding: '18px',
    display: 'inline-block',
    active: {
      color: 'white',
      background: 'LightGray',
      textDecoration: 'none',
      fontWeight: 'bold',
      padding: '18px',
      display: 'inline-block',
    }
  }
}

const Header = () => (
  <header style={styles.header}>
    <a href="#0" style={styles.title}>Recipe Book!</a>
    <nav>
      <ul style={styles.navUl}>
        <li><a style={styles.navLi.active} href="#">Recipes</a></li>
        <li><a style={styles.navLi} href="#">Pantry</a></li>
        <li><a style={styles.navLi} href="#">Cookware</a></li>
      </ul>
    </nav>
  </header>
)

export default Radium(Header);
