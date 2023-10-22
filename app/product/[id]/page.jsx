"use client";

import React from 'react'
// It was the part of understanding to dynamic routing 
const page = ({params}) => {
    console.log(params.id)
  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

export default page
