import React from "react";
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <div>
      <footer className="u-bt-lightest u-w-100">
        <div className="footer__contents u-m-0a u-d-flex u-d-flex-wp u-jc-c">
          <div className="footer__title--box">
            <h2 className="u-mb-8">シンヤのITブログ</h2>
            <p className="u-mb-16">シンヤのITブログは、「ちょっと役に立つITのお便り」をテーマに、情報をお届けします<span role="img" aria-label="niko">😆</span></p>
            <nav>
              <p className="u-m-reset u-mt-16"><a className="u-c-darkgray" href="https://shinya-sato.com/about/?link=itblog" target="_blank" rel="nofollow noopener noreferrer">管理人のプロフィール詳細はこちら ↗︎</a></p>
              <p className="u-m-reset u-mt-16"><Link className="u-c-darkgray" to="/privacy_policy">プライバシーポリシー・お問い合わせ</Link></p>
            </nav>
          </div>
        </div>
      </footer>
      <div className="footer__copy u-w-100 u-ta-c u-bg-black u-c-lightgray u-pa-8 u-pt-32 u-pb-32">
        <small>Copyright - Shinya Sato, {new Date().getFullYear()} All Rights Reserved.</small>
      </div>
    </div>
  )
}

export default Footer;
