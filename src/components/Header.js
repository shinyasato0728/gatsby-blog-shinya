import React, { Component } from "react";
import { Link } from 'gatsby';
import $ from "jquery";

import Search from './Search';

class Header extends Component {

  componentDidMount() {
    var startPos = 0,winScrollTop = 0;
    $(window).on('scroll',function(){
      winScrollTop = $(this).scrollTop();
      if (winScrollTop >= startPos) {
        if(winScrollTop >= 400) {
          $('.header').addClass('header--hide');
        }
      } else {
        $('.header').removeClass('header--hide');
      }
      startPos = winScrollTop;
    });
  }

  render() {
    return (
      <header className="header u-d-flex u-d-flex-wp u-jc-sb u-ai-c u-bb-lighter u-bg-white u-w-100">
        <h1 className="title">
          <Link to="/">シンヤのITブログ</Link>
        </h1>
        <Search />
      </header>
    )
  }
}

export default Header;
