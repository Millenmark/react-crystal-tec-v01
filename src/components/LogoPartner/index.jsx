import React from 'react'

const index = ({partnerLogo}) => {
  return (
    <>
      <div className="market-partners-logo-div">
        <img className="partner-img" src={`../../../assets/images/${partnerLogo}`} alt="partner-logo" />
      </div>
    </>
  )
}

export default index