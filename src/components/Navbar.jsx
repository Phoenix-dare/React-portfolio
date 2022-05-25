import React from 'react';

function Navbar(){
    return(
      <div className="nav">
      <nav className="navbar">
      <a href="#home">
        <i class="fa-solid fa-house-user"></i>  Home
      </a>
        <a href="#works">
          <i class="fa-solid fa-laptop-file"></i>  Projects
        </a>
        <a href="#contact">
          <i class="fa-solid fa-id-card"></i>  Contact Me
          </a>


      </nav>
        </div>
)
;
    
  }


export default Navbar;