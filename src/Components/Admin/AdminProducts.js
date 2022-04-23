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
            <button className="bg-custom-blue text-white text-sm float-right mr-6 py-2 px-4 rounded hover:ring-2 hover:ring-custom-blue hover:bg-transparent hover:text-custom-blue"><i className="fas fa-upload"></i> &nbsp;Upload Image</button>
            <p className="text-3xl mx-6 mb-5 font-semibold">My Works</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 gap-10">
              <div className="text-center">
                <img src="/Banner/art.jpg" className="aspect-[1.4] w-full" alt="Image" />
                <p>Name</p>
                <p>Bidding Price</p>
                <p>Avaibility Date</p>
              </div>
              <div className="text-center">
                <img src="/Banner/art.jpg" className="aspect-[1.4] w-full" alt="Image" />
                <p>Name</p>
                <p>Bidding Price</p>
                <p>Avaibility Date</p>
              </div>
              <div className="text-center">
                <img src="/Banner/art.jpg" className="aspect-[1.4] w-full" alt="Image" />
                <p>Name</p>
                <p>Bidding Price</p>
                <p>Avaibility Date</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
 
export default AdminProducts;