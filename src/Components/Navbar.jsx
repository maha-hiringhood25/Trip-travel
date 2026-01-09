import React from 'react'
function Navbar() {
  return (
    <header className='Navbar'>
        <div className='container nav-inner'>
            <div className='brand'>wander</div>
            <nav className='nav-links'>
                <a className='nav-link' href='#destination'>Destination</a>
                <a className='nav-link' href='#tips'>Tip</a>
                <a className='nav-link' href='#contact'>Plan Trip</a>
            </nav>
        </div>
    </header>
    
  )
}

export default Navbar
