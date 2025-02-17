import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>This Page can not be found</h1>
        <Link href={'/'}>Go Back to Home Page</Link>
    </div>
  )
}

export default NotFound