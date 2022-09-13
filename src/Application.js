import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import NavItem from './components/NavItem';

const Application = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <Header />
          <nav>
            <ul className="nav-list">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/#about">About us</NavItem>
              <NavItem href="/#contact">Contact us</NavItem>
              <NavItem href="/#help">Help page</NavItem>
            </ul>
          </nav>
        </div>
      </header>
      <Content />
      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Application;
