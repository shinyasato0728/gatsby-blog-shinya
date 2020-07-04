import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/Seo';

import Header from '../components/Header';

import { Link, graphql } from 'gatsby';

import _ from "lodash";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  const setTitle = `${tag}のカテゴリーから記事を探す`

  const seoProgrammingDescription = `${tag}とは、「コンピューターに命令をすること」です。コンピューターは自分で理解できるのは0と1だけなので、人間が理解できる言葉で書いた文字で、コンピューターに「これやってほしい！」という命令を書き込んで、コンピューターが理解できる0と1の文字に変換する作業を、${tag}と言われています。`
  const seoHtmlDescription = `${tag}とは「HyperText Markup Language（ハイパーテキストマークアップランゲージ）」の略で、ホームページの「骨組み」を作るために使う言語です。${tag}はホームページを作るための「設計図」のようなもので、${tag}の情報をもとに、ブラウザがDOMツリーを作り、ホームページを表示させます。${tag}でホームページの「骨組み」を作ったら、次はCSSを使って「見た目」を作っていきます。`
  const seoCssDescription = `${tag}とは「Cascading Style Sheets（カスケーディングスタイルシート）」の略で、ホームページの「見た目」の装飾を行う言語です。ホームページはたくさんのページで作られていて、一つ一つデザインを変えていくのは大変なので、一度にデザインを変更できるようにするために、${tag}が生まれました。${tag}を使えば、一度に見た目を全て変えることができます。`
  const seoMarketingDescription = `${tag}とは、「自分たちが取り扱っている商品が、売れるようにする取り組み」のことです。お客様の行動原理を考えて、施策を考えたり、施策のテストを行ったり、広告を出したり管理したりする仕事です。よく「売れる仕組みを作る仕事」と言われています。商品開発から販売まで、一貫して考えていく仕事と言えます。`
  const seoOtherDescription = `シンヤのITブログでは、${tag}の情報だけでなく、「ちょっと役に立つITのお便り」をテーマに、IT系の情報をお届けしております。他の記事にご興味がある方は、「タグから記事を探す」ボタンを押してください。`

  const tagHeader = (() => {
    switch (tag) {
      case "プログラミング": return (
        <div className="tags__wrapper">
          <SEO title={setTitle} description={seoProgrammingDescription} />
          <h1>{tag}</h1>
          <div className="tags__description">
            <p>{tag}の記事が{totalCount}件ございます。</p>
            <p>{seoProgrammingDescription}</p>
          </div>
        </div>
      );
      case "HTML": return (
        <div className="tags__wrapper">
          <SEO title={setTitle} description={seoHtmlDescription} />
          <h1>{tag}</h1>
          <div className="tags__description">
            <p>{tag}の記事が{totalCount}件ございます。</p>
            <p>{seoHtmlDescription}</p>
          </div>
        </div>
      );
      case "CSS": return (
        <div className="tags__wrapper">
          <SEO title={setTitle} description={seoCssDescription} />
          <h1>{tag}</h1>
          <div className="tags__description">
            <p>{tag}の記事が{totalCount}件ございます。</p>
            <p>{seoCssDescription}</p>
          </div>
        </div>
      );
      case "マーケティング": return (
        <div className="tags__wrapper">
          <SEO title={setTitle} description={seoMarketingDescription} />
          <h1>{tag}</h1>
          <div className="tags__description">
            <p>{tag}の記事が{totalCount}件ございます。</p>
            <p>{seoMarketingDescription}</p>
          </div>
        </div>
      );
      default: return (
        <div className="tags__wrapper">
          <SEO title={setTitle} description={seoOtherDescription} />
          <h1>{tag}</h1>
          <div className="tags__description">
            <p>{tag}の記事が{totalCount}件ございます。</p>
            <p>{seoOtherDescription}</p>
          </div>
        </div>
      );
    }
  })();

  return (
    <div>
      {tagHeader}
      <Header />
      <div className="u-pt-40 u-mt-40 u-bt-lighter">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          const { description } = node.frontmatter
          const { date } = node.frontmatter
          const { tags } = node.frontmatter
          const { thumbnail } = node.frontmatter
          return (
            <article className="list__blog u-bb-lighter u-d-flex u-d-flex-wp u-jc-sb" key={slug}>
              <Link to={slug}>
                <figure className="list__blog--image">
                  <img src={thumbnail} alt={title} decoding="async" loading="lazy" />
                </figure>
              </Link>
              <div className="list__blog--contents">
                <h2 className="title u-mb-8">
                  <Link to={slug}>{title}</Link>
                </h2>
                <p className="description u-c-darkgray">{description}</p>
                <div className="u-mt-8 u-d-flex u-d-flex-wp u-ai-c u-jc-sb">
                  <ul className="tags__wrapper u-pa-reset u-d-flex u-d-flex-wp u-ai-c">
                    {tags && tags.length > 0
                        ? tags.map(tag => {
                          return (
                            <li className="u-lineh-large" key={tag}><Link className="tag__link u-fw-b u-fs-14 u-bo-radius" activeClassName="link--active" to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link></li>
                          )
                        })
                        : ""
                    }
                  </ul>
                  <small className="u-c-lightgray u-fs-13 u-lineh-large">{date}</small>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } },fields: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "YYYY/MM/DD")
            tags
            thumbnail
          }
        }
      }
    }
  }
`
