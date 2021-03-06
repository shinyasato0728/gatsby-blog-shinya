import React, { useEffect } from "react";
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';

import Header from '../components/Header';

import _ from "lodash";

const AllBlogPage = ({ data, location }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event': 'optimize.activate'});
  }, [location.pathname])

  const {edges: posts, totalCount} = data.allMarkdownRemark;
  return (
    <div>
      <SEO title="ブログ一覧" keywords={[`シンヤのITブログ`]} />
      <Header />
      <div className="u-d-flex u-ai-c u-jc-sb">
        <h1>記事一覧</h1>
        <p className="u-c-darkgray">記事数：{totalCount}</p>
      </div>
      <p className="u-list-asterisk u-w-100 u-fs-13 u-c-lightgray u-mt-8">全ての記事が表示されない場合は、ページ更新をお試しください。</p>
      <div className="u-pt-40 u-mt-40 u-bt-lighter">
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
      </div>
    </div>
  );
};

export const query = graphql`
  query AllBlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { date: { ne: null } },fields: { draft: { eq: false } } }
    ) {
      totalCount
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

export default AllBlogPage;
