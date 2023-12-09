import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  return (
    <div>
      <header class="navbar fixed-top" style={{ position: "relative" }}>
        <a class="brand-logo" href="/" previewlistener="true" style={{textDecoration:"none"}}>
          <div class="logo" >
            <div class="dots"  >
              <div class="first-dot" >■</div>
              <div>■</div>
              <div>■</div>
              <div>■</div>
            </div>
          </div>
          <div class="brand-name">
            <p>ShopHub</p>
          </div>
        </a>
        <nav>
          <div class="nav-links">
            <a
              class="nav-link active"
              href="/"
              previewlistener="true"
              aria-current="page"
            >
              Home
            </a>
            <a className="nav-item nav-link" href="/products">
              Shop
            </a>
            <a className="nav-item nav-link" href="/blog">
              Blog
            </a>
            <a className="nav-item nav-link" href="/contact">
              Contact
            </a>
            <a className="nav-item nav-link" href="/login">
              LogIn
            </a>
            <a className="nav-item nav-link" href="/signup">
              SignUp
            </a>
            <a className="nav-item nav-link" href="/myaccount">
              My Account
            </a>
          </div>
        </nav>

        <span class="add-to-cart" onClick={()=>Navigate('/cart')}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shopping-bag"
            class="svg-inline--fa fa-shopping-bag fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20"
            height="20"
          >
            <path
              fill="currentColor"
              d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
            ></path>
          </svg>
        </span>
      </header>
    </div>
  );
}

export default Navbar;
