import React from 'react'

function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Shophub</a>
  <a class="navbar-brand" href="/cart">Cart</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home</a>
      <a class="nav-item nav-link" href="/products">Shop</a>
      <a class="nav-item nav-link" href="/blog">Blog</a>
      <a class="nav-item nav-link" href="/contact">Contact</a>
      <a class="nav-item nav-link" href="/login">LogIn</a>
      <a class="nav-item nav-link" href="/signup">SignUp</a>
      <a class="nav-item nav-link" href="/myaccount">My Account</a>




      {/* <a class="nav-item nav-link disabled" href="#">aas</a> */}
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar