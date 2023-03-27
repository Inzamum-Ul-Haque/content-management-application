import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./AddPostModal.css";
import { VscDiscard } from "react-icons/vsc";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";

const AddPostModal = ({ show, handleClose }) => {
  const addImageAction = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="add-post-form-container">
            <div className="content-title">
              <label htmlFor="for">Title of the post</label>
              <input type="text" placeholder="Title" required />
            </div>
            <div className="content-desc">
              <label htmlFor="for">Desc</label>
              <div
                contentEditable="true"
                data-placeholder="What's on your mind..."
                className="content-desc-input"
              ></div>
            </div>
            <div className="add-image-btn">
              <label htmlFor="image-upload">
                <input type="file" id="image-upload" onClick={addImageAction} />
                <span>Add Image</span>
                <span>
                  <IoMdPhotos />
                </span>{" "}
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <span>Discard</span>{" "}
            <span>
              <VscDiscard />
            </span>
          </Button>
          <Button variant="success" onClick={handleClose}>
            <span>Add Post</span>{" "}
            <span>
              <AiOutlineFileAdd />
            </span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPostModal;
