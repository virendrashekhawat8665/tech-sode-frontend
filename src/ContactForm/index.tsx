import React from "react";

function Index() {
  return (
    <div
      id="contact"
      className="contact-area shape-less default-padding overflow-hidden"
    >
      <h2 className="text-shade">Contact</h2>
      <div className="container">
        <div className="contact-content">
          <div className="row align-center">
            <div className="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
              <div className="">
                {/* <!-- Embed Google Form --> */}
                <div className="button mt-55">
                  <a
                    className="btn btn-md circle btn-dark"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdEdqxPAIlyUH_m1MnjlhUlzslbMosDw5jJet0PCaHw_uuNHQ/viewform?embedded=true"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                  {/* <!-- #resume --> */}
                </div>
                {/* <div className="google-form-container">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdEdqxPAIlyUH_m1MnjlhUlzslbMosDw5jJet0PCaHw_uuNHQ/viewform?embedded=true"
                    width="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    //style="height: 1200px !important;"
                    style={{ height: 1200 }}
                  >
                    Loading…
                  </iframe>
                </div> */}
                {/* <!-- End Google Form --> */}
              </div>
            </div>

            <div className="col-lg-4 offset-lg-1 info">
              <div className="content">
                <ul>
                  <li className="contact-info-list wow fadeInUp">
                    <div className="icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="info">
                      <p>Our Email</p>
                      <h5>
                        <a href="mailto:info@techsode.com">info@techsode.com</a>
                      </h5>
                    </div>
                  </li>
                  <li
                    className="contact-info-list wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="icon">
                      <i>
                        <img src="assets/img/location-icon.png" alt="" />
                      </i>
                    </div>
                    <div className="info">
                      <p>Address</p>
                      <h5>
                        <a href="https://goo.gl/maps/bcGD4ERSQr1HxaXf6">
                          S/58, Govindpura - Sirsi Link Rd <br /> Govindpura,
                          Gokulpura, Jaipur <br /> Rajasthan 303801
                        </a>
                      </h5>
                    </div>
                  </li>
                  <li
                    className="contact-info-list wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <div className="icon">
                      <i>
                        <img src="assets/img/headphone-icon.png" alt="" />
                      </i>
                    </div>
                    <div className="info">
                      <p>Phone</p>
                      <h5>
                        <a href="tel:8949766329">8949766329</a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
