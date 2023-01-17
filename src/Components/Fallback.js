import React from 'react'
import { Link } from "react-router-dom"

function Fallback() {
  return (
    <>
    <h1>Sorry, that URL doesn't exist</h1>
    <Link to="/Home">Go Back to Home Page</Link>
    </>
    
  )
}

export default Fallback