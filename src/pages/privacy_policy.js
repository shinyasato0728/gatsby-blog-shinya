import React from "react";
import SEO from '../components/Seo';

import Header from '../components/Header';

const PrivacyPolicy = () => {
  return (
    <div className="privacy__policy">
      <SEO title="プライバシーポリシー・お問い合わせ" keywords={[`プライバシーポリシー・お問い合わせ`]} />
      <Header />
      <h1 className="u-mb-40">プライバシーポリシー</h1>

      <h2>①個人情報の利用目的</h2>
      <p className="u-m-reset u-mt-16 u-mb-16"><strong className="u-marker-yellow">シンヤのITブログ(以下当ブログ)</strong>では、メールでのお問い合わせ、メールマガジンへの登録などの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。</p>
      <p className="u-m-reset u-mt-16 u-mb-16">これらの個人情報は質問に対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。</p>

      <hr />
      <h2>②個人情報の第三者への開示</h2>
      <p className="u-m-reset u-mt-16 u-mb-16">当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。</p>
      <ul>
        <li>本人のご了解がある場合</li>
        <li>法令等への協力のため、開示が必要となる場合</li>
      </ul>
      <h3 className="u-mt-48">個人情報の開示、訂正、追加、削除、利用停止</h3>
      <p className="u-m-reset u-mt-16 u-mb-16">ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。</p>

      <hr />
      <h2>③広告の配信について</h2>
      <p className="u-m-reset u-mt-16 u-mb-16">当サイトは第三者配信の広告サービス「Google Adsense グーグルアドセンス」を利用しています。</p>
      <p className="u-m-reset u-mt-16 u-mb-16">広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。</p>
      <p className="u-m-reset u-mt-16 u-mb-16">Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は<a className="u-td-underline" target="_blank" href="https://policies.google.com/technologies/ads?hl=ja" rel="nofollow noopener noreferrer">「広告 – ポリシーと規約 – Google」</a>をご覧ください。</p>
      <p className="u-m-reset u-mt-16 u-mb-16">第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookie（クッキー）を設定したりこれを認識したりする場合があります。</p>

      <hr />
      <h2>④アクセス解析ツールについて</h2>
      <p className="u-m-reset u-mt-16 u-mb-16">当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
      <p className="u-m-reset u-mt-16 u-mb-16">このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。詳しくは<a className="u-td-underline" target="_blank" href="https://marketingplatform.google.com/about/analytics/terms/jp/" rel="nofollow noopener noreferrer">Google アナリティクス利用規約</a>をご覧ください。</p>

      <hr />
      <h2>⑤免責事項</h2>
      <p className="u-m-reset u-mt-16 u-mb-16">当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。</p>
      <p className="u-m-reset u-mt-16 u-mb-16">当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。</p>
      <p className="u-m-reset u-mt-16 u-mb-16">当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。</p>
      <p className="u-m-reset u-mt-16 u-mb-16">当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>

      <hr />
      <h1 className="u-ta-c">お問い合わせはこちら</h1>
      <a className="button__link" target="_blank" href="https://forms.gle/2gSuqtq7C6bQTM289" rel="nofollow noopener noreferrer">お問い合わせフォーム ↗︎</a>
    </div>
  );
};

export default PrivacyPolicy;
