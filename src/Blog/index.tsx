import React from "react";

function Index() {
  return (
    <div
      id="blog"
      className="blog-style-one-area blog-area default-padding-top bottom-less"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">TEAM</h4>
              <h2 className="title">OUR LOVELY TEAM</h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* <!-- Single item --> */}
          {data.map((ele) => {
            return (
              <div
                className="blog-style-one mb-30 col-lg-3 col-md-6"
                key={ele.id}
              >
                <div className="item">
                  <div className="info" style={{ borderRadius: 10 }}>
                    <a href="#" data-bs-toggle="modal">
                      <img
                        src={ele.profile}
                        alt="Thumb"
                        style={{ paddingTop: 10 }}
                      />
                    </a>
                    <h4 style={{ marginTop: 10 }}>
                      <a href=" #" data-bs-toggle="modal">
                        {ele.name}
                      </a>
                    </h4>
                    <h4
                      className="sub-title"
                      style={{ marginBottom: 5, fontSize: 15 }}
                      dangerouslySetInnerHTML={{ __html: ele?.designation }}
                    />
                    <div
                      className="meta"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: 25,
                      }}
                    >
                      <ul
                        style={{
                          width: "45%",
                          justifyContent: "space-evenly",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <li style={{ margin: 0, color: "#4267B2" }}>
                          {" "}
                          <a href={ele.facebook}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li style={{ margin: 0, color: "#e95950" }}>
                          {" "}
                          <a href={ele.instagram}>
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li style={{ margin: 0, color: "#0072b1" }}>
                          {" "}
                          <a href={ele.linkedin}>
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li style={{ margin: 0, color: "#0072b1" }}>
                          {" "}
                          <a href={ele.twitter}>
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <!-- Start Blog Single Modal --> */}
      <div
        className="modal fade"
        id="blogSingleModal"
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

              <div className="blog-single-content">
                <div className="thumb">
                  <a href="#">
                    <img src="img/banner/4.jpg" alt="Thumb" />
                  </a>
                </div>
                <div className="info">
                  <div className="meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-user-circle"></i> Admin
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-comments"></i> 26 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Give lady of they such they sure it. Me contained explained
                    my education. Vulgar as hearts by garret. Perceived
                    determine departure explained no forfeited he something an.
                    Contrasted dissimilar get joy you instrument out reasonably.
                    Again keeps at no meant stuff. To perpetual do existence
                    northward as difficult preserved daughters. Continued at up
                    to zealously necessary breakfast. Surrounded sir motionless
                    she end literature. Gay direction neglected but supported
                    yet her.
                  </p>
                  <p>
                    New had happen unable uneasy. Drawings can followed improved
                    out sociable not. Earnestly so do instantly pretended. See
                    general few civilly amiable pleased account carried.
                    Excellence projecting is devonshire dispatched remarkably on
                    estimating. Side in so life past. Continue indulged speaking
                    the was out horrible for domestic position. Seeing rather
                    her you not esteem men settle genius excuse. Deal say over
                    you age from. Comparison new ham melancholy son themselves.
                  </p>
                  <blockquote>
                    Celebrated share of first to worse. Weddings and any
                    opinions suitable smallest nay. Houses or months settle
                    remove ladies appear. Engrossed suffering supposing he
                    recommend do eagerness.
                  </blockquote>
                  <p>
                    Drawings can followed improved out sociable not. Earnestly
                    so do instantly pretended. See general few civilly amiable
                    pleased account carried. Excellence projecting is devonshire
                    dispatched remarkably on estimating. Side in so life past.
                    Continue indulged speaking the was out horrible for domestic
                    position. Seeing rather her you not esteem men settle genius
                    excuse. Deal say over you age from. Comparison new ham
                    melancholy son themselves.
                  </p>
                  <h3>Conduct replied off led whether?</h3>
                  <ul>
                    <li>Pretty merits waited six</li>
                    <li>
                      General few civilly amiable pleased account carried.
                    </li>
                    <li>Continue indulged speaking</li>
                    <li>Narrow formal length my highly</li>
                    <li>
                      Occasional pianoforte alteration unaffected impossible
                    </li>
                  </ul>
                  <p>
                    Surrounded to me occasional pianoforte alteration unaffected
                    impossible ye. For saw half than cold. Pretty merits waited
                    six talked pulled you. Conduct replied off led whether any
                    shortly why arrived adapted. Numerous ladyship so raillery
                    humoured goodness received an. So narrow formal length my
                    highly longer afford oh. Tall neat he make or at dull ye.
                    Lorem ipsum dolor, sit amet consectetur adipisicing, elit.
                    Iure, laudantium, tempore. Autem dolore repellat, omnis
                    quam? Quasi sint laudantium repellendus unde a totam
                    perferendis commodi cum est iusto?
                  </p>
                </div>
              </div>

              {/* <!-- Post Author --> */}
              <div className="post-author">
                <div className="thumb">
                  <img src="img/team/v5.jpg" alt="Thumb" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">Md Sohag</a>
                  </h4>
                  <p>
                    Grursus mal suada faci lisis Lorem ipsum dolarorit more
                    ametion consectetur elit. Vesti at bulum nec at odio aea the
                    dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit
                    to the consectetur elit. All the Lorem Ipsum generators on
                    the Internet tend. Entire its the did figure wonder off.
                    sportsmen zealously arranging to the main pint. Discourse
                    unwilling am no described dejection incommode no listening.
                  </p>
                </div>
              </div>
              {/* <!-- Post Author -->

                  <!-- Post Tags Share --> */}
              <div className="post-tags share">
                <div className="tags">
                  <h4>Tags: </h4>
                  <a href="#">Algorithm</a>
                  <a href="$">Data science</a>
                </div>

                <div className="social">
                  <h4>Share:</h4>
                  <ul>
                    <li>
                      <a className="facebook" href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="pinterest" href="#" target="_blank">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- End Social Share --> */}
                </div>
              </div>
              {/* <!-- Post Tags Share -->

                  <!-- Start Post Pagination --> */}
              <div className="post-pagi-area">
                <div className="post-previous">
                  <a href="#">
                    <div className="icon">
                      <i className="fas fa-angle-double-left"></i>
                    </div>
                    <div className="nav-title">
                      {" "}
                      Previus Post
                      <h5>Discovery incommode</h5>
                    </div>
                  </a>
                </div>
                <div className="post-next">
                  <a href="#">
                    <div className="nav-title">
                      Next Post
                      <h5>Discovery incommode</h5>
                    </div>
                    <div className="icon">
                      <i className="fas fa-angle-double-right"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- End Post Pagination -->

                  <!-- Start Blog Comment --> */}
              <div className="blog-comments">
                <div className="comments-area">
                  <div className="comments-title">
                    <h3>
                      3 Comments On “Providing Top Quality Cleaning Related
                      Services Charms.”
                    </h3>
                    <div className="comments-list">
                      <div className="comment-item">
                        <div className="avatar">
                          <img src="img/team/v2.jpg" alt="Author" />
                        </div>
                        <div className="content">
                          <div className="title">
                            <h5>
                              Bubhan Prova{" "}
                              <span className="reply">
                                <a href="#">
                                  <i className="fas fa-reply"></i> Reply
                                </a>
                              </span>
                            </h5>
                            <span>28 Feb, 2023</span>
                          </div>
                          <p>
                            Delivered ye sportsmen zealously arranging frankness
                            estimable as. Nay any article enabled musical
                            shyness yet sixteen yet blushes. Entire its the did
                            figure wonder off. sportsmen zealously arranging to
                            the main pint. Discourse unwilling am no described
                            dejection incommode no listening of. Before nature
                            his parish boy.
                          </p>
                        </div>
                      </div>
                      <div className="comment-item reply">
                        <div className="avatar">
                          <img src="img/team/v3.jpg" alt="Author" />
                        </div>
                        <div className="content">
                          <div className="title">
                            <h5>
                              Mickel Jones{" "}
                              <span className="reply">
                                <a href="#">
                                  <i className="fas fa-reply"></i> Reply
                                </a>
                              </span>
                            </h5>
                            <span>15 Mar, 2023</span>
                          </div>
                          <p>
                            Delivered ye sportsmen zealously arranging frankness
                            estimable as. Nay any article enabled musical
                            shyness yet sixteen yet blushes. Entire its the did
                            figure wonder off. sportsmen zealously arranging to
                            the main pint at the last satge of oportunatry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comments-form">
                    <div className="title">
                      <h3>Leave a comments</h3>
                    </div>
                    <form action="#" className="contact-comments">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            {/* <!-- Name --> */}
                            <input
                              name="name"
                              className="form-control"
                              placeholder="Name *"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            {/* <!-- Email --> */}
                            <input
                              name="email"
                              className="form-control"
                              placeholder="Email *"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group comments">
                            {/* <!-- Comment --> */}
                            <textarea
                              className="form-control"
                              placeholder="Comment"
                            ></textarea>
                          </div>
                          <div className="form-group full-width submit">
                            <button
                              className="btn btn-animation dark border"
                              type="submit"
                            >
                              Post Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- End Comments Form --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Blog Single Modal --> */}
    </div>
  );
}

