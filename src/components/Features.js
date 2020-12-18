import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className='feature-grid'>
    {gridItems.map((item) => (
      <section key={item.text} className='feature-item'>
        <img src={item.image.publicURL} alt={item.alt} />
        <h3>{item.heading}</h3>
        <p>{item.text}</p>
      </section>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string,

      text: PropTypes.string,
      heading: PropTypes.string,
    }),
  ),
}

export default FeatureGrid
