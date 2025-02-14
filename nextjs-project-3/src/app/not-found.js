import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>This Page Does not exist</h1>
        <Link href={'/'}>Go Back to Home Page</Link>
    </div>
  )
}

export default NotFound