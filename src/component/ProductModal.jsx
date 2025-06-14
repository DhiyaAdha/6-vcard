import React from "react";
import { Modal, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ProductModal = ({ show, onClose, product }) => {
    if (!product) return null;

    return (
        <Modal show={show} onHide={onClose} centered scrollable>
            <Modal.Header closeButton>
                <Modal.Title>Buy Product</Modal.Title>
            </Modal.Header>
            <Modal.Body id="product-modal">
                <div className="product-content mlr-auto mt-15" key={product.id}>
                    <div className="prodcut-top">
                        <div className="product-img">
                            <img src={product.img} alt="product-img" />
                        </div>
                    </div>
                    <div className="product-bottom">
                        <div className="prodcut-price">
                            <p>${product.price}</p>
                        </div>
                        <h3 className="mt-15">{product.title}</h3>
                        <p className="product-txt mt-5">I{product.description}</p>
                    </div>
                </div>
                <Form>
                    <Form.Group className="feedback-email mt-10">
                        <Form.Label htmlFor="name" className="custom-lbl-feedback">Name:</Form.Label>
                        <Form.Control id="name" type="text" placeholder="Enter Name" autoComplete="off"/>
                    </Form.Group>
                    <Form.Group className="feedback-email mt-10">
                        <Form.Label htmlFor="email" className="custom-lbl-feedback">Email:</Form.Label>
                        <Form.Control type="email" id="email" placeholder="Enter Email" autoComplete="off"/>
                    </Form.Group>
                    <Form.Group className="feedback-email mt-10">
                        <Form.Label htmlFor="phone-number" className="custom-lbl-feedback">Phone:</Form.Label>
                        <Form.Control type="number" id="phone-number" placeholder="Enter Phone" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="feedback-email mt-10">
                        <Form.Label htmlFor="address" className="custom-lbl-feedback">Address:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Write here..." className="custom-textarea-product" id="address" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="mt-24">
                        <Form.Label htmlFor="subject" className="custom-lbl-feedback">Payment Method:</Form.Label>
                        <div className="custom-select-subject">
                            <Form.Select className="arrow-icon" id="subject">
                                <option>Choose Your Payment</option>
                                <option>Shipping Details</option>
                                <option>Payment Method</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                    <div className="product-btn mt-30">
                        <div className="buy-now mt-5">
                            <Link to="#">Save</Link>
                        </div>
                        <div className="buy-now discard-btn mt-5">
                            <Link to="#" onClick={onClose}> Discard</Link>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ProductModal;
