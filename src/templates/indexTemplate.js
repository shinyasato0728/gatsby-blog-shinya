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

  const { currentPage, numPages } = pageContext;

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPageNum =
    currentPage - 1 === 1 ? `` : `posts/${(currentPage - 1).toString()}`
  const nextPageNum = (currentPage + 1).toString()
  const prevPageLink = isFirst ? null : `/${prevPageNum}`
  const nextPageLink = isLast ? null : `/posts/${nextPageNum}`

  return (
    <div>
      <SEO title="ようこそ！シンヤのITブログへ" keywords={[`シンヤのITブログ`]} />
      <Header />
      {posts.map(({node: post}) => {
        const {frontmatter} = post;
        return (
          <article className="list__blog u-bb-lighter u-d-flex u-d-flex-wp u-jc-sb u-ai-fs" key={post.id}>
            <Link to={frontmatter.path}>
              <figure className="list__blog--image u-o-hidden u-posi-relative">
                <img src={frontmatter.thumbnail} alt={frontmatter.title} decoding="async" loading="lazy" />
                <small className="u-c-white u-pa-16 u-pt-8 u-pb-8 u-fs-13">{frontmatter.date}</small>
              </figure>
            </Link>
            <div className="list__blog--contents">
              <h2 className="title u-mb-8">
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </h2>
              <p className="description u-c-darkgray">{frontmatter.description}</p>
              <div className="u-mt-8 u-d-flex u-d-flex-wp u-ai-c u-jc-sb">
                <ul className="tags__wrapper u-m-reset u-pa-reset u-bg-reset u-list-none">
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0
                      ? post.frontmatter.tags.map(tag => {
                        return (
                          <li key={tag}><Link className="tag__link u-fw-b u-fs-14 u-bo-radius" to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link></li>
                        )
                      })
                      : ""
                  }
                </ul>
                <Link to={frontmatter.path} style={{ width: 'auto', textDecoration: 'underline' }} className="u-c-lightgray u-fs-13 u-lineh-large">Read more</Link>
              </div>
            </div>
          </article>
        );
      })}
      <div className="u-o-hidden u-mt-40 u-mb-40">
        {!isFirst && (
          <Link className="u-f-left" to={prevPageLink} rel="prev">
            ← 前のページへ
          </Link>
        )}
        {!isLast && (
          <Link className="u-f-right" to={nextPageLink} rel="next">
            次のページへ →
          </Link>
        )}
      </div>
      <Link className="button__link u-mt-56" to="/allblog">全ての記事を見る</Link>
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
