// import { Link } from "react-router";
// import './Header.css'
// import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

// function Header() {
//   return (
//     <header>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-2 logo">
//             <img src="/src/assets/Images/logo.png" alt="" height={150} />
//           </div>
//           <div className="col-md-6 menubar">
//             <div className="menu">
//               <ul className="d-flex justify-content-center align-items-center gap-5">
//                 <li>
//                   <Link>Men</Link>
//                   <ul className="submenu">
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <Link>Women</Link>
//                   <ul className="submenu">
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
                    
//                   </ul>
//                 </li>
//                 <li>
//                   <Link>Kids</Link>
//                   <ul className="submenu">
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
                    
//                   </ul>
//                 </li>
//                 <li>
//                   <Link>Footwear</Link>
//                   <ul className="submenu">
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
//                     <li>
//                       <Link>T-Shirts</Link>
//                     </li>
                    
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-md-4 icons">
//             <ul className="d-flex justify-content-center align-items-center gap-3">
//               <li><CiUser /></li>
//               <li><CiSearch /></li>
//               <li><CiShoppingCart /></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Header;

import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="row align-items-center">

          {/* Logo */}
          <div className="col-6 col-md-2 logo">
            <img src="/src/assets/Images/logo.png" alt="" height={90} />
          </div>

          {/* Hamburger (Mobile Only) */}
          <div className="col-6 d-md-none text-end">
            <button
              className="menu-toggle-btn"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* MAIN MENU */}
          <div className={`col-md-6 menubar ${mobileMenu ? "openMenu" : ""}`}>
            <div className="menu">
              <ul className="gap-4">

                <li>
                  <Link>Men</Link>
                  <ul className="submenu">
                    <li><Link>T-Shirts</Link></li>
                    <li><Link>Shirts</Link></li>
                    <li><Link>Jeans</Link></li>
                    <li><Link>Jackets</Link></li>
                  </ul>
                </li>

                <li>
                  <Link>Women</Link>
                  <ul className="submenu">
                    <li><Link>Tops</Link></li>
                    <li><Link>Kurti</Link></li>
                    <li><Link>Leggings</Link></li>
                    <li><Link>Saree</Link></li>
                  </ul>
                </li>

                <li>
                  <Link>Kids</Link>
                  <ul className="submenu">
                    <li><Link>T-Shirts</Link></li>
                    <li><Link>Shorts</Link></li>
                    <li><Link>Frocks</Link></li>
                    <li><Link>Jeans</Link></li>
                  </ul>
                </li>

                <li>
                  <Link>Footwear</Link>
                  <ul className="submenu">
                    <li><Link>Sports Shoes</Link></li>
                    <li><Link>Sandals</Link></li>
                    <li><Link>Casual Shoes</Link></li>
                    <li><Link>Boots</Link></li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>

          {/* Icons */}
          <div className="col-md-4 icons d-none d-md-block">
            <ul className="d-flex justify-content-end align-items-center gap-3">
              <li><CiUser /></li>
              <li><CiSearch /></li>
              <li><CiShoppingCart /></li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
}
export default Header;
