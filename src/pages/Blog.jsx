import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import blogimg from "../assets/images/main-img/blog-img.png"
import blogimg1 from "../assets/images/main-img/blog-img1.png"
import blogimg2 from "../assets/images/main-img/blog-img2.png"
import popupimg1 from "../assets/images/blog/popup-1.png"
import profile from "../assets/images/blog/profile.png"
import BlogModal from '../component/BlogModal';

const Blog = () => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
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
		{
			id: 2,
			title: "How to Use Bootstrap Components to Enhance Your Website",
			img: blogimg1,
		},
		{
			id: 3,
			title: "Start an online business and work from home",
			img: blogimg2,
		},
	];

	return (
		<div>
			<div className="site-content">
				{/* <!-- Single blog content start --> */}
				<section id="product-main" className="product-content-main">
					<div className="container">
						<div className="product-content-wrap">
							<h1 className="d-none">Product content</h1>
							<div className="product-sec-wrap pt-20">
								<div>
									<h2 className="product-title">Blogs</h2>
								</div>
								<div className="buy-now">
									<Link to="#" onClick={() => navigate(-1)}>Back</Link>
								</div>
							</div>
							<div>
								{blogData.map((blog) => (
									<div className="blog-content mt-20" key={blog.id}
										onClick={() => handleOpenModal(blog)}>
										<div className="blog-overlay"></div>
										<img src={blog.img} alt="blog-img" className="w-100" />
										<div className="blog-title">
											<p>{blog.title}</p>
										</div>
									</div>
								))}
							</div>

							{/* Blog Modal */}
							<BlogModal show={showModal} onClose={handleCloseModal} blog={selectedBlog} />
						</div>
					</div>
				</section>
				{/* <!-- Single blog content end --> */}
				{/* <!-- Single blog modal start --> */}
				<div className="modal fade" id="blog-modal" tabIndex="-1" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<div className="blog-modal-content">
									<div className="blog-bottom-content">
										<h2>Everything you need to learn about IT Solution for your Company.</h2>
										<div className="blog-popup-img mt-15">
											<img src={popupimg1} alt="blog-img" className="w-100" />
										</div>
										<div className="date-onner-coment-main mt-10">
											<div className="date-onner-coment-sub-text">
												<svg className="Icon-Set" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g>
														<path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
													</g>
												</svg>Marina Willums
											</div>
											<div className="date-onner-coment-sub-text">
												<svg className="Icon-Set" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g>
														<path d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
														</path>
													</g>
												</svg>20 APRIL 2025
											</div>
										</div>
										<p className="mt-10">With over a decade of experience, we’ve established ourselves as one of the pioneering agencies in the . Our small, flexible, agile and design-led structures and processes allow us to be highly responsive and innovative. We’re made of passionate leaders, strategists, managers, developers, animators designer who work gether under one umbrella. We are a digitally-led, full-service creative agency.</p>
									</div>
									<div className="blog-content-middle">
										<h3 className="d-none">Hidden</h3>
										<h4 className="mt-10">Perfect From Beginning to End</h4>
										<p className="mt-5">Transfer details Choose the amount you want to send abroad, select how your receiver wants to get the money, and lastly, how you want to pay. You will always see our fees upfront, the final amount you will pay, and the exact amount your receiver will get.</p>
										<ul className="info-list mt-10">
											<li>Aliquam Eros Justo, Posuere Loborti Robart That</li>
											<li>Fermentum Ullamcorper Viverra Laoreet</li>
											<li>Lobortis, Viverra Laoreet Augue Attis Hrculies</li>
											<li>Fermentum Ullamcorper Viverra Laoreet</li>
										</ul>
									</div>
									<div className="blog-tags-share mt-10">
										<h5 className="d-none">Hidden</h5>
										<div className="blog-tags">
											<div className="tag-title">
												<h6>Tag:</h6>
											</div>
											<ul><li><Link to="#">#Technology</Link></li>
												<li><Link to="#">#IT Business</Link></li>
											</ul>
										</div>
									</div>
									<div className="profile-content-wrap mt-15">
										<img src={profile} alt="profile-img" />
										<div className="avater-content">
											<h4 className="mt-10">Ronald Richards</h4>
											<span className="mt-5">Founder CEO</span>
											<p className="mt-10">Delicate and specialty items are handled with the utmost care. We have specialized processes for such items to ensure they are cleaned gently and returned to you in pristine condition.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Single blog modal end --> */}
			</div>
		</div>
	)
}

export default Blog