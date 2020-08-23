import React, { useEffect } from "react";
import { Link, graphql } from 'gatsby';

import SEO from '../components/Seo';

import Header from '../components/Header';

import _ from "lodash";

const IndexTemplatePage = ({ data, location, pageContext }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event': 'optimize.activate'});
  }, [location.pathname])

  const {edges: posts} = data.allMarkdownRemark;
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <div>
      <SEO title="ようこそ！シンヤのITブログへ" keywords={[`シンヤのITブログ`]} />
      <Header />
      {posts.map(({node: post}) => {
        const {frontmatter} = post;
        return (
          <article className="list__blog u-bb-lighter u-d-flex u-d-flex-wp u-jc-sb u-ai-fs" key={post.id}>
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
                <ul className="tags__wrapper u-pa-reset">
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0
                      ? post.frontmatter.tags.map(tag => {
                        return (
                          <li key={tag}><Link className="tag__link u-fw-b u-fs-14 u-bo-radius" to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link></li>
                        )
                      })
                      : ""
                  }
                </ul>
                <small className="u-c-lightgray u-fs-13 u-lineh-large">{frontmatter.date}</small>
              </div>
            </div>
          </article>
        );
      })}
      <div className="u-o-hidden u-mt-40 u-mb-40">
        {!isFirst && (
          <Link className="u-f-left" to={prevPage} rel="prev">
            ← 前のページへ
          </Link>
        )}
        {!isLast && (
          <Link className="u-f-right" to={nextPage} rel="next">
            次のページへ →
          </Link>
        )}
      </div>
    </div>
  );
};

export const query = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
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

export default IndexTemplatePage;
