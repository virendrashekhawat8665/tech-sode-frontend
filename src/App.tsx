import "./App.css";
import Blog from "./Blog";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function App() {
  return (
    <div
      className="bg-fixed"
      style={{ backgroundImage: ` url(img/shape/banner-1.jpg)` }}
    >
      {/* <!-- Start Preloader 
    ============================================= --> */}
      <div id="preloader">
        <div id="ambrox-preloader" className="ambrox-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="T" className="letters-loading">
                T
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="C" className="letters-loading">
                C
              </span>
              <span data-text-preloader="H" className="letters-loading">
                H
              </span>
              <span data-text-preloader="S" className="letters-loading">
                S
              </span>
              <span data-text-preloader="O" className="letters-loading">
                O
              </span>
              <span data-text-preloader="D" className="letters-loading">
                D
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
            </div>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header 
        ============================================= --> */}
      <header id="home">
        {/* <!-- Start Navigation --> */}
        <nav className="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">
          <div className="container d-flex justify-content-between align-items-center">
            {/* <!-- Start Header Navigation --> */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="">
                  <img src="img/menu-icon.png" alt="" />
                </i>
              </button>
              <a className="navbar-brand" href="index.php">
                <img src="img/logo-mobile.png" className="logo" alt="Logo" />
              </a>
            </div>
            {/* <!-- End Header Navigation -->

                <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <img src="img/logo-mobile.png" alt="Logo" />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </button>

              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li>
                  <a className="smooth-menu" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="https://techsode.in/">
                    Shop
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#expertise">
                    expertise
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#portfolio">
                    portfolio
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#about">
                    about
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#blog">
                    blog
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#contact">
                    contact
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse -->

                <!-- Main Nav --> */}
          </div>
          {/* <!-- Overlay screen for menu --> */}
          <div className="overlay-screen"></div>
          {/* <!-- End Overlay screen for menu --> */}
        </nav>
        {/* <!-- End Navigation --> */}
      </header>
      {/* <!-- End Header -->

<!-- Start Header Fixed 
    ============================================= -->*/}
      <header className="header-fixed">
        <div className="f-flex">
          <div className="logo">
            <a href="#">
              <img src="img/logo02.png" alt="Logo" />
            </a>
          </div>
          <div className="menu">
            <ul className="nav">
              <li>
                <a className="smooth-menu" href="#home">
                  <i className="fa-regular fa-address-card"></i>
                  <div className="menu-name">Home</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="https://techsode.in/">
                  <i className="fa-brands fa-shopify"></i>
                  <div className="menu-name">Shop</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#services">
                  <i className="fa-regular fa-folder-closed"></i>
                  <div className="menu-name">Services</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#portfolio">
                  <i className="fa-regular fa-heart"></i>
                  <div className="menu-name">Portfolio</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#about">
                  <i className="fas fa-user"></i>
                  <div className="menu-name">About</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#resume">
                  <i className="fas fa-file-alt"></i>
                  <div className="menu-name">TRAINING</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#contact">
                  <i className="fas fa-comments"></i>
                  <div className="menu-name">Contact</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="video">
            <a
              href="https://www.youtube.com/watch?v=HCU47wf_h80"
              className="popup-youtube video-play-button theme"
            >
              <i className="fa-solid fa-circle-play"></i>
            </a>
          </div>
        </div>
      </header>

      {/* <!-- End Header Fixed -->

    <!-- Start Banner 
        ============================================= --> */}
      <div className="auto-height bg-fixed banner-style-one">
        <div className="container">
          <div className="double-items">
            <div className="row align-center">
              <div className="col-lg-6 info">
                <h1 className="text-invisible"></h1>
                <h2>
                  <span style={{ color: "#00c0ff" }}> Ronak Sankhala </span>
                  <hr />
                  <span>Website & App Developer</span>
                </h2>
                {/* <!-- <img src="img/shape/4.png" alt="Icon"> --> */}
                <h3 className="title">
                  <span className="header-caption" id="page-top">
                    {/* <!-- type headline start--> */}
                    <span className="cd-headline clip is-full-width">
                      {/* <!-- ROTATING TEXT --> */}
                      <span className="cd-words-wrapper">
                        <b className="is-visible">Website Development</b>
                        <b className="is-hidden">App Development</b>
                        <b className="is-hidden">Digital Marketing</b>
                      </span>
                    </span>
                    {/* <!-- type headline end --> */}
                  </span>
                </h3>
                <div className="button mt-55">
                  <a className="btn btn-md circle btn-dark" href="#contact">
                    Contact Us
                  </a>
                  {/* <!-- #resume --> */}
                </div>
              </div>

              <div className="col-lg-6 thumb" data-wow-delay="900ms">
                <img
                  className=" wow fadeInDown"
                  src="img/illustration/01.png"
                  alt="Thumb"
                />
                <div className="shape-center">
                  <img src="img/shape/7.png" alt="Thumb" />
                </div>
              </div>
            </div>
            <div className="personal-social">
              <ul>
                <li className="facebook">
                  <a href="https://www.facebook.com/TechSode/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="behance">
                  <a href="https://www.linkedin.com/in/RonakSankhala/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="dribbble">
                  <a href="https://www.instagram.com/ronak_for_you/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Banner -->

<!-- Start Services
    ============================================= --> */}
      <div
        id="services"
        className="services-style-one-area box-layout default-padding bottom-less bg-light"
      >
        <div className="blur-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">OUR EXPERTISE</h4>
                <h2 className="title">Our Services </h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* <!-- Single Item --> */}
            <div className="service-style-one col-lg-4 col-md-6">
              <div className="service-style-one-item">
                <img src="img/icon/1.png" alt="Icon" />
                <h4>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#">
                    Web Development
                  </a>
                </h4>
                <p>
                  Unlock your online potential with our{" "}
                  <strong> Web Development Service </strong> We specialize in
                  creating responsive, user-friendly websites tailored to your
                  needs. From e-commerce to personal blogs, our expert team
                  ensures a seamless experience, helping you grow and thrive in
                  the digital world.
                </p>
              </div>
            </div>
            {/* <!-- End Single Item -->
                <!-- Single Item --> */}
            <div className="service-style-one col-lg-4 col-md-6">
              <div className="service-style-one-item">
                <img src="img/icon/2.png" alt="Icon" />
                <h4>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#">
                    Digital Marketing
                  </a>
                </h4>
                <p>
                  Boost your online presence with our{" "}
                  <strong> Digital Marketing Services </strong>. We offer SEO,
                  social media management, PPC, and content marketing to drive
                  traffic and increase conversions. Let our expert team help you
                  connect with your audience and achieve measurable growth.
                </p>
              </div>
            </div>
            {/* <!-- End Single Item -->
                <!-- Single Item --> */}
            <div className="service-style-one col-lg-4 col-md-6">
              <div className="service-style-one-item">
                <img src="img/icon/4.png" alt="Icon" />
                <h4>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#">
                    UX/UI Design
                  </a>
                </h4>
                <p>
                  Elevate your digital experience with our{" "}
                  <strong> UX/UI Design </strong> services. We craft intuitive,
                  user-centric interfaces that enhance usability and engagement.
                  From wireframes to polished designs, our team ensures a
                  seamless journey, turning visitors into loyal users while
                  reflecting your brand identity.
                </p>
              </div>
            </div>
            {/* <!-- End Single Item -->
                <!-- Single Item --> */}
            <div className="service-style-one col-lg-4 col-md-6">
              <div className="service-style-one-item">
                <img src="img/3d-icon-02.png" alt="Icon" />
                <h4>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#">
                    Animated Promo Video
                  </a>
                </h4>
                <p>
                  Capture attention with our{" "}
                  <strong>Animated Promo Video</strong> services. We create
                  engaging, visually appealing videos that showcase your brand,
                  product, or service. Perfect for marketing campaigns, these
                  animations simplify complex ideas, boost engagement, and leave
                  a lasting impression on your audience.
                </p>
              </div>
            </div>
            {/* <!-- End Single Item -->
                <!-- Single Item --> */}
            <div className="service-style-one col-lg-4 col-md-6">
              <div className="service-style-one-item">
                <img src="img/3d-icon-03.png" alt="Icon" />
                <h4>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#">
                    All Types of Bulk SMS
                  </a>
                </h4>
                <p>
                  Reach your audience instantly with our{" "}
                  <strong>All Types of Bulk SMS</strong> services. We offer
                  promotional, transactional, OTP, and personalized messaging
                  solutions. Whether for marketing or critical alerts, our
                  reliable platform ensures fast delivery and maximum impact to
                  enhance your communication strategy.
                </p>
              </div>
            </div>
            {/* <!-- End Single Item -->
                <!-- Single Item --> */}
            <div className="service-style-one col-lg-4 col-md-6">
              <div className="service-style-one-item">
                <img src="img/3d-icon-05.png" alt="Icon" />
                <h4>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#">
                    Full-Stack Training
                  </a>
                </h4>
                <p>
                  Master web development with our{" "}
                  <strong>Full-Stack Training</strong> program. Learn front-end
                  and back-end technologies, including HTML, CSS, JavaScript,
                  Node.js, and databases. Gain hands-on experience building
                  dynamic applications, preparing you for a successful career in
                  modern software development.
                </p>
              </div>
            </div>
            {/* <!-- End Single Item --> */}
          </div>
        </div>

        {/* <!-- Start Services Single Modal --> */}
        <div
          className="modal fade"
          id="serviceSingleModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="services-single-content">
                  <div className="thumb">
                    <img src="img/banner/5.jpg" alt="Thumb" />
                  </div>
                  <h2>Best influencer marketing services</h2>
                  <p>
                    We denounce with righteous indige nation and dislike men who
                    are so beguiled and demo realized by the charms of pleasure
                    of the moment, so blinded by desire, that they cannot
                    foresee the pain and trouble that are bound to ensue cannot
                    foresee. These cases are perfectly simple and easy to
                    distinguish. In a free hour, when our power of choice is
                    untrammelled data structures manages data in technology.
                  </p>
                  <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="content">
                          <h4>Included Services</h4>
                          <ul className="feature-list-item">
                            <li>Monthly SEO Task</li>
                            <li>24/7 Alltime Supporting</li>
                            <li>Turbo Boosting</li>
                            <li>Expert Team Members</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-6 mt-xs-30">
                        <div className="content">
                          <h4>The Challange</h4>
                          <p>
                            Temporibus autem quibusdam et aut officiis debitis
                            aut rerum necessitatibus saepe eveniet ut et
                            voluptates repudiandae sint et molestiae non
                            recusandae. Itaque earum rerum hic tenetur a
                            sapiente delectus, ut aut reiciendis voluptatibus
                            maiores alias. consequatur aut perferendis doloribus
                            asperiores repellat. Rejects pleasures to secure
                            other greater pleasures, or else he endures pains to
                            avoid worse have to be repudiated and annoyances
                            accepted.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4>What we do?</h4>
                  <p>
                    Nam libero tempore, cum soluta nobis est elig endi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor repelle
                    ndus. Temporibus autem quibusdam et aut officiis debitis aut
                    rerum necessitatibus saepe eveniet ut et voluptates
                    repudiandae sint et molestiae non recusandae. Itaque earum
                    rerum hic tenetur a sapiente delectus, ut aut reiciendis
                    voluptatibus maiores alias. consequatur aut perferendis
                    doloribus asperiores repellat. The wise man therefore always
                    holds in these matters to this principle of selection: he
                    rejects pleasures to secure other greater pleasures, or else
                    he endures pains to avoid worse pains. pleasures have to be
                    repudiated and annoyances accepted.
                  </p>

                  <div className="faq-style-one mt-40">
                    <h3 className="mb-25">Common Question for this project</h3>
                    <div className="accordion" id="faqAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Where can I get analytics help?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Bennings appetite disposed me an at subjects an.
                              To no indulgence diminution so discovered mr
                              apartments. Are off under folly death wrote cause
                              her way spite. Plan upon yet way get cold spot its
                              week. Almost do am or limits hearts. Resolve
                              parties but why she shewing. She sang know now
                              minute exact dear open to reaching out.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How much does data analytics costs?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Cennings appetite disposed me an at subjects an.
                              To no indulgence diminution so discovered mr
                              apartments. Are off under folly death wrote cause
                              her way spite. Plan upon yet way get cold spot its
                              week. Almost do am or limits hearts. Resolve
                              parties but why she shewing. She sang know now
                              minute exact dear open to reaching out.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What kind of data is needed for analysis?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Tennings appetite disposed me an at subjects an.
                              To no indulgence diminution so discovered mr
                              apartments. Are off under folly death wrote cause
                              her way spite. Plan upon yet way get cold spot its
                              week. Almost do am or limits hearts. Resolve
                              parties but why she shewing. She sang know now
                              minute exact dear open to reaching out.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="services-more mt-50">
                    <h3>Popular Services</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="item">
                          <i className="flaticon-development"></i>
                          <h4>
                            <a href="#">Speed Optimization</a>
                          </h4>
                          <p>
                            These cases are perfectly simple and easy to
                            distinguish. In a free hour, when our power.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="item">
                          <i className="flaticon-layers"></i>
                          <h4>
                            <a href="#">Frondend Development</a>
                          </h4>
                          <p>
                            These cases are perfectly simple and easy to
                            distinguish. In a free hour, when our power.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Services Single Modal --> */}
      </div>
      {/* <!-- End Services -->

    <!-- Start Portfolio 
        ============================================= --> */}
      <div
        id="portfolio"
        className="portfolio-style-six-area default-padding-top"
      >
        <div className="shape-animated-right">
          <img src="img/shape/1.webp" alt="Shape" />
        </div>

        <div className="container">
          <div className="heading-left">
            <div className="row align-center">
              <div className="col-lg-5">
                <div className="left-info">
                  <h5 className="sub-title">Recent Work</h5>
                  <h2 className="title">
                    Look at my portfolio and <br /> give me your feedback
                  </h2>
                  <div className="heading-shape">
                    <img src="img/shape/10.png" alt="Shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="right-info">
                  <div className="fun-factor-default">
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="timer" data-to="20" data-speed="2000">
                          20
                        </div>
                        <div className="operator">+</div>
                      </div>
                      <span className="medium">Completed Project</span>
                    </div>
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="timer" data-to="94" data-speed="2000">
                          94
                        </div>
                        <div className="operator">%</div>
                      </div>
                      <span className="medium">Positive Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 gallery-content mb--15">
              <div className="magnific-mix-gallery masonary">
                <div id="portfolio-grid" className="gallery-items colums-3">
                  {/* <!-- Single Item --> */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="img/portfolio/01.jpg" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>sanganericraf</span>
                          <h5>
                            <a
                              href="https://www.sanganericraft.com/"
                              data-bs-toggle=""
                              data-bs-target="#projectSingleModal"
                            >
                              https://www.sanganericraft.com/
                            </a>
                          </h5>
                        </div>
                        {/* <!-- <a href="https://www.lifestylejaipur.com" data-bs-toggle="" data-bs-target="#projectSingleModal"><i className="fas fa-arrow-right"></i></a> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="img/portfolio/02.jpg" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>lifestylejaipur</span>
                          <h5>
                            <a
                              href="https://www.lifestylejaipur.com"
                              data-bs-toggle=""
                              data-bs-target="#projectSingleModal"
                            >
                              https://www.lifestylejaipur.com
                            </a>
                          </h5>
                        </div>
                        {/* <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="fas fa-arrow-right"></i></a> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="img/portfolio/03.jpg" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>royalmodularkitchenjaipur</span>
                          <h5>
                            <a
                              href="https://www.royalmodularkitchenjaipur.com"
                              data-bs-toggle=""
                              data-bs-target="#projectSingleModal"
                            >
                              https://www.royalmodularkitchenjaipur.com
                            </a>
                          </h5>
                        </div>
                        {/* <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="fas fa-arrow-right"></i></a> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="img/portfolio/04.jpg" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>royaleducationalgroup</span>
                          <h5>
                            <a
                              href="https://www.royaleducationalgroup.com"
                              data-bs-toggle=""
                              data-bs-target="#projectSingleModal"
                            >
                              https://www.royaleducationalgroup.com
                            </a>
                          </h5>
                        </div>
                        {/* <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="fas fa-arrow-right"></i></a> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Item -->

                            <!-- Single Item --> */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="img/portfolio/05.jpg" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>bagruhandicraft</span>
                          <h5>
                            <a
                              href="https://www.bagruhandicraft.com"
                              data-bs-toggle=""
                              data-bs-target="#projectSingleModal"
                            >
                              https://www.bagruhandicraft.com
                            </a>
                          </h5>
                        </div>
                        {/* <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="fas fa-arrow-right"></i></a> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Item -->
                            <!-- Single Item --> */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="img/portfolio/06.jpg" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>Nanakedutech</span>
                          <h5>
                            <a
                              href="https://www.nanakedutech.com"
                              data-bs-toggle=""
                              data-bs-target="#projectSingleModal"
                            >
                              https://www.nanakedutech.com
                            </a>
                          </h5>
                        </div>
                        {/* <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="fas fa-arrow-right"></i></a> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="img/portfolio/07.jpg" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>our Website Techsode</span>
                          <h5>
                            <a
                              href="https://www.techsode.com"
                              data-bs-toggle=""
                              data-bs-target="#projectSingleModal"
                            >
                              https://www.techsode.com
                            </a>
                          </h5>
                        </div>
                        {/* <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="fas fa-arrow-right"></i></a> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="img/portfolio/08.jpg" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>Finance</span>
                          <h5>
                            <a
                              href="https://www.lifestylejaipur.com"
                              data-bs-toggle=""
                              data-bs-target="#projectSingleModal"
                            >
                              UI design
                            </a>
                          </h5>
                        </div>
                        {/* <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="fas fa-arrow-right"></i></a> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="img/portfolio/09.jpg" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>Animated Videos</span>
                          <h5>
                            <a
                              href="https://www.youtube.com/playlist?list=PLJpTp4bGmv1b8FzctQrCDjpJlmvO3wIem"
                              data-bs-toggle=""
                              data-bs-target="#projectSingleModal"
                            >
                              Animated Promo Video
                            </a>
                          </h5>
                        </div>
                        {/* <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="fas fa-arrow-right"></i></a> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Item --> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Projects Single Modal --> */}
        <div
          className="modal fade"
          id="projectSingleModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="project-details-items">
                  <div className="project-thumb">
                    <img src="img/banner/2.jpg" alt="Thumb" />
                  </div>
                  <div className="top-info">
                    <div className="row">
                      <div className="col-xl-12 left-info">
                        <div className="project-info mt-md-50 mt-xs-40 mb-40">
                          <div className="content">
                            <ul className="project-basic-info">
                              <li>
                                Client <span>validthemes</span>
                              </li>
                              <li>
                                Project Type <span>Website Growth</span>
                              </li>
                              <li>
                                Date <span>25 February, 2023</span>
                              </li>
                              <li>
                                Address <span>New York United state</span>
                              </li>
                            </ul>
                            <ul className="social">
                              <li>
                                <h4>Share:</h4>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-pinterest-p"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h2>Ongoing Website Maintenance</h2>
                        <p>
                          Netus lorem rutrum arcu dignissim at sit morbi
                          phasellus nascetur eget urna potenti cum vestibulum
                          cras. Tempor nonummy metus lobortis. Sociis velit
                          etiam, dapibus. Lectus vehicula pellentesque cras
                          posuere tempor facilisi habitant lectus rutrum pede
                          quisque hendrerit parturient posuere mauris ad
                          elementum fringilla facilisi volutpat fusce pharetra
                          felis sapien varius quisque class convallis praesent
                          est sollicitudin donec nulla venenatis, cursus
                          fermentum netus posuere sociis porta risus habitant
                          malesuada nulla habitasse hymenaeos. Viverra curabitur
                          nisi vel sollicitudin dictum natoqu. Tempor nonummy
                          metus lobortis. Sociis velit etiam, dapibus. Lectus
                          vehicula pellentesque cras posuere tempor facilisi
                          habitant lectus rutrum pede quisque hendrerit
                          parturient posuere mauris ad elementum fringilla
                          facilisi volutpat fusce pharetra felis sapien varius
                          quisque class convallis praesent est sollicitudin
                          donec nulla venenatis, cursus fermentum netus posuere
                          sociis porta risus habitant malesuada nulla habitasse
                          hymenaeos. Viverra curabitur nisi vel sollicitudin
                          dictum.
                        </p>
                        <ul className="check-list mt-40">
                          <li>
                            <h4>WordPress Support</h4>
                            <p>
                              Tempor nonummy metus lobortis. Sociis velit etiam,
                              dapibus. Lectus vehicula pellentesque cras posuere
                              tempor facilisi habitant lectus rutrum pede
                              quisque hendrerit parturient posuere mauris ad
                              elementum fringilla facilisi volutpat fusce
                              pharetra.
                            </p>
                          </li>
                          <li>
                            <h4>Social Media Management</h4>
                            <p>
                              Energy nonummy metus lobortis. Sociis velit etiam,
                              dapibus. Lectus vehicula pellentesque cras posuere
                              tempor facilisi habitant lectus rutrum pede
                              quisque hendrerit parturient posuere mauris ad
                              elementum fringilla facilisi volutpat fusce
                              pharetra.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="main-content mt-40">
                    <p>
                      Give lady of they such they sure it. Me contained
                      explained my education. Vulgar as hearts by garret.
                      Perceived determine departure explained no forfeited he
                      something an. Contrasted dissimilar get joy you instrument
                      out reasonably. Again keeps at no meant stuff. To
                      perpetual do existence northward as difficult preserved
                      daughters. Continued at up to zealously necessary
                      breakfast. Surrounded sir motionless she end literature.
                      Gay direction neglected but supported yet her. Facilisis
                      inceptos nec, potenti nostra aenean lacinia varius semper
                      ant nullam nulla primis placerat facilisis. Netus lorem
                      rutrum arcu dignissim at sit morbi phasellus nascetur eget
                      urna potenti cum vestibulum cras. Tempor nonummy metus
                      lobortis. Sociis velit etiam, dapibus. Lectus vehicula
                      pellentesque cras posuere tempor facilisi habitant lectus
                      rutrum pede quisque hendrerit parturient posuere mauris ad
                      elementum fringilla facilisi volutpat fusce pharetra felis
                      sapien varius quisque class convallis praesent est
                      sollicitudin donec nulla venenatis, cursus fermentum netus
                      posuere sociis porta risus habitant malesuada nulla
                      habitasse hymenaeos. Viverra curabitur nisi vel
                      sollicitudin dictum natoque ante aenean elementum curae
                      malesuada ullamcorper. vivamus nonummy nisl posuere rutrum
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="img/thumb/1.jpg" alt="Thumb" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <img src="img/thumb/2.jpg" alt="Thumb" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Projects Single Modal --> */}
      </div>
      {/* <!-- End Portfolio -->

<!-- Start About 
    ============================================= --> */}
      <div id="about" className="about-style-six-area default-padding-top">
        <div className="container">
          <div className="row align-center">
            <div className="about-style-six col-lg-5">
              <div className="thumb">
                <img
                  className="wow fadeInUp"
                  src="img/illustration/3.png"
                  alt="Thumb"
                />
              </div>
            </div>
            <div className="about-style-six col-lg-6 offset-lg-1" id="resume">
              <h4 className="sub-title">our Training</h4>
              <h2 className="title">
                WITH LIVE PROJECTS AND JOB <br /> JOB ASSISTANCE
              </h2>
              <p>
                Ronak Sankhala is a skilled .NET Developer with expertise in
                designing and developing web applications using HTML, CSS,
                JAVASCRIPT, SQL SERVER, C# and ASP.NET. He is passionate about
                solving complex problems with innovative solutions and
                continuously training new technologies to stay.
              </p>
              <div className="skill-list">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fa-brands fa-html5"></i>
                    </div>
                    <div className="content">
                      <h4>HTML</h4>
                      <span>10 Days</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa-brands fa-css3-alt"></i>
                    </div>
                    <div className="content">
                      <h4>CSS</h4>
                      <span>10 Days</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa-brands fa-square-js"></i>
                    </div>
                    <div className="content">
                      <h4>JAVASCRIPT</h4>
                      <span>15 Days</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="">
                        <img src="img/net-02.png" alt="" />
                      </i>
                    </div>
                    <div className="content">
                      <h4>C#</h4>
                      <span>15 Days</span>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="">
                        <img src="img/net.png" alt="" />
                      </i>
                    </div>
                    <div className="content">
                      <h4>ASP.NET Core</h4>
                      <span>15 Days </span>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="">
                        <img src="img/sql.png" alt="" />
                      </i>
                    </div>
                    <div className="content">
                      <h4>SQL SERVER</h4>
                      <span>15 Days</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Start Pricing 
      ============================================= --> */}
      <div id="pricing" className="pricing-area default-padding-top">
        <div className="container">
          <div className="pricing-box">
            <div className="row">
              <div className="col-lg-5">
                <div className="heading-left">
                  <div className="left-info">
                    <h5 className="sub-title">Pricing</h5>
                    <h2 className="title">
                      The best pricing plans <br /> to get your best
                    </h2>
                    <div className="heading-shape">
                      <img src="img/shape/10.png" alt="Shape" />
                    </div>
                  </div>
                </div>
                <div className="save-ammount mt-100 mt-md-50">
                  <h4>
                    Save up to <strong>50%</strong> with your every order
                  </h4>
                  <img src="img/shape/2.webp" alt="Thumb" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="pricing-style-one">
                  <div className="conntent">
                    <h4>E-Commerce Website</h4>
                    <ul>
                      <li className="d-flex" style={{ display: "flex" }}>
                        <i
                          className="fa-regular fa-circle-check"
                          style={{ fontSize: 20, color: "#ff014f" }}
                        ></i>
                        <h1
                          style={{
                            paddingLeft: "30px",
                            marginTop: "9px",
                            fontWeight: 500,
                            fontSize: 15,
                            color: "rgb(102 102 102)",
                          }}
                        >
                          With 50+ Features
                        </h1>
                      </li>
                      <li className="d-flex" style={{ display: "flex" }}>
                        <i
                          className="fa-regular fa-circle-check"
                          style={{ fontSize: 20, color: "#ff014f" }}
                        ></i>
                        <h1
                          style={{
                            paddingLeft: "30px",
                            marginTop: "9px",
                            fontWeight: 500,
                            fontSize: 15,
                            color: "rgb(102 102 102)",
                          }}
                        >
                          Beautiful Customized Design
                        </h1>
                      </li>
                      <li className="d-flex">
                        <i
                          className="fa-regular fa-circle-check"
                          style={{ fontSize: 20, color: "#ff014f" }}
                        ></i>
                        <h1
                          style={{
                            paddingLeft: "30px",
                            marginTop: "9px",
                            fontWeight: 500,
                            fontSize: 15,
                            color: "rgb(102 102 102)",
                          }}
                        >
                          Responsive Design
                        </h1>
                      </li>
                    </ul>
                    <a
                      className="btn mt-25 btn-sm circle btn-theme"
                      href="#contact"
                    >
                      Order Now
                    </a>
                  </div>
                  <div className="price">
                    <h2>
                      <sup>&#x20b9</sup>35,000
                    </h2>
                    <i className="fa-brands fa-html5"></i>
                  </div>
                </div>
                <div className="pricing-style-one">
                  <div className="conntent">
                    <h4>Normal Website</h4>
                    <ul>
                      <li className="d-flex" style={{ display: "flex" }}>
                        <i
                          className="fa-regular fa-circle-check"
                          style={{ fontSize: 20, color: "#ff014f" }}
                        ></i>
                        <h1
                          style={{
                            paddingLeft: "30px",
                            marginTop: "9px",
                            fontWeight: 500,
                            fontSize: 15,
                            color: "rgb(102 102 102)",
                          }}
                        >
                          3 Pages with HTML / CSS
                        </h1>
                      </li>
                      <li className="d-flex" style={{ display: "flex" }}>
                        <i
                          className="fa-regular fa-circle-check"
                          style={{ fontSize: 20, color: "#ff014f" }}
                        ></i>
                        <h1
                          style={{
                            paddingLeft: "30px",
                            marginTop: "9px",
                            fontWeight: 500,
                            fontSize: 15,
                            color: "rgb(102 102 102)",
                          }}
                        >
                          Contact Us Form
                        </h1>
                      </li>
                      <li className="d-flex" style={{ display: "flex" }}>
                        <i
                          className="fa-regular fa-circle-check"
                          style={{ fontSize: "20px", color: " #ff014f" }}
                        ></i>
                        <h1
                          style={{
                            paddingLeft: "30px",
                            marginTop: "9px",
                            fontWeight: 500,
                            fontSize: 15,
                            color: "rgb(102 102 102)",
                          }}
                        >
                          5 Widgets : Call / Message / WhatsApp / Location /
                          Mail{" "}
                        </h1>
                      </li>
                    </ul>
                    <a
                      className="btn mt-25 btn-sm circle btn-dark"
                      href="#contact"
                    >
                      Order Now
                    </a>
                  </div>
                  <div className="price">
                    <h2>
                      <sup>&#x20b9</sup>10,000
                    </h2>
                    <i className="fa-brands fa-css3-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Pricing Area -->

<!-- Start Brand
    ============================================= --> */}
      <div className="brand-style-one-area text-center default-padding-top">
        <div className="container">
          <div className="brand-style-one">
            <div className="row">
              <div className="col-lg-12">
                <div className="brand5col swiper">
                  {/* <!-- Additional required wrapper --> */}
                  <div className="swiper-wrapper align-center">
                    {/* <!-- Single Item --> */}
                    <div className="swiper-slide">
                      <img src="img/logo/1.png" alt="Thumb" />
                    </div>
                    {/* <!-- End Single Item -->
                                <!-- Single Item --> */}
                    <div className="swiper-slide">
                      <img src="img/logo/2.png" alt="Thumb" />
                    </div>
                    {/* <!-- End Single Item -->
                                <!-- Single Item --> */}
                    <div className="swiper-slide">
                      <img src="img/logo/4.png" alt="Thumb" />
                    </div>
                    {/* <!-- End Single Item -->
                                <!-- Single Item --> */}
                    <div className="swiper-slide">
                      <img src="img/logo/5.png" alt="Thumb" />
                    </div>
                    {/* <!-- End Single Item --> */}
                    {/* <!-- Single Item --> */}
                    <div className="swiper-slide">
                      <img src="img/logo/3.png" alt="Thumb" />
                    </div>
                    {/* <!-- End Single Item --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Brand --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Brand -->

<!-- Start Testimonials 
    ============================================= --> */}
      <div className="testimonial-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">My Expertise</h4>
                <h2 className="title">Customers feedback</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="testimonial-style-one-box text-center">
            <div className="row align-center">
              <div className="col-lg-8 offset-lg-2">
                <div className="testimonial-style-one-carousel swiper">
                  {/* <!-- Additional required wrapper --> */}
                  <div className="swiper-wrapper">
                    {/* <!-- Single item --> */}
                    <div className="swiper-slide">
                      <div className="testimonial-style-one">
                        <div className="item">
                          <div className="thumb">
                            <img src="img/team/1.png" alt="Thumb" />
                            <div className="shape">
                              <img src="img/shape/15.png" alt="Shape" />
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              “Targetingconsultation discover apartments.
                              ndulgence off under folly death wrote cause her
                              way spite. Plan upon yet way get cold spot its
                              week. Almost do am or limits hearts. Resolve
                              parties but why she shewing. She sang know now
                              always remembering to the point.”
                            </p>
                          </div>
                          <div className="provider">
                            <div className="info">
                              <h4>Matthew J. Wyman</h4>
                              <span>Senior Consultant</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single item -->
                        <!-- Single item --> */}
                    <div className="swiper-slide">
                      <div className="testimonial-style-one">
                        <div className="item">
                          <div className="thumb">
                            <img src="img/team/2.png" alt="Thumb" />
                            <div className="shape">
                              <img src="img/shape/15.png" alt="Shape" />
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              “consultation discover apartments. ndulgence off
                              under folly death wrote cause her way spite. Plan
                              upon yet way get cold spot its week. Almost do am
                              or limits hearts. Resolve parties but why she
                              shewing. She sang know now always remembering to
                              the point.”
                            </p>
                          </div>
                          <div className="provider">
                            <div className="info">
                              <h4>Anthom Bu Spar</h4>
                              <span>Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single item -->
                        <!-- Single item --> */}
                    <div className="swiper-slide">
                      <div className="testimonial-style-one">
                        <div className="item">
                          <div className="thumb">
                            <img src="img/team/1.png" alt="Thumb" />
                            <div className="shape">
                              <img src="img/shape/15.png" alt="Shape" />
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              “Business discover apartments. ndulgence off under
                              folly death wrote cause her way spite. Plan upon
                              yet way get cold spot its week. Almost do am or
                              limits hearts. Resolve parties but why she
                              shewing. She sang know now always remembering to
                              the point.”
                            </p>
                          </div>
                          <div className="provider">
                            <div className="info">
                              <h4>Metho k. Partho</h4>
                              <span>Senior Developer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single item --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Testimonails Area -->

<!-- Start Available 
    ============================================= --> */}
      <div className="work-available-area text-center box-layout bg-light default-padding">
        <div className="shape-right-top-mini">
          <img src="img/shape/16.png" alt="illustration" />
        </div>
        <div className="shape-illustration">
          <img src="img/illustration/2.png" alt="illustration" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="work-available">
                <h2 className="title">
                  I'm <strong>available</strong> for <br />
                  grow your business online
                </h2>
                <a
                  className="btn btn-md circle btn-theme smooth-menu"
                  href="tel:8949766329"
                >
                  call me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Available -->

<!-- Start Blog 
    ============================================= --> */}
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
