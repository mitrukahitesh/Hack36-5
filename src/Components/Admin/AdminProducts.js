import React from "react"
import "./Dashboard.css"
import AdminNav from "./AdminNav.js"
const AdminProducts = () => {
    function handleclick() {
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".sidebarBtn");
        sidebar.classList.toggle("active");
        if(sidebar.classList.contains("active")){
          sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
        }else
          sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
    return (  
      <div>
        <AdminNav />
        <section class="home-section">
        <nav>
        <div class="sidebar-button">
          <i class='bx bx-menu sidebarBtn' onClick={() => handleclick()}></i>
          <span class="dashboard">Products</span>
        </div>
        {/*<div class="search-box">
          <input type="text" placeholder="Search..." />
          <i class='bx bx-search bg-custom-blue' ></i>
    </div>*/}
        <div class="profile-details">
          <img src="/Admin/admin.png" alt="" />
          <span class="admin_name">Admin</span>
          {/*<i class='bx bx-chevron-down' ></i>*/}
        </div>
    </nav>
      
          <div class="home-content">
            <div class="overview-boxes">
              <div class="box">
                <div class="right-side">
                  <div class="box-topic">Highest Bidding</div>
                  <div class="number">40,876</div>
                  <div class="indicator">
                    <i class='bx bx-up-arrow-alt'></i>
                    <span class="text">Up from yesterday</span>
                  </div>
                </div>
                <i class='bx bx-cart-alt cart'></i>
              </div>
              <div class="box">
                <div class="right-side">
                  <div class="box-topic">Total Sales</div>
                  <div class="number">38,876</div>
                  <div class="indicator">
                    <i class='bx bx-up-arrow-alt'></i>
                    <span class="text">Up from yesterday</span>
                  </div>
                </div>
                <i class='bx bxs-cart-add cart two' ></i>
              </div>
              <div class="box">
                <div class="right-side">
                  <div class="box-topic">Total Profit</div>
                  <div class="number">12,876</div>
                  <div class="indicator">
                    <i class='bx bx-up-arrow-alt'></i>
                    <span class="text">Up from yesterday</span>
                  </div>
                </div>
                <i class='bx bx-cart cart three' ></i>
              </div>
              <div class="box">
                <div class="right-side">
                  <div class="box-topic">Total Return</div>
                  <div class="number">11,086</div>
                  <div class="indicator">
                    <i class='bx bx-down-arrow-alt down'></i>
                    <span class="text">Down From Today</span>
                  </div>
                </div>
                <i class='bx bxs-cart-download cart four' ></i>
              </div>
            </div>
      
            <div class="sales-boxes">
              <div class="recent-sales box">
                <div class="title">Recent Bidding Sales</div>
                <div class="sales-details">
                  <ul class="details">
                    <li class="topic">Date</li>
                    <li><a href="#">23 Apr 2022</a></li>
                    <li><a href="#">23 Apr 2022</a></li>
                    <li><a href="#">23 Apr 2022</a></li>
                    <li><a href="#">23 Apr 2022</a></li>
                  
                  
                  </ul>
                  <ul class="details">
                  <li class="topic">Customer</li>
                  <li><a href="#">Shruti Mayank</a></li>
                  <li><a href="#">Shruti Varshney</a></li>
                  <li><a href="#">Hitesh Mitruka</a></li>
                  <li><a href="#">Prashant Singh</a></li>
                
                </ul>
                <ul class="details">
                  <li class="topic">Sales</li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Returned</a></li>
                  <li><a href="#">Delivered</a></li>
                
                </ul>
                <ul class="details">
                  <li class="topic">Total</li>
                  <li><a href="#">Rs 204.98</a></li>
                  <li><a href="#">Rs 24.55</a></li>
                  <li><a href="#">Rs 25.88</a></li>
                  <li><a href="#">Rs 170.66</a></li>
                  
                </ul>
                </div>
                <div class="button">
                  <a href="#">See All</a>
                </div>
              </div>
              <div class="top-sales box">
                <div class="title">Top Selling Bids</div>
                <ul class="top-sales-details">
                  <li>
                  <a href="#">
                    <img src="/Admin/tibetanpots.jpg" alt="" />
                    <span class="product">Tibetan Pots</span>
                  </a>
                  <span class="price">Rs 1107</span>
                </li>
                <li>
                  <a href="#">
                    <img src="/Admin/mojilpur.jpg" alt="" />
                    <span class="product">Mojilpur dolls </span>
                  </a>
                  <span class="price">Rs 1567</span>
                </li>
                <li>
                  <a href="#">
                    <img src="/Admin/hathi.jpg" alt="" />
                    <span class="product">Bongua hathi</span>
                  </a>
                  <span class="price">Rs 1234</span>
                </li>
                <li>
                  <a href="#">
                    <img src="/Admin/mithila.jpg" alt="" />
                    <span class="product">Mithila painting</span>
                  </a>
                  <span class="price">Rs 2312</span>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
 
export default AdminProducts;