import React from "react"

import Footer from '../components/Footer';

import {
  BannerAmazonProgram
} from '../components/Banners';

import '../assets/css/main.css';

const Layout = ({ children }) => {
  return (
    <div className="body__base--wrapper">
      <main>
        {children}
      </main>
      <BannerAmazonProgram />
      <Footer />
    </div>
  )
}

export default Layout;
