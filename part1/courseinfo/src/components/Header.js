import React from 'react'

// Component: Header
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

export default Header;