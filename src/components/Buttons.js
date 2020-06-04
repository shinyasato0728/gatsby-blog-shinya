import React, { Component } from "react";
import { Link } from 'gatsby';
import $ from "jquery";

export class TagsLinkButton extends Component {

  componentDidMount() {
    var startPos = 0,winScrollTop = 0;
    $(window).on('scroll',function(){
      winScrollTop = $(this).scrollTop();
      if (winScrollTop >= startPos) {
        if(winScrollTop >= 400) {
          $('.button__link--tags').addClass('link__tags--hide');
        }
      } else {
        $('.button__link--tags').removeClass('link__tags--hide');
      }
      startPos = winScrollTop;
    });
  }

  render() {
    return (
      <Link className="button__link--tags u-m-0a u-pa-16 u-pt-reset u-pb-reset u-fw-b u-d-flex u-jc-c u-ai-c" to="/tags">
        <img className="icon" src="/images/icons/tag.svg" alt="" />
        タグから記事を探す
      </Link>
    )
  }
}
