'use client'
import React from 'react'
const page = ({children, value}) => {
  return (
    <div>
      <h1>{value}</h1>
      {children}
 
    </div>
  )
}

export default page;