import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 10 + '%'}} src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"></img>
       </NavLink>
     </nav>
   </div>
 );
}