import React from 'react'

export default function Result() {
  return (
    <div
    className="container shadow my-5 d-flex flex-column align-items-center"
    style={{ maxWidth: "800px" }}
  >
    <div className="questions text-center">
      <h4>Score:</h4>
      <h4>Value</h4>
    </div>
    <div className="questions text-center">
      <h4>Your Quality of life is:</h4>
      <h4> good/poor</h4>
    </div>
    </div>
  )
}
