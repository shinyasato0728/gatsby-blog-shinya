import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';

import Header from '../components/Header';

import _ from "lodash";

import '../assets/css/module/prism.min.css';

const BlogTemplate = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  const { site: meta } = data;
  const blogThumbnail = `${meta.siteMetadata.siteUrl}${post.frontmatter.thumbnail}`
  return (
    <div>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} thumbnail={blogThumbnail} />
      <Header />
      <section className="post__wrapper u-w-small u-m-0a u-lineh-medium">
        <h1 className="title">{post.frontmatter.title}</h1>
        <div className="u-mt-16 u-d-flex u-d-flex-wp u-ai-c u-jc-sb">
          <ul className="tags__wrapper u-pa-reset u-b-reset u-bg-reset u-list-none u-d-flex u-d-flex-wp u-ai-c">
            {post.frontmatter.tags && post.frontmatter.tags.length > 0
                ? post.frontmatter.tags.map(tag => {
                  return (
                    <li key={tag}><Link className="tag__link u-fw-b u-fs-14 u-td-none u-bo-radius" to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link></li>
                  )
                })
                : ""
            }
          </ul>
          <small className="u-c-lightgray u-fs-13">{post.frontmatter.date}</small>
        </div>
        <img className="post__thumbnail u-mt-40 u-mb-40 u-bo-radius-large" src={post.frontmatter.thumbnail} alt={post.frontmatter.title} decoding="async" loading="lazy" />
        <div
          className="post--contents u-mb-40"
          dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
        />
        <div
          className="post__text--wrapper"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="u-fs-13 u-bg-lightest u-m-reset u-mt-64 u-pa-16 u-b-reset u-list-none u-d-flex u-d-flex-wp u-ai-c">
          <ul className="u-d-flex u-d-flex-wp u-ai-c u-m-reset u-fs-13 u-pa-reset u-b-reset u-bg-reset u-list-none">
            <li className="u-posi-relative breadcrumb"><Link className="u-c-blue u-td-none u-fw-b" to="/">トップ</Link></li>
          </ul>
          <ul className="u-d-flex u-d-flex-wp u-ai-c u-m-reset u-fs-13 u-pa-reset u-b-reset u-bg-reset u-list-none">
            {post.frontmatter.tags && post.frontmatter.tags.length > 0
                ? post.frontmatter.tags.map(tag => {
                  return (
                    <li className="u-posi-relative breadcrumb" key={tag}><Link className="u-c-blue u-td-none u-fw-b" to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link></li>
                  )
                })
                : ""
            }
          </ul>
          <ul className="u-d-flex u-d-flex-wp u-ai-c u-m-reset u-fs-13 u-pa-reset u-b-reset u-bg-reset u-list-none">
            <li>{post.frontmatter.title}</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents(
        absolute: false
        pathToSlugField: "frontmatter.path"
        maxDepth: 2
      )
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
`

export default BlogTemplate;
