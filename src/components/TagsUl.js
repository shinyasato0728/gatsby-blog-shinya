import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";

const ListTagsNumber = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <ul className="tags__wrapper u-pa-reset u-bg-reset u-list-none">
    {group.map(tag => (
      <li key={tag.fieldValue}>
        <Link className="tag__link u-d-flex u-ai-c u-fw-b u-bo-radius" activeClassName="link--active" to={`/tags/${kebabCase(tag.fieldValue)}`}>
          {tag.fieldValue}<span>（{tag.totalCount}）</span>
        </Link>
      </li>
    ))}
  </ul>
)

const TagsUlNumber = (props) => {
  return (
    <div>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark {
              group(field: frontmatter___tags) {
                fieldValue
                totalCount
              }
            }
          }
        `}
        render={data => <ListTagsNumber data={data} {...props} />}
      />
    </div>
  )
}

TagsUlNumber.propTypes = {
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

export default TagsUlNumber;
