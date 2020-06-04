import React from "react";
import { Link } from 'gatsby';

export const TabLinkDesign = () => {
  return (
    <div>
      <strong className="u-d-flex u-w-100 u-fs-20">タグからデザインの記事を探す</strong>
      <nav className="tab__wrapper u-mt-16 u-bb-lighter">
        <div className="tabs__link--wrapper">
          <Link className="u-fs-20 u-fw-b u-pa-16 u-pt-8 u-pb-8 u-mb-16 u-bo-radius" activeClassName="link--active" to="/tags/デザイン">全て</Link>
          <Link className="u-fs-20 u-fw-b u-pa-16 u-pt-8 u-pb-8 u-mb-16 u-bo-radius" activeClassName="link--active" to="/tags/ui-ux">UI/UX</Link>
        </div>
      </nav>
    </div>
  )
}

export const TabLinkProgramming = () => {
  return (
    <div>
      <strong className="u-d-flex u-w-100 u-fs-20">タグからプログラミングの記事を探す</strong>
      <nav className="tab__wrapper u-mt-16 u-bb-lighter">
        <div className="tabs__link--wrapper">
          <Link className="u-fs-20 u-fw-b u-pa-16 u-pt-8 u-pb-8 u-mb-16 u-bo-radius" activeClassName="link--active" to="/tags/プログラミング">全て</Link>
          <Link className="u-fs-20 u-fw-b u-pa-16 u-pt-8 u-pb-8 u-mb-16 u-bo-radius" activeClassName="link--active" to="/tags/webアプリ">Webアプリ</Link>
          <Link className="u-fs-20 u-fw-b u-pa-16 u-pt-8 u-pb-8 u-mb-16 u-bo-radius" activeClassName="link--active" to="/tags/html">HTML</Link>
          <Link className="u-fs-20 u-fw-b u-pa-16 u-pt-8 u-pb-8 u-mb-16 u-bo-radius" activeClassName="link--active" to="/tags/css">CSS</Link>
        </div>
      </nav>
    </div>
  )
}
