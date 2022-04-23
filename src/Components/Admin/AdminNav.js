import React from 'react';
import { NavLink } from 'react-router-dom';
const AdminNav = () => {
    function handleclick() {
        let navItem = document.querySelector(".nav_item");
        if(navItem.classList.contains("active")){
            navItem.classList.replace("");
        }else
            navItem.classList.replace("active");
    }
    return (  
        <div class="sidebar bg-custom-blue shadow-lg bg-opacity-60">
          <div class="logo-details">
            <img src="/logo.png" alt="KalaKriti" className="h-16 mx-auto mt-2" />
          </div>
            <ul class="nav-links mt-5">
              <li className="nav_item">
                <a href="/Admin/Dashboard" className="active" onClick={() => handleclick()}>
                  <i class='bx bx-grid-alt'></i>
                  <span class="links_name">Dashboard</span>
                </a>
              </li>
              <li className="nav_item">
                <a href="/Admin/Products" onClick={() => handleclick()}>
                  <i class='bx bx-box' ></i>
                  <span class="links_name"> My Product</span>
                </a>
              </li>
              {/*<li>
                <a href="#">
                  <i class='bx bx-list-ul' ></i>
                  <span class="links_name">Order list</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class='bx bx-cog' ></i>
                  <span class="links_name">Settings</span>
                </a>
    </li>*/}
              <li class="log_out">
                <a href="#">
                  <i class='bx bx-log-out'></i>
                  <span class="links_name">Log out</span>
                </a>
              </li>
            </ul>
        </div>
    );
}
 
export default AdminNav;