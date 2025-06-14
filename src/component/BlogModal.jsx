import React from "react";
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import popupimg1 from "../assets/images/blog/popup-1.png";
import profile from "../assets/images/blog/profile.png";

const BlogModal = ({ show, onClose, blog }) => {
    if (!blog) return null;

    return (
        <Modal show={show} onHide={onClose} centered scrollable size="md">
            <Modal.Header closeButton />
            <Modal.Body>
                <div className="blog-modal-content">
                    <div className="blog-bottom-content">
                        <h2>{blog.title}</h2>
                        <div className="blog-popup-img mt-15">
                            <img src={popupimg1} alt="popup" className="w-100" />
                        </div>
                        <div className="date-onner-coment-main mt-10">
                            <div className="date-onner-coment-sub-text">👤 Marina Willums</div>
                            <div className="date-onner-coment-sub-text">📅 20 APRIL 2025</div>
                        </div>
                        <p className="mt-10">
                            With over a decade of experience, we’ve established ourselves as one of the pioneering agencies in the . Our small, flexible, agile and design-led structures and processes allow us to be highly responsive and innovative. We’re made of passionate leaders, strategists, managers, developers, animators designer who work gether under one umbrella. We are a digitally-led, full-service creative agency.
                        </p>
                    </div>

                    <div className="blog-content-middle">
                        <h4 className="mt-10">Perfect From Beginning to End</h4>
                        <p className="mt-5">
                            Transfer details Choose the amount you want to send abroad, select how your receiver wants to get the money, and lastly, how you want to pay. You will always see our fees upfront, the final amount you will pay, and the exact amount your receiver will get.
                        </p>
                        <ul className="info-list mt-10">
                            <li>Aliquam Eros Justo, Posuere Loborti Robart That</li>
                            <li>Fermentum Ullamcorper Viverra Laoreet</li>
                            <li>Lobortis, Viverra Laoreet Augue Attis Hrculies</li>
                            <li>Fermentum Ullamcorper Viverra Laoreet</li>
                        </ul>
                    </div>

                    <div className="blog-tags-share mt-10">
                        <div className="blog-tags">
                            <div className="tag-title">
                                <h6>Tag:</h6>
                            </div>
                            <ul>
                                <li><Link to="#">#Technology</Link></li>
                                <li><Link to="#">#IT Business</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="profile-content-wrap mt-15">
                        <img src={profile} alt="profile" />
                        <div className="avater-content">
                            <h4 className="mt-10">Ronald Richards</h4>
                            <span className="mt-5">Founder CEO</span>
                            <p className="mt-10">
                                Delicate and specialty items are handled with the utmost care. We have specialized processes for such items to ensure they are cleaned gently and returned to you in pristine condition.
                            </p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default BlogModal;
