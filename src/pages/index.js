import React, { useEffect } from "react";
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';

import Header from '../components/Header';

import {
  TagsLinkButton
} from '../components/Buttons';

import _ from "lodash";

const IndexPage = ({ data, location }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event': 'optimize.activate'});
  }, [location.pathname])

  const {edges: posts} = data.allMarkdownRemark;
  return (
    <div>
      <SEO title="ようこそ！シンヤのITブログへ" keywords={[`シンヤのITブログ`]} />
      <Header />
      {posts.map(({node: post}) => {
        const {frontmatter} = post;
        return (
          <article className="list__blog u-bb-lighter u-d-flex u-d-flex-wp u-jc-sb" key={post.id}>
            <Link to={frontmatter.path}>
              <figure className="list__blog--image">
                <img src={frontmatter.thumbnail} alt={frontmatter.title} decoding="async" loading="lazy" />
              </figure>
            </Link>
            <div className="list__blog--contents">
              <h2 className="title u-mb-8">
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </h2>
              <p className="description u-c-darkgray">{frontmatter.description}</p>
              <div className="u-mt-8 u-d-flex u-d-flex-wp u-ai-c u-jc-sb">
                <ul className="tags__wrapper u-pa-reset u-d-flex u-d-flex-wp u-ai-c">
                  {frontmatter.tags.map(tag => {
                    return (
                      <li className="u-lineh-large" key={tag}><Link className="tag__link u-fw-b u-fs-14 u-bo-radius" to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link></li>
                    )
                  })}
                </ul>
                <small className="u-c-lightgray u-fs-13 u-lineh-large">{frontmatter.date}</small>
              </div>
            </div>
          </article>
        );
      })}
      <div>
        <Link className="button__link u-mt-56" to="/allblog">全ての記事を見る</Link>
      </div>
      <TagsLinkButton />
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { date: { ne: null } },fields: { draft: { eq: false } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "YYYY/MM/DD")
            path
            tags
            thumbnail
          }
        }
      }
    }
  }
`;

export default IndexPage;
