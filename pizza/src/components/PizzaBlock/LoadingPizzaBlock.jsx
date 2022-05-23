import React from 'react'
import ContentLoader from 'react-content-loader'
function LoadingPizzaBlock(props) {
  return (
    <ContentLoader 
    className='content_loader'
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="120" r="118" /> 
    <rect x="0" y="264" rx="0" ry="0" width="280" height="24" /> 
    <rect x="0" y="311" rx="0" ry="0" width="280" height="84" /> 
    <rect x="0" y="411" rx="0" ry="0" width="89" height="27" /> 
    <rect x="131" y="410" rx="14" ry="14" width="147" height="36" />
  </ContentLoader>
  )
}

export default LoadingPizzaBlock