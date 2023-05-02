import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Przemek Murawski Website</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-md-right">
              <Link to="/Privacy_Policy" className="list-inline-item">
                Privacy Policy
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