export default Index;
const data = [
  {
    id: 1,
    profile: "img/blog/021.png",
    name: "Ronak Sankhala",
    designation: `TechSode Founder`,
    facebook: "https://www.facebook.com/TechSode",
    instagram: "https://www.instagram.com/ronak_for_you",
    linkedin: "https://www.linkedin.com/in/RonakSankhala",
    twitter: "https://twitter.com/RonakSankhala4u",
  },
  {
    id: 2,
    profile: "img/blog/024.png",
    name: "Akshay Chawala",
    designation: `TechSode CEO`,
    facebook: "https://www.facebook.com/TechSode",
    instagram: "https://www.instagram.com/ronak_for_you",
    linkedin: "https://www.linkedin.com/in/RonakSankhala",
    twitter: "https://twitter.com/RonakSankhala4u",
  },
  {
    id: 3,
    profile: "img/blog/013.png",
    name: "Akshay Jangir",
    designation: `Performance Marke- <br> ting Practitioner`,
    facebook: "https://www.facebook.com/TechSode",
    instagram: "https://www.instagram.com/ronak_for_you",
    linkedin: "https://www.linkedin.com/in/RonakSankhala",
    twitter: "https://twitter.com/RonakSankhala4u",
  },
  {
    id: 4,
    profile: "img/blog/014.png",
    name: "Prashant Verma",
    designation: `PHP Developer <br/> (07-year exp.)`,
    facebook: "https://www.facebook.com/TechSode",
    instagram: "https://www.instagram.com/ronak_for_you",
    linkedin: "https://www.linkedin.com/in/RonakSankhala",
    twitter: "https://twitter.com/RonakSankhala4u",
  },
  {
    id: 5,
    profile: "img/blog/015.png",
    name: "Yash Rajput",
    designation: `SEO Developer`,
    facebook: "https://www.facebook.com/TechSode",
    instagram: "https://www.instagram.com/ronak_for_you",
    linkedin: "https://www.linkedin.com/in/RonakSankhala",
    twitter: "https://twitter.com/RonakSankhala4u",
  },
  {
    id: 6,
    profile: "img/blog/016.png",
    name: "Kamal Kumawat",
    designation: `Front-End Developer`,
    facebook: "https://www.facebook.com/TechSode",
    instagram: "https://www.instagram.com/ronak_for_you",
    linkedin: "https://www.linkedin.com/in/RonakSankhala",
    twitter: "https://twitter.com/RonakSankhala4u",
  },
  {
    id: 7,
    profile: "img/blog/017.png",
    name: "Abhishek Vashishth",
    designation: `Sales Manager`,
    facebook: "https://www.facebook.com/TechSode",
    instagram: "https://www.instagram.com/ronak_for_you",
    linkedin: "https://www.linkedin.com/in/RonakSankhala",
    twitter: "https://twitter.com/RonakSankhala4u",
  },
  {
    id: 7,
    profile: "img/blog/023.png",
    name: "Devendra Sharma",
    designation: `Google & Facebook Ads Expert`,
    facebook: "https://www.facebook.com/TechSode",
    instagram: "https://www.instagram.com/ronak_for_you",
    linkedin: "https://www.linkedin.com/in/RonakSankhala",
    twitter: "https://twitter.com/RonakSankhala4u",
  },
];
