import { GoogleLogout } from "react-google-login";

const clientID = "581333574404-hhq1vv0d54d4qb3s602asavr3h7aikd8.apps.googleusercontent.com";

const AdminNav = () => {

  const onSuccess = () => {
    console.log("Logged Out Successfully!");
  }
    return (  
        <div class="sidebar bg-custom-blue shadow-lg bg-opacity-60">
          <div class="logo-details">
            <img src="/logo.png" alt="KalaKriti" className="h-16 mx-auto mt-2" />
          </div>
            <ul class="nav-links mt-5">
              <li>
                <a href="/Admin/Dashboard" class="active">
                  <i class='bx bx-grid-alt' ></i>
                  <span class="links_name">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/Admin/Products">
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
                <a href="/" clientId={clientID}
            onLogoutSuccess={onSuccess}>
                  <i class='bx bx-log-out'></i>
                  <span class="links_name">Log out</span>

                  <GoogleLogout 
            clientId={clientID}
            buttonText = "Logout"
            style={{
              border: 'none',
              background: 'none',
              padding: 0,
              margin: 0 
            }}
            onLogoutSuccess={onSuccess}
            />
                </a>
              </li>
            </ul>
        </div>
    );
}
 
export default AdminNav;