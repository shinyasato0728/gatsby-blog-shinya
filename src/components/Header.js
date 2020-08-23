import React, { Component } from "react";
import { StaticQuery, Link, graphql } from "gatsby";
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
      <header className="header u-d-flex u-jc-sb u-ai-c u-bb-lighter u-bg-white u-w-100">
        <div className="u-d-flex u-ai-c">
          <StaticQuery
            query={graphql`
              query HeadingQuery {
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `}
            render={data => (
              <h1 className="title">
                <Link to="/">{data.site.siteMetadata.title}</Link>
              </h1>
            )}
          />
          <Link className="tags u-c-darkgray u-fs-13 u-d-flex u-jc-c u-ai-c" to="/tags">タグ一覧</Link>
        </div>
        <Search />
      </header>
    )
  }
}

export default Header;
