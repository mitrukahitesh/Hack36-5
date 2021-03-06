import React,{useState} from "react"
import "./Dashboard.css"
import firebaseDB from "../../firebase"
import AdminNav from "./AdminNav.js"
const AdminProducts = () => {
 
  function handleclick() {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }

  const[state,setState] = useState({
    bid: "",
    available: ""
  });
const {bid, available} = state
   const handleSubmit = (e) =>{
     e.preventDefault();
     if(!bid || !available){
       alert("Please provide the data")
     }
     else {
      firebaseDB.child("art").push(state);
      setState({ bid: "", available: ""});
      alert("Form Submitted Successfully");
    }
  }
  const handleInputChange = (e) =>{
    let{name, value} = e.target;
    setState({...state, [name]:value})
  }
  return (
    <div>
      <AdminNav />
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn' onClick={() => handleclick()}></i>
            <span className="dashboard">Products</span>
          </div>
          {/*<div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className='bx bx-search bg-custom-blue' ></i>
    </div>*/}
          <div className="profile-details">
            <img src="/Admin/admin.png" alt="" />
            <span className="admin_name">Admin</span>
            {/*<i className='bx bx-chevron-down' ></i>*/}
          </div>
        </nav>

        <div className="home-content">
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="transition
      duration-150
      ease-in-out bg-custom-blue text-white text-sm float-right mr-6 py-2 px-4 rounded hover:ring-2 hover:ring-custom-blue hover:bg-transparent hover:text-custom-blue"><i className="fas fa-upload"></i> &nbsp;Upload Image</button>

          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog relative w-auto pointer-events-none">
              <div
                className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div
                  className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Upload</h5>
                  <button type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="modal-body relative p-4">
                  <input value={bid} type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="bid"
                    placeholder="Bidding Price" onChange={handleInputChange}
                  />
                  </div>
                <div className="modal-body relative p-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="date">
                    Availabililty Date
                  </label>
                  <input value={available} type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="available"
                    placeholder="Availability Date" onChange={handleInputChange}
                  />      </div>
                <div className="modal-body relative p-4">
                  <input onChange={handleInputChange} className="form-control w-full bg-custom-blue text-white text-sm py-2 px-4 rounded hover:ring-2 hover:ring-custom-blue hover:bg-transparent hover:text-custom-blue" type="file" id="formFile" />
                </div>
                <div
                  className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
           <input
                              type="submit"
                              value="Submit"
                              className="px-6
                              py-2.5
                              bg-blue-600
                              text-white
                              font-medium
                              text-xs
                              leading-tight
                              uppercase
                              rounded
                              shadow-md
                              hover:bg-blue-700 hover:shadow-lg
                              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                              active:bg-blue-800 active:shadow-lg
                              transition
                              duration-150
                              ease-in-out
                              ml-1"
                            />
                </div>
                </form>
              </div>
            </div>
          </div>
          <p className="text-3xl mx-6 mb-5 font-semibold">My Works</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 gap-10">
            <div className="text-center">
              <img src="/Banner/art.jpg" className="aspect-[1.4] w-full" alt="Image" />
              <p>Thomas</p>
              <p>Rs. 2000</p>
              <p>Avaibility Date: 18/05/2022</p>
            </div>
            <div className="text-center">
              <img src="/Banner/art.jpg" className="aspect-[1.4] w-full" alt="Image" />
              <p>Thomas</p>
              <p>Rs. 5000</p>
              <p>Avaibility Date: 20/06/2022</p>
            </div>
            <div className="text-center">
              <img src="/Banner/art.jpg" className="aspect-[1.4] w-full" alt="Image" />
              <p>Thomas</p>
              <p>Rs. 800</p>
              <p>Avaibility Date: 11/05/2022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminProducts;