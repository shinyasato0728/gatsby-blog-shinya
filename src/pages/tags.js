import React from "react";
import { Link } from 'gatsby';

import SEO from '../components/Seo';

import Header from '../components/Header';
import TagsUl from '../components/TagsUl';

const TagsPage = () => {
  return (
    <div>
      <SEO title="タグから記事を探す" />
      <Header />
      <h1 className="u-w-small u-m-0a u-mb-40">人気のタグから記事を探す</h1>
      <article className="tags__page--wrapper u-w-small u-m-0a">
        <div className="tags__page--contents u-pb-48">
          <Link className="bg__wrapper is--bg__blog u-bg-cover u-d-flex" to="/tags/ブログ術">
            <strong className="u-fw-b u-pa-32 u-pt-16 u-pb-16 u-d-flex u-ai-c u-fw-m u-w-100">ブログ術</strong>
          </Link>
        </div>
        <div className="tags__page--contents u-pb-48">
          <Link className="bg__wrapper is--bg__education u-bg-cover u-d-flex" to="/tags/教育">
            <strong className="u-fw-b u-pa-32 u-pt-16 u-pb-16 u-d-flex u-ai-c u-fw-m u-w-100">教育</strong>
          </Link>
        </div>
        <div className="tags__page--contents u-pb-48">
          <Link className="bg__wrapper is--bg__jobs u-bg-cover u-d-flex" to="/tags/転職">
            <strong className="u-fw-b u-pa-32 u-pt-16 u-pb-16 u-d-flex u-ai-c u-fw-m u-w-100">転職</strong>
          </Link>
        </div>
        <h2 className="u-w-small u-m-0a">全てのタグから記事を探す</h2>
        <div className="tags__page--all u-fs-16 u-mt-24">
          <TagsUl />
        </div>
      </article>
    </div>
  );
};

export default TagsPage;
