import React from "react";
import { Modal } from "react-bootstrap";

const PortfolioModal = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} size="md" centered scrollable>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="portfolio-content-wrap">
          <div className="gallery_item">
            <img src={project.image1} alt="portfolio-img" className="w-100" />
          </div>
          <div className="portfolio_info_text mt-15">
            <h2 className="title">{project.title}</h2>
            <div className="desc">
              <p className="mt-5">{project.shortDesc}</p>
            </div>
          </div>
          <div className="portfolio_info_items mt-10">
            <div className="info_item">
              <div className="key">Category</div>
              <div className="value mt-5">{project.category}</div>
            </div>
            <div className="info_item">
              <div className="key">Client</div>
              <div className="value mt-5">{project.client}</div>
            </div>
            <div className="info_item">
              <div className="key">Start Date</div>
              <div className="value mt-5">{project.startDate}</div>
            </div>
            <div className="info_item">
              <div className="key">Designer</div>
              <div className="value mt-5">{project.designer}</div>
            </div>
          </div>
          <div className="portfolio_description mt-15">
            <h3 className="title1">Project Description</h3>
            <div className="desc">
              <p>{project.description1}</p>
              <p className="mt-5">{project.description2}</p>
            </div>
          </div>
          <div className="portfolio_description mt-10">
            <h3 className="title1">The story</h3>
            <div className="desc">
              <p>{project.story}</p>
            </div>
          </div>
          <div className="portfolio_description mt-10">
            <h3 className="title1">OUR APPROACH</h3>
            <div className="desc">
              <p>{project.approach}</p>
            </div>
          </div>
          <div className="gallery_item mt-15">
            <img src={project.image2} alt="portfolio-img" className="w-100" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PortfolioModal;
