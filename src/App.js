import React from 'react';
import { Router, Link } from 'react-static';
import styled, { injectGlobal } from 'styled-components';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import Footer from './components/footer';
import Hamburger from './components/icons/hamburger';

const globalStyles = injectGlobal`
  body {
    font-family: Lato, "Segoe UI", Avenir, Ubuntu, Tahoma, Verdana, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  nav {
    width: 100%;
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-begin;
`;

const HamburgerWrapper = styled.div`
  padding: 1rem 0.5rem 1rem 1rem;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }

  onMenuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <Router>
        <AppStyles>
          <Nav>
            <HamburgerWrapper onClick={this.onMenuToggle}>
              <Hamburger fill="#fff" open={this.state.toggle} />
            </HamburgerWrapper>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
          <div className="content">
            <Routes />
          </div>
          <Footer />
        </AppStyles>
      </Router>
    );
  }
}

export default hot(module)(App);
