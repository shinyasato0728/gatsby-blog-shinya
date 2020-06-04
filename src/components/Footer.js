import React from "react";
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <div>
      <footer className="u-bg-lightest u-w-100">
        <div className="footer__contents u-m-0a u-d-flex u-d-flex-wp">
          <div className="footer__title--box">
            <h2 className="u-mb-8">シンヤのITブログ</h2>
            <p className="u-mb-16">シンヤのITブログは、「ちょっと役に立つITのお便り」をテーマに、情報をお届けします<span role="img" aria-label="niko">😆</span></p>
            <nav>
              <p className="u-m-reset u-mt-16"><a className="u-c-darkgray" href="https://shinya-sato.com/about/?link=itblog" target="_blank" rel="nofollow noopener noreferrer">管理人のプロフィール詳細はこちら ↗︎</a></p>
              <p className="u-m-reset u-mt-16"><Link className="u-c-darkgray" to="/privacy_policy">プライバシーポリシー・お問い合わせ</Link></p>
            </nav>
          </div>
          <div className="footer__tag--box">
            <strong className="u-w-100">人気のタグから記事を探す</strong>
            <ul className="u-pa-reset u-list-none u-b-reset u-bg-reset u-d-flex u-mt-16">
              <li><Link className="u-c-darkgray" to="/tags/ブログ術">ブログ術</Link></li>
              <li><Link className="u-c-darkgray" to="/tags/教育">教育</Link></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer__copy u-w-100 u-ta-c u-bg-black u-c-lightgray u-pa-8 u-pt-32 u-pb-32">
        <small>Copyright - Shinya Sato, 2020 All Rights Reserved.</small>
      </div>
    </div>
  )
}

export default Footer;
