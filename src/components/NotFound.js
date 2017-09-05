import React from 'react'
import { FaLemonO } from 'react-icons/lib/fa'


function NotFound() {
  return (
    <div className="empty">
      <p className="empty-title h5">POST NOT FOUND</p>
      <p className="empty-subtitle">Here's a lemon instead <FaLemonO/></p>
    </div>
  )
}

export default NotFound
