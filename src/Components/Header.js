import React from 'react'
import {useNavigate} from "react-router-dom";
function Header() {

    
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Pull requests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Issues</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Marketplace</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Explore</a>
          </li>
        </ul>
        <span class="navbar-text rounded-circle">
        <a class="navbar-brand bg-light" href="#">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
    </a>
        </span>
      </div>
    </div>
  </nav>
  )
}

export default Header