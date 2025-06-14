import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import product1 from "../assets/images/main-img/product1.png"
import product2 from "../assets/images/main-img/product2.png"
import ProductModal from '../component/ProductModal';
const products = [
	{
		id: 1,
		title: "5 Page Website",
		price: 30,
		description: "Id aliquam turpis donec vulputate etiam. Justo tortor faucibus aenean habitant. Aliquet dui nibh varius velit tincidunt faucibus sem.",
		img: product1,
	},
	{
		id: 2,
		title: "7 Page Custom Website",
		price: 80,
		description: "Pellentesque egestas nibh at amet. Sodales felis neque placerat volutpat congue est hendrerit purus. Habitasse ipsum quam curabitur.",
		img: product2,
	},
];
const Product = () => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleBuyNow = (product) => {
		setSelectedProduct(product);
		setShowModal(true);
	};
	return (
		<div>
			<div className="site-content">
				{/* < !--Single product content start-- > */}
				<section id="product-main" className="product-content-main">
					<div className="container">
						<div className="product-content-wrap">
							<h1 className="d-none">Product content</h1>
							<div className="product-sec-wrap pt-20">
								<div>
									<h2 className="product-title">OUR PRODUCTS</h2>
								</div>
								<div className="buy-now">
									<Link to="#" onClick={() => navigate(-1)}>Back</Link>
								</div>
							</div>
							<div className="product-bottom-single">
								{products.map((product) => (
									<div className="product-content mlr-auto mt-15" key={product.id}>
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
											<p className="product-txt mt-5">I{product.description}</p>
											<div className="buy-now mt-15">
												<Link to="#" onClick={() => handleBuyNow(product)} className="w-100">Buy Now</Link>
											</div>
										</div>
									</div>
								))}
								{/* Modal Component */}
								<ProductModal
									show={showModal}
									onClose={() => setShowModal(false)}
									product={selectedProduct}
								/>
							</div>
						</div>
					</div>
				</section>
				{/* <!--Single product content end-- > */}
				{/* < !--Single product modal start-- > */}
				<div className="modal fade" id="product-modal" tabIndex="-1" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="d-none">Hidden</h4>
								<h5 className="modal-title">Buy Product</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<div className="product-modal-content">
									<div className="product-content mlr-auto mt-15">
										<div className="prodcut-top">
											<div className="product-img">
												<img src={product1} alt="product-img" />
											</div>
											<div className="prodcut-price">
												<p>$80</p>
											</div>
										</div>
										<div className="product-bottom ">
											<h3 className="mt-15">7 Page Custom Website</h3>
											<p className="product-txt mt-5">Pellentesque egestas nibh at amet. Sodales felis neque placerat volutpat congue est hendrerit purus. Habitasse ipsum quam curabitur.</p>
										</div>
									</div>
									<form className="product-form mt-15">
										<div className="feedback-email">
											<label htmlFor="name" className="custom-lbl-feedback">Name :</label>
											<input type="text" id="name" placeholder="Enter Name" autoComplete="off" />
										</div>
										<div className="feedback-email mt-10">
											<label htmlFor="email" className="custom-lbl-feedback">Email :</label>
											<input type="email" id="email" placeholder="Enter Email" autoComplete="off" />
										</div>
										<div className="feedback-email mt-10">
											<label htmlFor="phone-number" className="custom-lbl-feedback">Phone :</label>
											<input type="number" id="phone-number" placeholder="Enter Phone" autoComplete="off" />
										</div>
										<div className="feedback-email mt-10">
											<label htmlFor="address" className="custom-lbl-feedback">Address :</label>
											<textarea rows="4" cols="50" placeholder="Write here..." className="custom-textarea-product" id="address" autoComplete="off"></textarea>
										</div>
										<div className="mt-24">
											<label htmlFor="subject" className="custom-lbl-feedback">Payment Method :</label>
											<div className="custom-select-subject">
												<select name="persons" className="arrow-icon" id="subject">
													<option>Choose Your Payment</option>
													<option>Shipping Details</option>
													<option>Payment Method</option>
												</select>
											</div>
										</div>
										<div className="product-btn mt-30">
											<div className="buy-now mt-5">
												<Link to="#">Save</Link>
											</div>
											<div className="buy-now discard-btn mt-5">
												<Link to="#" data-bs-dismiss="modal"> Discard</Link>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--Single product modal end-- > */}
			</div>
		</div>
	)
}
export default Product