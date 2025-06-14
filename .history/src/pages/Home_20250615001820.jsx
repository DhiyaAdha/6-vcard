import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "../assets/svg/logo.svg";
import profileImg from "../assets/images/hero-sec/profile-img.png";
import downArrow from "../assets/svg/drop-down-arrow.svg";
import icon1 from "../assets/images/social-icon/icon1.svg";
import icon2 from "../assets/images/social-icon/icon2.svg";
import icon3 from "../assets/images/social-icon/icon3.svg";
import icon4 from "../assets/images/social-icon/icon4.svg";
import icon5 from "../assets/images/social-icon/icon5.svg";
import icon6 from "../assets/images/social-icon/icon6.svg";
import icon7 from "../assets/images/social-icon/icon7.svg";
import icon8 from "../assets/images/social-icon/icon8.svg";
import icon9 from "../assets/images/social-icon/icon9.svg";
import icon10 from "../assets/images/social-icon/icon10.svg";
import services1 from "../assets/images/services/services1.png";
import services2 from "../assets/images/services/services2.png";
import services3 from "../assets/images/services/services3.png";
import product1 from "../assets/images/main-img/product1.png";
import product2 from "../assets/images/main-img/product2.png";
import portfolio1 from "../assets/images/portfolio/portfolio1.png";
import portfolio2 from "../assets/images/portfolio/portfolio2.png";
import starIcon from "../assets/svg/star-icon.svg";
import testimonial1 from "../assets/images/main-img/testimonial1.png";
import clientLogo1 from "../assets/images/main-img/client-logo1.svg";
import dateIcon from "../assets/svg/date-icon.svg";
import timeIcon from "../assets/svg/time-icon.svg";
import blogimg from "../assets/images/main-img/blog-img.png";
import personIcon from "../assets/images/inquery/person-icon.svg";
import callIcon from "../assets/images/inquery/call-icon.svg";
import mailIcon from "../assets/images/inquery/mail-icon.svg";
import contacMailIcon from "../assets/images/contact/mail-icon.svg";
import contacCallIcon from "../assets/images/contact/call-icon.svg";
import contacOfficeIcon from "../assets/images/contact/office.svg";
import contacLocationIcon from "../assets/images/contact/location.svg";
import contacClockIcon from "../assets/images/contact/clock.svg";
import scanIcon from "../assets/images/bottom-sec/scan-icon.svg";
import shareIcon from "../assets/images/bottom-sec/share-icon.svg";
import bPlusIcon from "../assets/images/bottom-sec/plus-icon.svg";
import scannerImg from "../assets/images/main-img/scanner-img.png";
import projectPopImg2 from "../assets/images/portfolio/popup-2.jpg";
import PortfolioModal from "../component/PortfolioModal";
import ProductModal from "../component/ProductModal";
import BlogModal from "../component/BlogModal";

