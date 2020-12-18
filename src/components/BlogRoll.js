import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='blog-roll'>
        {posts &&
          posts.map(({ node: post }) => (
            <article
              className={`blog-list-item ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
              key={post.id}>
              {post.frontmatter.featuredimage ? (
                <Link className='featured-thumbnail' to={post.fields.slug}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </Link>
              ) : null}
              <header className='post-meta'>
                <p className='author'>
                  <Link>By {post.frontmatter.author}</Link>
                </p>
                <h3 className='title'>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h3>
                <p className='excerpt'>{post.excerpt}</p>
              </header>
            </article>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 125)
              id
              fields {
                slug
              }
              frontmatter {
                title
                author
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 280, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
