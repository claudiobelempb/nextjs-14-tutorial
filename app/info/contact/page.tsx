import Link from 'next/link'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
        <h1 className="text-7xl">Contact Page</h1>
        <Link className='text-xl text-blue-500 inline-block mt-8' href={'/'}>home page</Link>
    </div>
  )
}