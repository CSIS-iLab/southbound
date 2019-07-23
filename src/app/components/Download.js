import React from 'react'

export default function Download(props) {
  const { content } = props

  return (
    <a
      href="https://csis-prod.s3.amazonaws.com/s3fs-public/publication/180613_Glaser_NewSouthboundPolicy_Web.pdf?AcoayLFliB9_iAvbmYvP_jM27mEXw5xL"
      className="download"
    >
      {content}
    </a>
  )
}
