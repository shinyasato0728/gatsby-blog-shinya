import React from "react";
import { Link, graphql } from 'gatsby';
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";

import SEO from '../components/Seo';

import Header from '../components/Header';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
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
      <h2 className="u-w-small u-m-0a">全てのタグから記事を探す</h2>
      <div className="tags__page--contents u-pb-48">
        <ul className="tags__page--list u-pa-reset u-mt-24 u-d-flex u-d-flex-wp u-ai-fe">
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link className="u-d-flex u-fs-16 u-fw-b u-c-darkgray u-bg-lightest u-mb-24 u-pa-16 u-pt-8 u-pb-8 u-bo-radius" to={`/tags/${kebabCase(tag.fieldValue)}`}>
                {tag.fieldValue}（{tag.totalCount}）
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}
export const query = graphql`
  query tagsQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage;
