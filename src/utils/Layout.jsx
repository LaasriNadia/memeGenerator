import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
