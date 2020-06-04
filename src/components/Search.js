import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const SearchResult = props => {
  // 全記事データ取得 //
  const tempData = useStaticQuery(graphql`
    query SearchData {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              description
              path
              tags
            }
          }
        }
      }
    }
  `)
  const [data, setData] = useState([])
  useEffect(() => {
    const temp = []
    tempData.allMarkdownRemark.edges.map(e => {
      return temp.push(e.node.frontmatter)
    })
    setData(temp)
  }, [tempData.allMarkdownRemark.edges])

  // 表示非表示の切り替え //
  const [className, setClassName] = useState("")
  useEffect(() => {
    let id
    if (props.focus && props.value !== "") {
      id = setTimeout(() => {
        setClassName("search--active")
      }, 100)
    } else {
      id = setTimeout(() => {
        setClassName("")
      }, 100)
    }
    return () => {
      clearTimeout(id)
    }
  }, [props.focus, props.value])

  // 検索処理 //
  const [result, setResult] = useState([])
  useEffect(() => {
    if (props.value !== "") {
      const search = () => {
        const value = props.value.toLowerCase()
        const temp = data.filter(e => {
          const target = `
        ${e.title.toLowerCase()}
        ${e.description.toLowerCase()}
        ${e.tags.join(" ").toLowerCase()}
      `
          return target.indexOf(value) !== -1
        })
        setResult(temp)
      }
      search()
    }
  }, [props.value, data])

  return (
    <div className={className}>
      <div className="search--inner u-bg-white">
        <span className="u-d-flex u-ai-c u-w-100 u-fs-14 u-c-white u-bg-darkgray">
          検索結果<strong>「{result.length}件」</strong>
        </span>
        <ul className="u-bg-reset u-b-reset u-pa-reset u-list-none">
          {result.map(e => {
            return (
              <li className="u-bt-lighter" key={e.title}>
                <Link className="u-d-flex u-ai-c u-w-100 u-c-darkgray u-fs-13" to={e.path}>
                  {e.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const Search = props => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState("")
  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div className="search__input--wrapper u-d-flex u-ai-c">
      <div className="search__input--inner u-pa-16 u-ta-r u-w-100">
        <input
          type="text"
          placeholder="Search..."
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          className="u-fs-16"
        />
      </div>
      <SearchResult focus={focus} value={value} />
    </div>
  )
}

export default Search;
