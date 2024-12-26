import React from "react";

function Index() {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ul className="footer-social">
              <li className="facebook">
                <a href="https://www.facebook.com/TechSode/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="behance">
                <a href="https://www.instagram.com/ronak_for_you/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="dribbble">
                <a href="https://www.linkedin.com/in/RonakSankhala/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 text-end">
            <p>&copy;TechSode IT Solutions || All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Index;
