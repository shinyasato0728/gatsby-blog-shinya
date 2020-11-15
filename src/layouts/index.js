import React from "react"

import Footer from '../components/Footer';

import {
  BannerAmazonProgram,
  BannerShizuokaIt
} from '../components/Banners';

import '../styles/module/prism.min.css';
import '../styles/_utility.css';
import '../styles/search.css';
import '../styles/banner.css';
import '../styles/list.css';
import '../styles/tags.css';
import '../styles/tabs.css';
import '../styles/buttons.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/basis.css';
import '../styles/elements.css';
import '../styles/posts.css';

const Layout = ({ children }) => {
  return (
    <div className="body__base--wrapper">
      <main>
        {children}
      </main>
      <BannerShizuokaIt />
      <BannerAmazonProgram />
      <Footer />
    </div>
  )
}

export default Layout;
