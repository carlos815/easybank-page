import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Img from 'gatsby-image'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  return (
    <>
      <section className='section hero'>
        <div className='container'>
          <div className='section-content'>
            <div className='hero-text'>
              <h1>{title}</h1>
              <h3>{subheading}</h3>
              <Link className='btn btn-important' to='/'>
                Request Invite
              </Link>
            </div>
            <div className='hero-illustration'>
              <Img
                className='foreground-img'
                fluid={image.childImageSharp.fluid}></Img>
            </div>
          </div>
        </div>
      </section>
      <section className='section features-section'>
        <div className='container'>
          <div className='section-content'>
            <div className='heading'>
              <h2 className='title'>{mainpitch.title}</h2>
              <p className='subtitle'>{mainpitch.description}</p>
            </div>
            <Features gridItems={intro.blurbs} />
          </div>
        </div>
      </section>
      <section className='section blog-roll-section'>
        <div className='container'>
          <div className='section-content'>
            <h2 className=''>Latest Articles</h2>
            <BlogRoll />
          </div>
        </div>
      </section>
    </>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              publicURL
            }
            alt
            heading
            text
          }
          heading
          description
        }
      }
    }
  }
`