const Home = () => {
  // ---------- Date Piker --------------
  const [selectedDate, setSelectedDate] = useState(null);

  /*------------- services Slider --------------------------*/
  const services = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 370,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  /*------------- Product and Portfolio Slider --------------------------*/
  const product = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  /*------------- Product Modal --------------------------*/
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  const products = [
    {
      id: 1,
      title: "5 Page Website",
      price: 30,
      description:
        "Id aliquam turpis donec vulputate etiam. Justo tortor faucibus aenean habitant. Aliquet dui nibh varius velit tincidunt faucibus sem.",
      img: product1,
    },
    {
      id: 2,
      title: "7 Page Custom Website",
      price: 80,
      description:
        "Pellentesque egestas nibh at amet. Sodales felis neque placerat volutpat congue est hendrerit purus. Habitasse ipsum quam curabitur.",
      img: product2,
    },
  ];

  /*------------- Client Logo Slider --------------------------*/
  const clientlogo = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // ---------- Portfolio Modal  --------------
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "DStudio",
      shortDesc:
        "They are was greater open above shelter lets itself under appear sixth open gathering made upon can't own above midst gathering gathered he one us saying can't divide.",
      category: "Web Design",
      client: "Artboard Studio",
      startDate: "August 20, 2023",
      designer: "ThemeJunction",
      description1:
        "The goal is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      description2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      story: "There are many variations of passages...",
      approach:
        "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image1: portfolio1,
      image2: projectPopImg2,
      thumbnail: portfolio1,
    },
    {
      id: 2,
      title: "DesignX",
      shortDesc:
        "They are was greater open above shelter lets itself under appear sixth open gathering made upon can't own above midst gathering gathered he one us saying can't divide.",
      category: "UI/UX",
      client: "MockStudio",
      startDate: "October 10, 2023",
      designer: "UXTeam",
      description1:
        "The goal is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      description2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      approach:
        "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image1: portfolio2,
      image2: projectPopImg2,
      thumbnail: portfolio2,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // ---------- Blog Modal  --------------
  const [selectedBlog, setSelectedBlog] = useState(null);
  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    setShowModal(false);
  };
  const blogData = [
    {
      id: 1,
      title: "Leveraging Analytics for Business Improvement.",
      img: blogimg,
    },
  ];

  // ---------- scanner download and Share  --------------
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = scannerImg;
    link.download = "scanner-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareImage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this scanner image!",
          text: "Here is the scanner image I wanted to share with you.",
          url: scannerImg,
        });
      } catch (error) {
        console.error("Sharing failed:", error);
      }
    } else {
      alert("Sharing not supported in your browser.");
    }
  };
  return (
    <div>
      <div className="site-content">
        {/* <!--Freelancer content start --> */}
        <section id="freelancer-main" className="ceo-content">
          <div className="freelancer-main-wrap">
            <div className="header">
              <div className="header-content">
                <div className="header-logo">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                {/* <!-- Custom-translate --> */}
                <div className="custom-translate-container">
                  <div id="google_translate_element"></div>
                  <select id="customTranslate" className="custom-translate">
                    <option value="">Select</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="hi">Hindi</option>
                    <option value="zh-CN">Chinese</option>
                    <option value="it">Italian</option>
                    <option value="tr">Turkish</option>
                    <option value="ar">Arabic A</option>
                    <option value="pt">Portuguese</option>
                    <option value="ru">Russian</option>
                  </select>
                  <span className="custom-translate-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </span>
                  <span className="custom-translate-text">Select </span>
                  <span className="custom-translate-arrow">
                    <img src={downArrow} alt="downArrow" />
                  </span>
                </div>
                {/* <!-- Custom-translate End --> */}
              </div>
            </div>
            <div className="profile-content position-relative container">
              <div className="profile-sec text-center ">
                <div className="profile-img">
                  <img
                    className="oval-frame"
                    src={profileImg}
                    alt="profile-img"
                  />
                </div>
                <div className="profile-name">
                  <h1 className="mt-10">Katy Anderson</h1>
                  <p className="mt-5">Developer</p>
                  <p className="profile-title mt-30">
                    A web developer is a professional who specializes in
                    designing and building websites. Their primary
                    responsibility is to create and maintain the structure,
                    layout, and features of a website. Web developers can be
                    broadly categorized into front-end deve.
                  </p>
                </div>
              </div>
              <div className="social-icon-content mt-30">
                <a href="/">
                  <div className="social-icon-content-wrap">
                    <img src={icon1} alt="social-icon" className="red-color" />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer">
                  <div className="social-icon-content-wrap">
                    <img src={icon2} alt="social-icon" className="red-color" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer">
                  <div className="social-icon-content-wrap">
                    <img src={icon3} alt="social-icon" className="red-color" />
                  </div>
                </a>
                <a
                  href="https://wa.me/+1234567890"
                  target="_blank"
                  rel="noreferrer">
                  <div className="social-icon-content-wrap">
                    <img src={icon4} alt="social-icon" className="red-color" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer">
                  <div className="social-icon-content-wrap">
                    <img src={icon5} alt="social-icon" className="red-color" />
                  </div>
                </a>
                <a href="https://x.com/" target="_blank" rel="noreferrer">
                  <div className="social-icon-content-wrap">
                    <img src={icon6} alt="social-icon" className="red-color" />
                  </div>
                </a>
                <a
                  href="https://web.telegram.org/a/"
                  target="_blank"
                  rel="noreferrer">
                  <div className="social-icon-content-wrap">
                    <img src={icon7} alt="social-icon" className="red-color" />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer">
                  <div className="social-icon-content-wrap">
                    <img src={icon8} alt="social-icon" className="red-color" />
                  </div>
                </a>
              </div>
            </div>
            <div className="services-sec mt-30">
              <div className="services-top">
                <h2>My Services</h2>
              </div>
              <div className="services-sec-wrap mt-15">
                <Slider {...services}>
                  <div className="services-content">
                    <div className="sercices-img text-center">
                      <img src={services1} alt="services-img" />
                    </div>
                    <div className="sercices-details mt-15">
                      <h3>React Development</h3>
                      <p className="mt-5">
                        Id pellentesque sed eu sollicitudin. Ac turpis
                        scelerisque nec dignissim sit potenti integer at eget.
                        Urna felis nisl ornare in fermentum orci dictum. Viverra
                        amet nunc senectus mauris leo diam massa orci. Nam
                        lacinia.
                      </p>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="sercices-img text-center">
                      <img src={services2} alt="services-img" />
                    </div>
                    <div className="sercices-details mt-15">
                      <h3>WordPress Development</h3>
                      <p className="mt-5">
                        Id pellentesque sed eu sollicitudin. Ac turpis
                        scelerisque nec dignissim sit potenti integer at eget.
                        Urna felis nisl ornare in fermentum orci dictum. Viverra
                        amet nunc senectus mauris leo diam massa orci. Nam
                        lacinia.
                      </p>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="sercices-img text-center">
                      <img src={services3} alt="services-img" />
                    </div>
                    <div className="sercices-details mt-15">
                      <h3>Shopify Development</h3>
                      <p className="mt-5">
                        Id pellentesque sed eu sollicitudin. Ac turpis
                        scelerisque nec dignissim sit potenti integer at eget.
                        Urna felis nisl ornare in fermentum orci dictum. Viverra
                        amet nunc senectus mauris leo diam massa orci. Nam
                        lacinia.
                      </p>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="sercices-img text-center">
                      <img src={services2} alt="services-img" />
                    </div>
                    <div className="sercices-details mt-15">
                      <h3>WordPress Development</h3>
                      <p className="mt-5">
                        Id pellentesque sed eu sollicitudin. Ac turpis
                        scelerisque nec dignissim sit potenti integer at eget.
                        Urna felis nisl ornare in fermentum orci dictum. Viverra
                        amet nunc senectus mauris leo diam massa orci. Nam
                        lacinia.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="product-sec">
              <div className="services-top">
                <h2>Products</h2>
              </div>
              <div
                className="product-bottom-sec mt-10 container ps-0"
                data-cursor-text="DRAG"
                data-cursor="sm">
                <Slider {...product}>
                  {products.map((product) => (
                    <div
                      className="product-content mlr-auto mt-15"
                      key={product.id}
                      onClick={() => handleBuyNow(product)}>
                      <div className="prodcut-top">
                        <div className="product-img">
                          <img src={product.img} alt="product-img" />
                        </div>
                        <div className="prodcut-price">
                          <p>${product.price}</p>
                        </div>
                      </div>
                      <div className="product-bottom">
                        <h3 className="mt-15">{product.title}</h3>
                        <p className="product-txt mt-5">
                          I{product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
                {/* Modal Component */}
                <ProductModal
                  show={showModal}
                  onClose={() => setShowModal(false)}
                  product={selectedProduct}
                />
              </div>
              <div className="view-product mt-20">
                <Link to="/Product">View All Products</Link>
              </div>
            </div>
            <div className="portfolio-sec">
              <div
                className="portfolio-sec-wrap"
                data-cursor-text="Click"
                data-cursor="sm">
                <div className="services-top">
                  <h2>My Portfolio</h2>
                </div>
                <div className="portfolio-bottom mt-15 container ps-0">
                  <Slider {...product}>
                    {projects.map((project) => (
                      <div className="portfolio-img" key={project.id}>
                        <img
                          src={project.thumbnail}
                          alt="portfolio"
                          onClick={() => openModal(project)}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <PortfolioModal
                  show={showModal}
                  onHide={() => setShowModal(false)}
                  project={selectedProject}
                />
              </div>
            </div>
            <div className="details-sec">
              <div className="testimonial-sec">
                <div className="container">
                  <div className="services-top">
                    <h2>Testimonials</h2>
                  </div>
                  <div className="testimonial-sec-bottom">
                    <div
                      id="testimonial-slider"
                      className="carousel slide"
                      data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="testimonial-content">
                            <div className="rating-sec mt-15">
                              <img src={starIcon} alt="star-icon" />
                              <img src={starIcon} alt="star-icon" />
                              <img src={starIcon} alt="star-icon" />
                              <img src={starIcon} alt="star-icon" />
                              <img src={starIcon} alt="star-icon" />
                            </div>
                            <p className="testimonial-para mt-10">
                              Lobortis etiam lectus mollis vulputate non
                              egestas. Non aliquet facilisis leo tellus
                              vulputate malesuada et tellus. Maecenas arcu non
                              ultrices non est lorem at risus. Imperdiet
                              vulputate feugiat morbi faucibus vulputate
                              fermentum blandit faucibus vitae.
                            </p>
                            <div className="testimonial-sec-profile mt-10">
                              <div className="testimonial-client-img">
                                <img src={testimonial1} alt="testimonial-img" />
                              </div>
                              <div className="client-title">
                                <h3 className="text-start">Cole Rich</h3>
                                <p className="mt-5">Customer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="testimonial-content">
                            <div className="rating-sec mt-15">
                              <img src={starIcon} alt="star-icon" />
                              <img src={starIcon} alt="star-icon" />
                              <img src={starIcon} alt="star-icon" />
                              <img src={starIcon} alt="star-icon" />
                              <img src={starIcon} alt="star-icon" />
                            </div>
                            <p className="testimonial-para mt-10">
                              Lobortis etiam lectus mollis vulputate non
                              egestas. Non aliquet facilisis leo tellus
                              vulputate malesuada et tellus. Maecenas arcu non
                              ultrices non est lorem at risus. Imperdiet
                              vulputate feugiat morbi faucibus vulputate
                              fermentum blandit faucibus vitae.
                            </p>
                            <div className="testimonial-sec-profile mt-10">
                              <div className="testimonial-client-img">
                                <img src={testimonial1} alt="testimonial-img" />
                              </div>
                              <div className="client-title">
                                <h3 className="text-start">Cole Rich</h3>
                                <p className="mt-5">Customer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#testimonial-slider"
                        data-bs-slide="prev">
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#testimonial-slider"
                        data-bs-slide="next">
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="client-logo mt-30">
                <div className="services-top">
                  <h2>Our Clients</h2>
                </div>
                <div className="client-logo-bottom mt-15">
                  <div className="client-logo-wrap">
                    <Slider {...clientlogo}>
                      <div className="logo-slide">
                        <div className="logo-slide-wrap">
                          <img src={clientLogo1} alt="client-logo" />
                        </div>
                      </div>
                      <div className="logo-slide">
                        <div className="logo-slide-wrap">
                          <img src={clientLogo1} alt="client-logo" />
                        </div>
                      </div>
                      <div className="logo-slide">
                        <div className="logo-slide-wrap">
                          <img src={clientLogo1} alt="client-logo" />
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="appointment-sec">
                <div className="container">
                  <div className="services-top">
                    <h2>Make an Appointment</h2>
                  </div>
                  <div className="appointment-bottom">
                    <div className="appointment-bottom-wrap">
                      <form className="appointment-form">
                        <div className="appointment-date mt-15">
                          <div>
                            <label className="info-person" htmlFor="datepicker">
                              DATE
                            </label>
                          </div>
                          <div className="input-wrapper">
                            <span>
                              <img
                                src={dateIcon}
                                alt="date-icon-icon"
                                className="purple-filter "
                              />
                            </span>
                            <DatePicker
                              id="datepicker"
                              className="no-spinners color-black"
                              placeholderText="Pick A Date"
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              dateFormat="dd-y"
                              required
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="appointment-date mt-15">
                          <div>
                            <label className="info-person" htmlFor="datepicker">
                              TIME
                            </label>
                          </div>
                          <div className="date-list">
                            <div className="appointment-date-list">
                              <span>
                                <img
                                  src={timeIcon}
                                  alt="date-icon-icon"
                                  className="purple-filter"
                                />
                              </span>
                              <span> 09:00 - 10:00</span>
                            </div>
                            <div className="appointment-date-list">
                              <span>
                                <img
                                  src={timeIcon}
                                  alt="date-icon-icon"
                                  className="purple-filter"
                                />
                              </span>
                              <span> 10:00 - 11:00</span>
                            </div>
                            <div className="appointment-date-list">
                              <span>
                                <img
                                  src={timeIcon}
                                  alt="date-icon-icon"
                                  className="purple-filter"
                                />
                              </span>
                              <span> 11:00 - 12:00</span>
                            </div>
                            <div className="appointment-date-list">
                              <span>
                                <img
                                  src={timeIcon}
                                  alt="date-icon-icon"
                                  className="purple-filter"
                                />
                              </span>
                              <span> 12:00 - 01:00</span>
                            </div>
                            <div className="appointment-date-list">
                              <span>
                                <img
                                  src={timeIcon}
                                  alt="date-icon-icon"
                                  className="purple-filter"
                                />
                              </span>
                              <span> 02:00 - 03:00</span>
                            </div>
                            <div className="appointment-date-list">
                              <span>
                                <img
                                  src={timeIcon}
                                  alt="date-icon-icon"
                                  className="purple-filter"
                                />
                              </span>
                              <span> 03:00 - 04:00</span>
                            </div>
                            <div className="appointment-date-list">
                              <span>
                                <img
                                  src={timeIcon}
                                  alt="date-icon-icon"
                                  className="purple-filter"
                                />
                              </span>
                              <span> 04:00 - 05:00</span>
                            </div>
                            <div className="appointment-date-list">
                              <span>
                                <img
                                  src={timeIcon}
                                  alt="date-icon-icon"
                                  className="purple-filter"
                                />
                              </span>
                              <span> 05:00 - 06:00</span>
                            </div>
                          </div>
                        </div>
                        <div className="view-product mt-20">
                          <Link to="#">Make an Appointment</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-sec">
                <div className="container">
                  <div className="services-top">
                    <h2>Latest News & Blogs</h2>
                  </div>
                  <div className="blog-bottom-sec">
                    <div id="blog-slider" className=" slide mt-15">
                      {blogData.map((blog) => (
                        <div
                          className="blog-content mt-20"
                          key={blog.id}
                          onClick={() => handleOpenModal(blog)}>
                          <div className="blog-overlay"></div>
                          <img
                            src={blog.img}
                            alt="blog-img"
                            className="w-100"
                          />
                          <div className="blog-title">
                            <p>{blog.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Blog Modal */}
                    <BlogModal
                      show={showModal}
                      onClose={handleCloseModal}
                      blog={selectedBlog}
                    />
                    <div className="view-product mt-20">
                      <Link to="/Blog">View All Blogs</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inquiry-sec ">
              <div className="inquiry-sec-wrap container">
                <div className="services-top">
                  <h2>Inquiries</h2>
                </div>
                <form className="inquiry-form">
                  <div>
                    <label className="info-person mt-15" htmlFor="username">
                      Your Name
                    </label>
                    <div className="input-wrapper-form mt-5">
                      <span className="icon">
                        <img
                          src={personIcon}
                          alt="person-icon"
                          className="purple-filter"
                        />
                      </span>
                      <input
                        type="text"
                        id="username"
                        placeholder="Your Name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="info-person mt-15" htmlFor="phone-number">
                      Enter Phone Number
                    </label>
                    <div className="input-wrapper-form mt-5">
                      <span className="icon">
                        <img
                          src={callIcon}
                          alt="person-icon"
                          className="purple-filter"
                        />
                      </span>
                      <input
                        type="number"
                        id="phone-number"
                        placeholder="Your Phone Number"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="info-person mt-15" htmlFor="email">
                      Email Address
                    </label>
                    <div className="input-wrapper-form mt-5">
                      <span className="icon">
                        <img
                          src={mailIcon}
                          alt="person-icon"
                          className="purple-filter"
                        />
                      </span>
                      <input
                        type="text"
                        id="email"
                        placeholder="Your Email Address"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="info-person mt-15" htmlFor="email">
                      your message
                    </label>
                    <div className="input-wrapper-form textarea-txt mt-5">
                      <textarea
                        rows="4"
                        cols="50"
                        placeholder="Type a message here..."
                        className="custom-textarea border-0"
                        id="textarea"></textarea>
                    </div>
                  </div>
                  <div className="view-product mt-20">
                    <Link to="/">Send Message</Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="contact-sec container mt-30">
              <div className="contact-sec-wrap">
                <div className="services-top">
                  <h2>Contact Me</h2>
                  <h3 className="d-none">Hidden</h3>
                </div>
                <div className="contact-bottom-sec">
                  <div className="contact-details mt-15">
                    <div className="contact-icon">
                      <img src={contacMailIcon} alt="mail-icon" />
                    </div>
                    <div className="contact-content">
                      <h4>Email</h4>
                      <a href="mailto:jordan.smith@mail.com">
                        <p className="mt-10">jordan.smith@mail.com</p>
                      </a>
                    </div>
                  </div>
                  <div className="contact-details mt-10">
                    <div className="contact-icon">
                      <img src={contacCallIcon} alt="mail-icon" />
                    </div>
                    <div className="contact-content">
                      <h4>phone number</h4>
                      <a href="tel:+12345678900">
                        <p className="mt-10">+1 234 567 8900</p>
                      </a>
                    </div>
                  </div>
                  <div className="contact-details mt-10">
                    <div className="contact-icon">
                      <img src={contacOfficeIcon} alt="mail-icon" />
                    </div>
                    <div className="contact-content">
                      <h4>office number</h4>
                      <a href="tel:(555)555-1234">
                        <p className="mt-10">(555) 555-1234</p>
                      </a>
                    </div>
                  </div>
                  <div className="contact-details mt-10">
                    <div className="contact-icon">
                      <img src={contacLocationIcon} alt="mail-icon" />
                    </div>
                    <div className="contact-content">
                      <h4>office address</h4>
                      <p className="mt-10">
                        121 Parkview Street, ST Nova, New York
                      </p>
                    </div>
                  </div>
                  <div className="contact-details mt-10">
                    <div className="contact-icon">
                      <img src={contacClockIcon} alt="mail-icon" />
                    </div>
                    <div className="contact-content">
                      <h4>office HOURS</h4>
                      <div className="contact-time-list mt-10">
                        <div className="contact-list">
                          <span className="days-txt">Monday</span>
                          <span className="time-txt">09:00 - 22:00</span>
                        </div>
                        <div className="contact-list">
                          <span className="days-txt">Tuesday</span>
                          <span className="time-txt">09:00 - 22:00</span>
                        </div>
                        <div className="contact-list">
                          <span className="days-txt">Wednesday</span>
                          <span className="time-txt">09:00 - 22:00</span>
                        </div>
                        <div className="contact-list">
                          <span className="days-txt">Thursday</span>
                          <span className="time-txt">09:00 - 22:00</span>
                        </div>
                        <div className="contact-list">
                          <span className="days-txt">Friday</span>
                          <span className="time-txt">09:00 - 22:00</span>
                        </div>
                        <div className="contact-list">
                          <span className="days-txt">Saturday</span>
                          <span className="time-txt">09:00 - 22:00</span>
                        </div>
                        <div className="contact-list">
                          <span className="days-txt">Sunday</span>
                          <span className="time-txt">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-sec container mt-30">
              <div className="map-img">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5972.947970483601!2d-74.11083001911878!3d41.53733348863559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd2ec0808761b3%3A0x4c7e057168f91e51!2s121%20Parkview%20St%2C%20Newburgh%2C%20NY%2012550%2C%20USA!5e0!3m2!1sen!2sin!4v1726220356539!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map"></iframe>
              </div>
            </div>
            <div className="add-to-contact container">
              <div className="add-to-contact-wrap">
                <Link
                  to="#"
                  className="scan-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#product-modal-scan">
                  <img src={scanIcon} alt="scan-icon" />
                </Link>
                <Link
                  to="#"
                  className="scan-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#share-media-modal">
                  <img src={shareIcon} alt="share-icon" />
                </Link>
                <a href="tel:+12345678900" className="add-to-btn">
                  <div className="add-to-btn-sec">
                    <div className="add-txt">Add to Contact</div>
                    <div className="plus-btn">
                      <img src={bPlusIcon} alt="plus-icon" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer mt-10">
              <p>Made By Digi vCard Builder 💖 The_Krishna</p>
            </div>
          </div>
        </section>
        {/* <!--Freelancer content end --> */}
        {/* <!--  Scan modal start --> */}
        <div
          className="modal fade"
          id="product-modal-scan"
          tabIndex="-1"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="scan-content">
                  <div className="scanner">
                    <img src={scannerImg} alt="scanner-img" />
                  </div>
                  <div className="scan-txt mt-20">
                    <p>Scan me</p>
                  </div>
                </div>
                <div className="qr-btn mt-30">
                  <div className="btn1">
                    <Link to="#" onClick={downloadImage}>
                      Download
                    </Link>
                  </div>
                  <div className="btn1">
                    <Link to="#" onClick={shareImage}>
                      Share
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--  Scan modal end --> */}
        {/* <!--  Share modal start --> */}
        <div
          className="modal fade"
          id="share-media-modal"
          tabIndex="-1"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Share On</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="social-media-content">
                  <div className="social-media-img">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer">
                      <img src={icon2} alt="social-icon" />
                    </a>
                  </div>
                  <div className="social-media-img">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer">
                      <img src={icon3} alt="social-icon" />
                    </a>
                  </div>
                  <div className="social-media-img">
                    <a
                      href="https://wa.me/+1234567890"
                      target="_blank"
                      rel="noreferrer">
                      <img src={icon4} alt="social-icon" />
                    </a>
                  </div>
                  <div className="social-media-img">
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer">
                      <img src={icon5} alt="social-icon" />
                    </a>
                  </div>
                  <div className="social-media-img">
                    <a href="https://x.com/" target="_blank" rel="noreferrer">
                      <img src={icon6} alt="social-icon" />
                    </a>
                  </div>
                  <div className="social-media-img">
                    <a
                      href="https://web.telegram.org/a/"
                      target="_blank"
                      rel="noreferrer">
                      <img src={icon7} alt="social-icon" />
                    </a>
                  </div>
                  <div className="social-media-img">
                    <a
                      href="https://analytics.pinterest.com/login/"
                      target="_blank"
                      rel="noreferrer">
                      <img src={icon10} alt="social-icon" />
                    </a>
                  </div>
                  <div className="social-media-img">
                    <a
                      href="mailto:jordan.smith@mail.com"
                      target="_blank"
                      rel="noreferrer">
                      <img src={icon9} alt="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--  Share modal end --> */}
      </div>
    </div>
  );
};

export default Home;
